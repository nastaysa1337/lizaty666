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
    document.querySelectorAll('.zodiac-bg').forEach(function(el){el.remove();});
  }
})();

(function upgradeHomeHero(){
  var path=(window.location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(path!=='' && path!=='index.html') return;
  var hero=document.getElementById('hero');
  if(!hero) return;

  hero.classList.add('home-hero-upgraded');

  var tag=hero.querySelector('.hero-tag');
  if(tag) tag.textContent='АСТРОЛОГИЯ · РУНЫ · СВЕЧИ · ПРОГНОЗЫ · ОБУЧЕНИЕ';

  var title=hero.querySelector('h1');
  if(title){
    title.innerHTML='Я СМОТРЮ ТУДА,<span class="gold-script">куда обычно<br>страшно смотреть</span>';
  }

  var sub=hero.querySelector('.hero-sub');
  if(sub) sub.textContent='Не обещаю чудо. Даю ясность.';

  var buttons=hero.querySelectorAll('.hero-btns a');
  if(buttons[0]) buttons[0].textContent='Записаться ко мне';
  if(buttons[1]){
    buttons[1].textContent='Лиза, что делать? — 2 766 ₽';
    buttons[1].setAttribute('href','liza-chto-delat.html');
  }

  var img=hero.querySelector('.photo-hero img');
  if(img){
    img.src='assets/212CB13A-DFA8-4E37-BF86-4F200A4A0E9A.png';
    img.alt='Лиза liz_ty666';
  }

  var btns=hero.querySelector('.hero-btns');
  if(btns && !hero.querySelector('.hero-services')){
    var services=document.createElement('div');
    services.className='hero-services';
    services.innerHTML='\
      <a class="hero-service" href="astrology.html"><span class="hero-service-icon">☽</span><span class="hero-service-title">Астрология</span><span class="hero-service-text">карта · прогноз</span></a>\
      <a class="hero-service" href="runes.html"><span class="hero-service-icon">ᚠ</span><span class="hero-service-title">Руны</span><span class="hero-service-text">энергия · выбор</span></a>\
      <a class="hero-service" href="candles.html"><span class="hero-service-icon">🕯</span><span class="hero-service-title">Свечи</span><span class="hero-service-text">очищение</span></a>\
      <a class="hero-service" href="education.html"><span class="hero-service-icon">◉</span><span class="hero-service-title">Обучение</span><span class="hero-service-text">навык · рост</span></a>';
    btns.insertAdjacentElement('afterend',services);
  }

  var css='\
  html,body{overflow-x:hidden!important;}\
  .hero-services{display:none;}\
  #hero.home-hero-upgraded{min-height:100svh!important;padding:112px 40px 64px!important;display:flex!important;align-items:center!important;background:#050505!important;isolation:isolate;}\
  #hero.home-hero-upgraded .hero-bg{background:radial-gradient(ellipse 58% 72% at 77% 35%,rgba(37,17,46,.78),transparent 68%),radial-gradient(ellipse 34% 44% at 80% 74%,rgba(75,15,24,.36),transparent 64%),linear-gradient(90deg,#050505 0%,#050505 44%,#09060d 100%)!important;}\
  #hero.home-hero-upgraded .hero-bg:after{background:radial-gradient(circle at 18% 22%,rgba(201,164,92,.055),transparent 24%),linear-gradient(90deg,rgba(5,5,5,.99) 0%,rgba(5,5,5,.9) 38%,rgba(5,5,5,.35) 64%,rgba(5,5,5,.18) 100%)!important;}\
  #hero.home-hero-upgraded .hero-wrap{width:100%!important;max-width:1240px!important;margin:0 auto!important;display:grid!important;grid-template-columns:minmax(420px,.92fr) minmax(520px,1.08fr)!important;gap:24px!important;align-items:center!important;}\
  #hero.home-hero-upgraded .hero-content{max-width:600px!important;z-index:5!important;padding-top:8px!important;}\
  #hero.home-hero-upgraded .hero-tag{font-size:9.5px!important;letter-spacing:.17em!important;line-height:1.35!important;padding:7px 15px!important;margin-bottom:26px!important;border-color:rgba(201,164,92,.42)!important;background:rgba(5,5,5,.34)!important;box-shadow:0 0 22px rgba(201,164,92,.08)!important;}\
  #hero.home-hero-upgraded h1{font-size:clamp(42px,5.4vw,78px)!important;line-height:1.03!important;letter-spacing:-.058em!important;margin-bottom:22px!important;max-width:640px!important;}\
  #hero.home-hero-upgraded h1 .gold-script{display:block!important;font-family:\'Cormorant Garamond\',serif!important;font-style:italic!important;font-weight:600!important;text-transform:none!important;color:var(--gold)!important;letter-spacing:-.025em!important;font-size:1.02em!important;margin-top:-.03em!important;}\
  #hero.home-hero-upgraded .hero-sub{font-size:17px!important;line-height:1.62!important;color:rgba(244,240,232,.76)!important;max-width:470px!important;margin-bottom:32px!important;}\
  #hero.home-hero-upgraded .hero-btns{display:flex!important;gap:14px!important;align-items:center!important;flex-wrap:wrap!important;}\
  #hero.home-hero-upgraded .hero-btns a{min-width:180px!important;}\
  #hero.home-hero-upgraded .hero-visual{position:relative!important;z-index:1!important;min-height:650px!important;height:calc(100svh - 130px)!important;max-height:820px!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:visible!important;margin:0!important;}\
  #hero.home-hero-upgraded .photo-hero{position:relative!important;width:100%!important;height:100%!important;min-height:650px!important;border-left:1px solid rgba(201,164,92,.08)!important;background:radial-gradient(ellipse at 50% 28%,rgba(201,164,92,.12),transparent 44%),radial-gradient(ellipse at 64% 60%,rgba(75,15,24,.24),transparent 66%)!important;}\
  #hero.home-hero-upgraded .photo-hero img{position:absolute!important;right:-4%!important;bottom:0!important;width:112%!important;height:100%!important;max-width:none!important;object-fit:contain!important;object-position:center top!important;opacity:.95!important;filter:contrast(1.08) brightness(.92) saturate(1.04) drop-shadow(0 0 54px rgba(201,164,92,.12))!important;transform:none!important;}\
  #hero.home-hero-upgraded .photo-hero:before{content:\'☽\'!important;left:4%!important;top:13%!important;font-size:86px!important;color:rgba(201,164,92,.36)!important;}\
  #hero.home-hero-upgraded .photo-hero:after{background:linear-gradient(90deg,rgba(5,5,5,.82) 0%,rgba(5,5,5,.34) 25%,rgba(5,5,5,.03) 58%,rgba(5,5,5,.12) 100%),linear-gradient(0deg,rgba(5,5,5,.72) 0%,transparent 20%,transparent 83%,rgba(5,5,5,.18) 100%)!important;}\
  #hero.home-hero-upgraded .candle-glow{width:250px!important;height:250px!important;bottom:7%!important;left:52%!important;}\
  @media(max-width:1024px) and (min-width:769px){#hero.home-hero-upgraded{padding:102px 28px 58px!important;}#hero.home-hero-upgraded .hero-wrap{grid-template-columns:minmax(340px,.86fr) minmax(420px,1.14fr)!important;gap:14px!important;}#hero.home-hero-upgraded h1{font-size:clamp(38px,5.8vw,60px)!important;}#hero.home-hero-upgraded .hero-visual{min-height:570px!important;height:620px!important;}#hero.home-hero-upgraded .photo-hero{min-height:570px!important;}#hero.home-hero-upgraded .photo-hero img{right:-8%!important;width:118%!important;}}\
  @media(max-width:768px){body{background:#050505!important;}header{height:76px!important;padding:18px 22px!important;background:linear-gradient(to bottom,rgba(5,5,5,.74),rgba(5,5,5,.18),transparent)!important;border-bottom:0!important;backdrop-filter:none!important;z-index:1005!important;}header:before{content:\'☽\'!important;width:38px!important;height:38px!important;border:1px solid rgba(217,173,106,.36)!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;color:#d9ad6a!important;font-family:\'Cormorant Garamond\',serif!important;font-size:24px!important;line-height:1!important;}header .logo{position:absolute!important;left:50%!important;transform:translateX(-50%)!important;color:#d9ad6a!important;font-size:20px!important;letter-spacing:.02em!important;}header .burger{display:flex!important;position:relative!important;z-index:2!important;}header .burger span{background:#d9ad6a!important;}#hero.home-hero-upgraded{min-height:100svh!important;height:auto!important;position:relative!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;padding:0 20px 24px!important;background:#050505!important;}#hero.home-hero-upgraded .hero-bg{background:#050505!important;}#hero.home-hero-upgraded .hero-bg:after{content:\'\'!important;position:absolute!important;inset:0!important;z-index:1!important;background:linear-gradient(to bottom,rgba(0,0,0,.05) 0%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.92) 72%,#050505 100%)!important;}#hero.home-hero-upgraded .hero-wrap{position:relative!important;z-index:2!important;width:100%!important;max-width:none!important;margin:0!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;align-items:center!important;gap:0!important;min-height:100svh!important;padding:0!important;}#hero.home-hero-upgraded .hero-visual{position:absolute!important;inset:0!important;z-index:0!important;width:100%!important;height:100%!important;min-height:100%!important;max-height:none!important;margin:0!important;display:block!important;overflow:hidden!important;order:0!important;}#hero.home-hero-upgraded .photo-hero{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:100%!important;border:0!important;background:#050505!important;}#hero.home-hero-upgraded .photo-hero img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;object-fit:cover!important;object-position:58% 28%!important;opacity:.96!important;transform:none!important;filter:contrast(1.08) brightness(.86) saturate(1.05)!important;}#hero.home-hero-upgraded .photo-hero:before{display:none!important;}#hero.home-hero-upgraded .photo-hero:after{content:\'\'!important;position:absolute!important;inset:0!important;z-index:2!important;background:linear-gradient(to bottom,rgba(0,0,0,.05) 0%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.92) 72%,#050505 100%)!important;}#hero.home-hero-upgraded .candle-glow{display:none!important;}#hero.home-hero-upgraded .hero-content{position:relative!important;z-index:3!important;width:100%!important;max-width:560px!important;text-align:center!important;padding:0!important;margin:0 auto!important;order:1!important;}#hero.home-hero-upgraded .hero-tag{display:none!important;}#hero.home-hero-upgraded h1{max-width:680px!important;margin:0 auto!important;color:#f4f0e8!important;font-family:\'Cormorant Garamond\',serif!important;font-size:clamp(36px,10vw,52px)!important;font-weight:600!important;line-height:.95!important;letter-spacing:.02em!important;text-transform:uppercase!important;text-shadow:0 6px 34px rgba(0,0,0,.65)!important;}#hero.home-hero-upgraded h1 .gold-script{display:block!important;color:#d9ad6a!important;font-family:\'Cormorant Garamond\',serif!important;font-style:italic!important;font-size:.86em!important;font-weight:600!important;line-height:1.02!important;text-transform:none!important;letter-spacing:.01em!important;margin-top:5px!important;}#hero.home-hero-upgraded .hero-sub{margin:17px auto 0!important;max-width:320px!important;color:rgba(255,255,255,.72)!important;font-size:15.5px!important;line-height:1.45!important;}#hero.home-hero-upgraded .hero-btns{width:100%!important;max-width:520px!important;margin:23px auto 0!important;display:flex!important;flex-direction:column!important;gap:12px!important;}#hero.home-hero-upgraded .hero-btns a{width:100%!important;min-width:0!important;min-height:56px!important;border-radius:3px!important;letter-spacing:.12em!important;font-size:10.5px!important;}#hero.home-hero-upgraded .hero-btns .btn-secondary{border-color:rgba(217,173,106,.42)!important;color:#f4f0e8!important;background:rgba(5,5,5,.52)!important;}#hero.home-hero-upgraded .hero-services{position:relative!important;z-index:3!important;width:calc(100% + 40px)!important;max-width:none!important;margin:24px -20px 0!important;display:grid!important;grid-template-columns:repeat(4,1fr)!important;border-top:1px solid rgba(217,173,106,.16)!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch!important;}#hero.home-hero-upgraded .hero-service{min-width:76px!important;padding:14px 7px 0!important;text-align:center!important;text-decoration:none!important;border-right:1px solid rgba(217,173,106,.12)!important;color:inherit!important;}#hero.home-hero-upgraded .hero-service:last-child{border-right:0!important;}#hero.home-hero-upgraded .hero-service-icon{display:block!important;color:#d9ad6a!important;font-size:18px!important;line-height:1!important;margin-bottom:7px!important;}#hero.home-hero-upgraded .hero-service-title{display:block!important;color:#d9ad6a!important;font-size:10px!important;font-weight:800!important;letter-spacing:.1em!important;text-transform:uppercase!important;white-space:nowrap!important;}#hero.home-hero-upgraded .hero-service-text{display:block!important;margin-top:6px!important;color:rgba(255,255,255,.58)!important;font-size:10.5px!important;line-height:1.25!important;}}\
  @media(max-width:480px){#hero.home-hero-upgraded{padding:0 16px 20px!important;}#hero.home-hero-upgraded .hero-bg:after,#hero.home-hero-upgraded .photo-hero:after{background:linear-gradient(to bottom,rgba(0,0,0,.03) 0%,rgba(0,0,0,.14) 32%,rgba(0,0,0,.84) 63%,#050505 100%)!important;}#hero.home-hero-upgraded .photo-hero img{object-position:58% 25%!important;}#hero.home-hero-upgraded .hero-content{max-width:420px!important;}#hero.home-hero-upgraded h1{font-size:clamp(34px,10.6vw,46px)!important;}#hero.home-hero-upgraded .hero-sub{font-size:15px!important;max-width:300px!important;}#hero.home-hero-upgraded .hero-btns{margin-top:21px!important;}#hero.home-hero-upgraded .hero-btns a{min-height:54px!important;}#hero.home-hero-upgraded .hero-services{width:calc(100% + 32px)!important;margin:21px -16px 0!important;}#hero.home-hero-upgraded .hero-service{padding-top:12px!important;}}\
  ';

  var old=document.getElementById('home-hero-upgrade-css');
  if(old) old.remove();
  var style=document.createElement('style');
  style.id='home-hero-upgrade-css';
  style.textContent=css;
  document.head.appendChild(style);
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
