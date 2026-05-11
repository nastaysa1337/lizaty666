document.documentElement.classList.add('is-loading');

(function initBrandUi(){
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
  document.querySelectorAll('.zodiac-bg').forEach(function(el){el.remove();});
})();

(function addMobileHeroFix(){
  var css = '@media(max-width:768px){' +
    '#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{' +
      'left:50%!important;right:auto!important;width:106%!important;transform:translateX(-51%)!important;object-fit:contain!important;object-position:center top!important;' +
    '}' +
    '#hero.home-hero-upgraded .hero-visual,#hero .hero-visual{overflow:hidden!important;}' +
  '}' +
  '@media(max-width:480px){' +
    '#hero.home-hero-upgraded .photo-hero img,#hero .photo-hero img{width:104%!important;transform:translateX(-50%)!important;}' +
  '}';
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

  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r=card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX-r.left)+'px');
      card.style.setProperty('--my', (e.clientY-r.top)+'px');
    });
  });
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
})();