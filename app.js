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

function injectPremiumStyles(){
  var old=document.getElementById('premium-global-upgrade');
  if(old) old.remove();
  var style=document.createElement('style');
  style.id='premium-global-upgrade';
  style.textContent = [
    'html{background:#050505;}',
    'body{overflow-x:hidden;}',
    '.zodiac-bg,.zodiac-bg *{display:none!important;animation:none!important;}',
    '.brand-loader{position:fixed;inset:0;z-index:20000;background:#050505;display:flex;align-items:center;justify-content:center;transition:opacity .55s ease,visibility .55s ease;}',
    '.brand-loader.hide{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}',
    '.brand-loader__inner{text-align:center;}',
    '.brand-loader__sigil{font-family:Unbounded,system-ui,sans-serif;font-size:44px;font-weight:900;color:#C9A45C;letter-spacing:-.06em;}',
    '.brand-loader__text{margin-top:12px;color:#B7B1AA;font-size:11px;text-transform:uppercase;letter-spacing:.18em;}',
    '.brand-loader__line{width:160px;height:1px;background:linear-gradient(90deg,transparent,#C9A45C,transparent);margin:20px auto 0;animation:lizLoadLine 1s ease-in-out infinite;}',
    '@keyframes lizLoadLine{50%{opacity:.24;transform:scaleX(.72)}}',
    '.page-transition{position:fixed;inset:0;background:#050505;z-index:15000;pointer-events:none;opacity:0;transition:opacity .38s ease;}',
    '.page-transition.active{opacity:1;}',
    '.moon-light{position:fixed;right:-140px;top:12vh;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(201,164,92,.085),transparent 70%);pointer-events:none;z-index:0;animation:moonFloatPremium 8s ease-in-out infinite;}',
    '@keyframes moonFloatPremium{50%{transform:translate3d(-12px,30px,0);opacity:.78}}',
    '.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta,.header-cta,.footer-tg,.nav-cta{will-change:transform,box-shadow;}',
    '.btn-primary:hover,.svc-cta:hover,.prog-cta:hover,.prod-cta:hover,.header-cta:hover,.footer-tg:hover,.nav-cta:hover{box-shadow:0 0 38px rgba(201,164,92,.22);}',
    '.btn-secondary:hover{box-shadow:0 0 30px rgba(201,164,92,.10);}',
    '.card,.service-card,.service-full,.prog-card,.prod-card,.choose-card,.dir-card,.whom-card,.mod-card,.screenshot-slot,.recog-card,.after-card,.method-card{position:relative;overflow:hidden;will-change:transform,border-color,box-shadow;}',
    '.card:before,.service-card:before,.service-full:before,.prog-card:before,.prod-card:before,.choose-card:before,.dir-card:before,.whom-card:before,.mod-card:before,.screenshot-slot:before,.recog-card:before,.after-card:before,.method-card:before{content:"";position:absolute;inset:-1px;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(201,164,92,.16),transparent 36%);opacity:0;transition:opacity .28s ease;pointer-events:none;z-index:0;}',
    '.card:hover:before,.service-card:hover:before,.service-full:hover:before,.prog-card:hover:before,.prod-card:hover:before,.choose-card:hover:before,.dir-card:hover:before,.whom-card:hover:before,.mod-card:hover:before,.screenshot-slot:hover:before,.recog-card:hover:before,.after-card:hover:before,.method-card:hover:before{opacity:1;}',
    '.card>* , .service-card>* , .service-full>* , .prog-card>* , .prod-card>* , .choose-card>* , .dir-card>* , .whom-card>* , .mod-card>* , .screenshot-slot>* , .recog-card>* , .after-card>* , .method-card>*{position:relative;z-index:1;}',
    '.card:hover,.service-card:hover,.service-full:hover,.prog-card:hover,.prod-card:hover,.choose-card:hover,.dir-card:hover,.whom-card:hover,.mod-card:hover,.screenshot-slot:hover,.recog-card:hover,.after-card:hover,.method-card:hover{box-shadow:0 18px 55px rgba(0,0,0,.24),0 0 44px rgba(201,164,92,.08);}',
    '.fi{will-change:transform,opacity;}',
    '@media(pointer:fine){body{cursor:none}.brand-cursor{display:block;position:fixed;z-index:21000;width:38px;height:38px;border:1px solid rgba(201,164,92,.55);border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);transition:width .2s ease,height .2s ease,background .2s ease,opacity .2s ease}.brand-cursor.hover{width:64px;height:64px;background:rgba(201,164,92,.06)}.brand-cursor-dot{display:block;position:fixed;z-index:21001;width:5px;height:5px;background:#C9A45C;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%)}}',
    '@media(max-width:768px){.moon-light{display:none}#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{left:50%!important;right:auto!important;width:106%!important;max-width:none!important;transform:translateX(-50%)!important;object-fit:contain!important;object-position:center top!important}#hero.home-hero-upgraded .hero-visual,#hero .hero-visual{overflow:hidden!important}.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta{min-height:50px}}',
    '@media(max-width:480px){#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{width:104%!important;transform:translateX(-50%)!important}}',
    '@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}.brand-loader{display:none!important}.page-transition{display:none!important}}'
  ].join('\n');
  document.head.appendChild(style);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){initBrandUi();injectPremiumStyles();});
}else{
  initBrandUi();
  injectPremiumStyles();
}

function hideBrandLoader(){
  var loader=document.querySelector('.brand-loader');
  if(loader) loader.classList.add('hide');
  document.documentElement.classList.remove('is-loading');
}
window.addEventListener('load', function(){setTimeout(hideBrandLoader, 320);});
setTimeout(hideBrandLoader, 1400);
setTimeout(hideBrandLoader, 2600);

function bootStars(){
  var stars=document.getElementById('starsContainer');
  if(!stars || stars.dataset.ready) return;
  stars.dataset.ready='1';
  var f=document.createDocumentFragment();
  for(var i=0;i<46;i++){
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

function initFallbackReveal(){
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
}

function initGlowTracking(){
  document.querySelectorAll('.card,.cinematic-card,.service-card,.service-full,.prog-card,.prod-card,.screenshot-slot,.whom-card,.mod-card,.choose-card,.dir-card,.recog-card,.after-card,.method-card').forEach(function(card){
    if(card.dataset.glowBound) return;
    card.dataset.glowBound='1';
    card.addEventListener('mousemove', function(e){
      var r=card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX-r.left)+'px');
      card.style.setProperty('--my', (e.clientY-r.top)+'px');
    });
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initBrandUi();
  injectPremiumStyles();
  bootStars();
  initFallbackReveal();
  initGlowTracking();
  initPremiumMotion();
});

function openMenu(btn){
  var nav=document.getElementById('mobileNav') || document.getElementById('mobNav');
  if(nav) nav.classList.add('open');
  if(btn) btn.setAttribute('aria-expanded','true');
  document.addEventListener('keydown',handleEsc);
}
function closeMenu(){
  var nav=document.getElementById('mobileNav') || document.getElementById('mobNav');
  if(nav) nav.classList.remove('open');
  var b=document.querySelector('.burger');
  if(b) b.setAttribute('aria-expanded','false');
  document.removeEventListener('keydown',handleEsc);
}
function openMob(btn){openMenu(btn);}
function closeMob(){closeMenu();}
function handleEsc(e){if(e.key==='Escape') closeMenu();}

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
      if(e.target.closest('a,button,.card,.service-card,.prog-card,.prod-card,.choose-card')) cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', function(e){
      if(e.target.closest('a,button,.card,.service-card,.prog-card,.prod-card,.choose-card')) cursor.classList.remove('hover');
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCursor);
  else initCursor();
})();

var premiumMotionStarted=false;
async function initPremiumMotion(){
  if(premiumMotionStarted) return;
  premiumMotionStarted=true;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var motionApi=null;
  var timeout=new Promise(function(resolve){setTimeout(function(){resolve(null);},700);});
  var importMotion=import('https://cdn.jsdelivr.net/npm/motion@12/+esm').catch(function(){return null;});
  try{motionApi=await Promise.race([importMotion, timeout]);}catch(e){motionApi=null;}

  var animate = motionApi && motionApi.animate ? motionApi.animate : function(el, keyframes, options){
    if(!el || !el.animate) return null;
    var duration=((options && options.duration) || .65) * 1000;
    var delay=((options && options.delay) || 0) * 1000;
    return el.animate(keyframes, {duration:duration,delay:delay,easing:'cubic-bezier(.22,1,.36,1)',fill:(options && options.fill) || 'both'});
  };
  var stagger = motionApi && motionApi.stagger ? motionApi.stagger : function(step, opts){opts=opts||{};return function(i){return (opts.start || 0) + i * step;};};

  document.documentElement.classList.add('motion-ready');

  var hero=document.getElementById('hero');
  if(hero){
    var heroItems=[];
    ['.hero-tag','.hero h1','.hero-sub','.hero-btns','.hero-services','.quick-nav'].forEach(function(sel){var node=hero.querySelector(sel);if(node) heroItems.push(node);});
    heroItems.forEach(function(el,i){animate(el,{opacity:[0,1],transform:['translateY(24px)','translateY(0)']},{duration:.75,delay:.10+i*.07,fill:'both'});});
    var heroImage=hero.querySelector('.photo-hero img,.hero-visual img,.about-frame img,.hero-image');
    if(heroImage){animate(heroImage,{opacity:[0,1],transform:['translateY(20px) scale(1.03)','translateY(0) scale(1)']},{duration:1.05,delay:.18,fill:'both'});}
  }

  var revealSelectors='section,.prog-card,.service-full,.service-card,.choose-card,.recog-card,.dir-card,.after-card,.method-card,.whom-card,.mod-card,.prod-card,.screenshot-slot,.faq-item,.step,.stair,.card';
  var revealEls=Array.prototype.slice.call(document.querySelectorAll(revealSelectors)).filter(function(el){return !el.closest('#hero') && !el.dataset.motionBound;});
  revealEls.forEach(function(el){el.dataset.motionBound='1';});

  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el=entry.target;
        animate(el,{opacity:[0,1],transform:['translateY(26px) scale(.985)','translateY(0) scale(1)']},{duration:.72,fill:'both'});
        observer.unobserve(el);
      });
    },{threshold:.10,rootMargin:'0px 0px -8% 0px'});
    revealEls.forEach(function(el){el.style.opacity='0';observer.observe(el);});
  }

  var groupSelectors=['.services-grid','.choose-grid','.cards-3','.dir-grid','.after-grid','.method-grid','.whom-grid','.modules-grid','.products-grid','.screenshots-grid','.steps','.staircase','.prog-list','.faq-list','.grid'];
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
            children.forEach(function(child,i){animate(child,{opacity:[0,1],transform:['translateY(20px)','translateY(0)']},{duration:.62,delay:stagger(.045,{start:.03})(i),fill:'both'});});
            io.unobserve(group);
          });
        },{threshold:.08,rootMargin:'0px 0px -8% 0px'});
        children.forEach(function(child){child.style.opacity='0';});
        io.observe(group);
      }
    });
  });

  var hoverTargets=document.querySelectorAll('.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta,.header-cta,.footer-tg,.nav-cta,.service-card,.service-full,.prog-card,.prod-card,.choose-card,.dir-card,.whom-card,.mod-card,.card');
  hoverTargets.forEach(function(el){
    if(el.dataset.motionHover) return;
    el.dataset.motionHover='1';
    el.addEventListener('mouseenter',function(){animate(el,{transform:['translateY(0) scale(1)','translateY(-3px) scale(1.012)']},{duration:.24,fill:'forwards'});});
    el.addEventListener('mouseleave',function(){animate(el,{transform:['translateY(-3px) scale(1.012)','translateY(0) scale(1)']},{duration:.28,fill:'forwards'});});
  });

  var transition=document.querySelector('.page-transition');
  if(transition){
    document.querySelectorAll('a[href]').forEach(function(link){
      if(link.dataset.transitionBound) return;
      link.dataset.transitionBound='1';
      var href=link.getAttribute('href');
      if(!href || href.indexOf('#')===0 || href.indexOf('mailto:')===0 || href.indexOf('tel:')===0 || link.target==='_blank') return;
      link.addEventListener('click',function(e){
        if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        transition.classList.add('active');
        setTimeout(function(){window.location.href=href;},260);
      });
    });
  }
}
