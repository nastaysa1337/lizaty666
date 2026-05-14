document.documentElement.classList.add('is-loading');

function initBrandUi(){
  if(!document.body) return;
  function div(c){var e=document.createElement('div');e.className=c;return e;}

  if(!document.querySelector('.brand-loader')){
    var loader=div('brand-loader');
    var inner=div('brand-loader__inner');
    var sigil=div('brand-loader__sigil');
    var text=div('brand-loader__text');
    var line=div('brand-loader__line');
    sigil.textContent='liz';
    text.textContent='астрология · руны · свечи';
    inner.appendChild(sigil);
    inner.appendChild(text);
    inner.appendChild(line);
    loader.appendChild(inner);
    document.body.insertBefore(loader, document.body.firstChild);
  }

  if(!document.querySelector('.brand-cursor')) document.body.appendChild(div('brand-cursor'));
  if(!document.querySelector('.brand-cursor-dot')) document.body.appendChild(div('brand-cursor-dot'));
  if(!document.querySelector('.moon-light')) document.body.appendChild(div('moon-light'));
  if(!document.querySelector('.page-transition')) document.body.appendChild(div('page-transition'));
  document.querySelectorAll('.zodiac-bg').forEach(function(el){el.remove();});
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initBrandUi);
}else{
  initBrandUi();
}

(function addGlobalSafetyCss(){
  var css = '.zodiac-bg,.zodiac-bg *{display:none!important;animation:none!important}' +
    '@media(max-width:768px){' +
      '#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{' +
        'left:50%!important;right:auto!important;width:106%!important;transform:translateX(-51%)!important;object-fit:contain!important;object-position:center top!important;' +
      '}' +
      '#hero.home-hero-upgraded .hero-visual,#hero .hero-visual{overflow:hidden!important;}' +
    '}' +
    '@media(max-width:480px){' +
      '#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{width:104%!important;transform:translateX(-50%)!important;}' +
    '}';
  var old=document.getElementById('mobile-hero-position-fix');
  if(old) old.remove();
  var style=document.createElement('style');
  style.id='mobile-hero-position-fix';
  style.textContent=css;
  document.head.appendChild(style);
})();

function hideBrandLoader(){
  var loader=document.querySelector('.brand-loader');
  if(loader) loader.classList.add('hide');
  document.documentElement.classList.remove('is-loading');
}

window.addEventListener('load', function(){
  setTimeout(hideBrandLoader, 450);
});
setTimeout(hideBrandLoader, 1800);

document.addEventListener('DOMContentLoaded', function(){
  initBrandUi();

  var stars=document.getElementById('starsContainer');
  if(stars && !stars.dataset.ready){
    stars.dataset.ready='1';
    var f=document.createDocumentFragment();
    for(var i=0;i<42;i++){
      var s=document.createElement('span');
      s.className='star';
      s.style.left=(Math.random()*100)+'%';
      s.style.top=(Math.random()*100)+'%';
      s.style.setProperty('--dur',(2+Math.random()*4)+'s');
      s.style.setProperty('--del',(Math.random()*4)+'s');
      f.appendChild(s);
    }
    stars.appendChild(f);
  }

  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}
      });
    },{threshold:0.08});
    document.querySelectorAll('.fi').forEach(function(el){obs.observe(el);});
  }else{
    document.querySelectorAll('.fi').forEach(function(el){el.classList.add('vis');});
  }

  document.querySelectorAll('.card,.cinematic-card,.service-card,.service-full,.prog-card,.prod-card,.screenshot-slot,.whom-card,.mod-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r=card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX-r.left)+'px');
      card.style.setProperty('--my', (e.clientY-r.top)+'px');
    });
  });

  initPremiumMotion();
});

function openMenu(btn){
  var nav=document.getElementById('mobileNav') || document.getElementById('mobNav');
  if(nav) nav.classList.add('open');
  if(btn) btn.setAttribute('aria-expanded','true');
}
function closeMenu(){
  var nav=document.getElementById('mobileNav') || document.getElementById('mobNav');
  if(nav) nav.classList.remove('open');
  var b=document.querySelector('.burger');
  if(b) b.setAttribute('aria-expanded','false');
}
function openMob(btn){openMenu(btn);}
function closeMob(){closeMenu();}

function toggleFaq(btn){
  var item=btn.closest('.faq-item');
  if(!item) return;
  var isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i){
    i.classList.remove('open');
    var b=i.querySelector('.faq-q');
    if(b) b.setAttribute('aria-expanded','false');
  });
  if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}
}
function toggleExpand(btn){
  var body=btn.nextElementSibling;
  if(!body) return;
  var isOpen=body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}

(function brandCursor(){
  function initCursor(){
    var cursor=document.querySelector('.brand-cursor');
    var dot=document.querySelector('.brand-cursor-dot');
    if(!cursor || !dot) return;
    window.addEventListener('mousemove', function(e){
      cursor.style.left=e.clientX+'px';
      cursor.style.top=e.clientY+'px';
      dot.style.left=e.clientX+'px';
      dot.style.top=e.clientY+'px';
    });
    document.addEventListener('mouseover', function(e){
      if(e.target.closest('a,button,.card')) cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', function(e){
      if(e.target.closest('a,button,.card')) cursor.classList.remove('hover');
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCursor);
  else initCursor();
})();

async function initPremiumMotion(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var motionApi=null;
  try{
    motionApi = await import('https://cdn.jsdelivr.net/npm/motion@12/+esm');
  }catch(e){
    motionApi = null;
  }

  var animate = motionApi && motionApi.animate ? motionApi.animate : function(el, keyframes, options){
    if(!el || !el.animate) return null;
    return el.animate(keyframes, Object.assign({duration:650, easing:'cubic-bezier(.22,1,.36,1)', fill:'forwards'}, options || {}));
  };
  var stagger = motionApi && motionApi.stagger ? motionApi.stagger : function(step, opts){
    opts=opts||{};
    return function(i){return (opts.start || 0) + i * step;};
  };

  document.documentElement.classList.add('motion-ready');

  var hero=document.getElementById('hero');
  if(hero){
    var heroItems=[];
    ['.hero-tag','.hero h1','.hero-sub','.hero-btns','.hero-services'].forEach(function(sel){
      var node=hero.querySelector(sel);
      if(node) heroItems.push(node);
    });
    heroItems.forEach(function(el,i){
      animate(el,{opacity:[0,1],transform:['translateY(24px)','translateY(0)']},{duration:.75,delay:.12 + i*.08,easing:[.22,1,.36,1],fill:'both'});
    });
    var heroImage=hero.querySelector('.photo-hero img,.hero-visual img,.about-frame img');
    if(heroImage){
      animate(heroImage,{opacity:[0,1],transform:['translateY(22px) scale(1.035)','translateY(0) scale(1)']},{duration:1.15,delay:.22,easing:[.22,1,.36,1],fill:'both'});
    }
  }

  var revealGroups='section,.prog-card,.service-full,.service-card,.choose-card,.recog-card,.dir-card,.after-card,.method-card,.whom-card,.mod-card,.prod-card,.screenshot-slot,.faq-item,.step,.stair';
  var revealEls=Array.prototype.slice.call(document.querySelectorAll(revealGroups)).filter(function(el){
    return !el.closest('#hero') && !el.dataset.motionBound;
  });
  revealEls.forEach(function(el){el.dataset.motionBound='1';});

  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el=entry.target;
        animate(el,{opacity:[0,1],transform:['translateY(28px) scale(.985)','translateY(0) scale(1)']},{duration:.78,easing:[.22,1,.36,1],fill:'both'});
        observer.unobserve(el);
      });
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    revealEls.forEach(function(el){
      el.style.opacity='0';
      observer.observe(el);
    });
  }

  var groupSelectors=['.services-grid','.choose-grid','.cards-3','.dir-grid','.after-grid','.method-grid','.whom-grid','.modules-grid','.products-grid','.screenshots-grid','.steps','.staircase','.prog-list','.faq-list'];
  groupSelectors.forEach(function(selector){
    document.querySelectorAll(selector).forEach(function(group){
      if(group.dataset.staggerBound) return;
      group.dataset.staggerBound='1';
      var children=Array.prototype.slice.call(group.children).filter(function(child){return child.offsetParent !== null;});
      if(!children.length) return;
      if('IntersectionObserver' in window){
        var io=new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(!entry.isIntersecting) return;
            children.forEach(function(child,i){
              animate(child,{opacity:[0,1],transform:['translateY(22px)','translateY(0)']},{duration:.68,delay:stagger(.055,{start:.04})(i),easing:[.22,1,.36,1],fill:'both'});
            });
            io.unobserve(group);
          });
        },{threshold:.1,rootMargin:'0px 0px -8% 0px'});
        children.forEach(function(child){child.style.opacity='0';});
        io.observe(group);
      }
    });
  });

  var hoverTargets=document.querySelectorAll('.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta,.header-cta,.footer-tg,.service-card,.service-full,.prog-card,.prod-card,.choose-card,.dir-card,.whom-card,.mod-card');
  hoverTargets.forEach(function(el){
    if(el.dataset.motionHover) return;
    el.dataset.motionHover='1';
    el.addEventListener('mouseenter',function(){
      animate(el,{transform:['translateY(0) scale(1)','translateY(-3px) scale(1.012)']},{duration:.28,easing:[.22,1,.36,1],fill:'forwards'});
    });
    el.addEventListener('mouseleave',function(){
      animate(el,{transform:['translateY(-3px) scale(1.012)','translateY(0) scale(1)']},{duration:.32,easing:[.22,1,.36,1],fill:'forwards'});
    });
  });

  var transition=document.querySelector('.page-transition');
  if(transition){
    document.querySelectorAll('a[href]').forEach(function(link){
      var href=link.getAttribute('href');
      if(!href || href.indexOf('#')===0 || href.indexOf('mailto:')===0 || href.indexOf('tel:')===0 || link.target==='_blank') return;
      link.addEventListener('click',function(e){
        if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        transition.classList.add('active');
        setTimeout(function(){window.location.href=href;},360);
      });
    });
  }
}
