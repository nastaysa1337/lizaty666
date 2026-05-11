document.documentElement.classList.add('is-loading');

(function(){
  function div(c){var e=document.createElement('div');e.className=c;return e;}
  if(!document.querySelector('.brand-loader')){
    var loader=div('brand-loader');
    var inner=div('brand-loader__inner');
    var sigil=div('brand-loader__sigil');
    var text=div('brand-loader__text');
    var line=div('brand-loader__line');
    sigil.textContent='liz';
    text.textContent='астрология · руны · свечи';
    inner.appendChild(sigil);inner.appendChild(text);inner.appendChild(line);loader.appendChild(inner);
    document.body.insertBefore(loader,document.body.firstChild);
    document.body.appendChild(div('brand-cursor'));
    document.body.appendChild(div('brand-cursor-dot'));
    document.body.appendChild(div('moon-light'));
    var zodiac=div('zodiac-bg');zodiac.setAttribute('aria-hidden','true');
    ['♈','♏','♓','♑','♊','♌'].forEach(function(sign,i){
      var s=document.createElement('span');
      s.textContent=sign;
      s.style.left=[8,20,37,54,70,86][i]+'%';
      s.style.setProperty('--dur',[22,16,24,18,21,17][i]+'s');
      zodiac.appendChild(s);
    });
    document.body.appendChild(zodiac);
  }
})();

window.addEventListener('load',function(){
  var loader=document.querySelector('.brand-loader');
  setTimeout(function(){
    if(loader)loader.classList.add('hide');
    document.documentElement.classList.remove('is-loading');
  },650);
});
setTimeout(function(){document.documentElement.classList.remove('is-loading');var l=document.querySelector('.brand-loader');if(l)l.classList.add('hide');},1800);

(function(){
  var cursor=document.querySelector('.brand-cursor');var dot=document.querySelector('.brand-cursor-dot');
  if(!cursor||!dot)return;
  window.addEventListener('mousemove',function(e){
    cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
    dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  });
  document.querySelectorAll('a,button,.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta,.header-cta,.footer-tg,.nav-cta').forEach(function(el){
    el.addEventListener('mouseenter',function(){cursor.classList.add('hover');});
    el.addEventListener('mouseleave',function(){cursor.classList.remove('hover');});
  });
})();

(function(){
  document.querySelectorAll('.service-card,.service-full,.dir-card,.choose-card,.recog-card,.prod-card,.prog-card,.screenshot-slot,.tool-card,.when-card,.for-card,.whom-card,.mod-card,.edu-prev-card,.after-card,.method-card,.card').forEach(function(card){
    card.classList.add('cinematic-card');
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      card.style.setProperty('--mx',((e.clientX-r.left)/r.width)*100+'%');
      card.style.setProperty('--my',((e.clientY-r.top)/r.height)*100+'%');
    });
  });
})();

(function(){
  var path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('a[href="'+path+'"]').forEach(function(a){a.classList.add('is-active');});
})();
