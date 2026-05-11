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
    inner.appendChild(sigil);inner.appendChild(text);inner.appendChild(line);loader.appendChild(inner);
    document.body.insertBefore(loader,document.body.firstChild);
    document.body.appendChild(div('brand-cursor'));
    document.body.appendChild(div('brand-cursor-dot'));
    document.body.appendChild(div('moon-light'));
  }
  document.querySelectorAll('.zodiac-bg').forEach(function(el){el.remove();});
})();

(function upgradeHomeHero(){
  var path=(window.location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(path!=='' && path!=='index.html') return;
  var hero=document.getElementById('hero');
  if(!hero) return;

  hero.classList.add('home-hero-upgraded');
  document.body.classList.add('home-hero-lock');

  var tag=hero.querySelector('.hero-tag');
  if(tag) tag.textContent='АСТРОЛОГИЯ · РУНЫ · СВЕЧИ · ПРОГНОЗЫ · ОБУЧЕНИЕ';

  var title=hero.querySelector('h1');
  if(title){
    title.innerHTML='Я смотрю туда,<span class="gold-script">куда обычно<br>страшно смотреть</span>';
  }

  var sub=hero.querySelector('.hero-sub');
  if(sub) sub.textContent='Не обещаю чудо. Даю ясность.';

  var buttons=hero.querySelectorAll('.hero-btns a');
  if(buttons[0]) buttons[0].textContent='Записаться ко мне';
  if(buttons[1]){
    buttons[1].textContent='Лиза, что делать? — 2 766 ₽';
    buttons[1].setAttribute('href','liza-chto-delat.html');
  }

  var img=hero.querySelector('.photo-hero img, .hero-visual img');
  if(img){
    img.src='assets/212CB13A-DFA8-4E37-BF86-4F200A4A0E9A.png';
    img.alt='Лиза liz_ty666';
  }

  var btns=hero.querySelector('.hero-btns');
  if(btns && !hero.querySelector('.hero-services')){
    var services=document.createElement('div');
    services.className='hero-services';
    services.innerHTML='\
      <a class="hero-service" href="astrology.html"><span class="hero-service-icon">☽</span><span class="hero-service-title">Астрология</span><span class="hero-service-text">карта</span></a>\
      <a class="hero-service" href="runes.html"><span class="hero-service-icon">ᚠ</span><span class="hero-service-title">Руны</span><span class="hero-service-text">выбор</span></a>\
      <a class="hero-service" href="candles.html"><span class="hero-service-icon">🕯</span><span class="hero-service-title">Свечи</span><span class="hero-service-text">очищение</span></a>\
      <a class="hero-service" href="education.html"><span class="hero-service-icon">◉</span><span class="hero-service-title">Обучение</span><span class="hero-service-text">навык</span></a>';
    btns.insertAdjacentElement('afterend',services);
  }

  var css='html,body{overflow-x:hidden!important}.hero-services{display:none}#hero.home-hero-upgraded{min-height:100svh!important;padding:112px 40px 64px!important;display:flex!important;align-items:center!important;background:#050505!important;isolation:isolate}#hero.home-hero-upgraded .hero-bg{background:radial-gradient(ellipse 58% 72% at 77% 35%,rgba(37,17,46,.78),transparent 68%),radial-gradient(ellipse 34% 44% at 80% 74%,rgba(75,15,24,.36),transparent 64%),linear-gradient(90deg,#050505 0%,#050505 44%,#09060d 100%)!important}#hero.home-hero-upgraded .hero-wrap{width:100%!important;max-width:1240px!important;margin:0 auto!important;display:grid!important;grid-template-columns:minmax(420px,.92fr) minmax(520px,1.08fr)!important;gap:24px!important;align-items:center!important}#hero.home-hero-upgraded .hero-content{max-width:600px!important;z-index:5!important;padding-top:8px!important}#hero.home-hero-upgraded .hero-tag{font-size:9.5px!important;letter-spacing:.17em!important;line-height:1.35!important;padding:7px 15px!important;margin-bottom:26px!important;border-color:rgba(201,164,92,.42)!important;background:rgba(5,5,5,.34)!important}#hero.home-hero-upgraded h1{font-size:clamp(42px,5.4vw,78px)!important;line-height:1.03!important;letter-spacing:-.04em!important;margin-bottom:22px!important;max-width:640px!important}#hero.home-hero-upgraded h1 .gold-script{display:block!important;font-family:Cormorant Garamond,serif!important;font-style:italic!important;font-weight:600!important;text-transform:none!important;color:var(--gold)!important;font-size:1.02em!important}#hero.home-hero-upgraded .hero-sub{font-size:17px!important;line-height:1.62!important;color:rgba(244,240,232,.76)!important;max-width:470px!important;margin-bottom:32px!important}#hero.home-hero-upgraded .hero-btns{display:flex!important;gap:14px!important;align-items:center!important;flex-wrap:wrap!important}#hero.home-hero-upgraded .hero-btns a{min-width:180px!important}#hero.home-hero-upgraded .hero-visual{position:relative!important;z-index:1!important;min-height:650px!important;height:calc(100svh - 130px)!important;max-height:820px!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:visible!important;margin:0!important}#hero.home-hero-upgraded .photo-hero{position:relative!important;width:100%!important;height:100%!important;min-height:650px!important}#hero.home-hero-upgraded .photo-hero img{position:absolute!important;right:-4%!important;bottom:0!important;width:112%!important;height:100%!important;object-fit:contain!important;object-position:center top!important;opacity:.95!important}@media(max-width:768px){body{background:#050505!important}header{height:76px!important;padding:18px 22px!important;background:linear-gradient(to bottom,rgba(5,5,5,.82),rgba(5,5,5,.22),transparent)!important;border-bottom:0!important;z-index:1005!important}header:before{content:"☽"!important;width:36px!important;height:36px!important;border:1px solid rgba(216,173,103,.36)!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;color:#d8ad67!important;font-size:23px!important}header .logo{position:absolute!important;left:50%!important;transform:translateX(-50%)!important;color:#d8ad67!important;font-size:20px!important}header .burger span{background:#d8ad67!important}#hero.home-hero-upgraded{min-height:100svh!important;position:relative!important;overflow:hidden!important;background:#050505!important;padding:0!important;display:flex!important;flex-direction:column!important}#hero.home-hero-upgraded:before{content:""!important;position:absolute!important;inset:0!important;background:linear-gradient(to bottom,rgba(0,0,0,.15) 0%,rgba(0,0,0,.05) 28%,rgba(0,0,0,.35) 45%,#050505 56%,#050505 100%)!important;z-index:1!important}#hero.home-hero-upgraded .hero-wrap{position:relative!important;z-index:2!important;width:100%!important;display:flex!important;flex-direction:column!important;min-height:100svh!important;padding:0!important}#hero.home-hero-upgraded .hero-visual{position:absolute!important;top:72px!important;left:0!important;width:100%!important;height:48vh!important;min-height:320px!important;max-height:430px!important;z-index:0!important;overflow:hidden!important}#hero.home-hero-upgraded .photo-hero{position:absolute!important;inset:0!important;width:100%!important;height:100%!important}#hero.home-hero-upgraded .photo-hero img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;object-position:center top!important;filter:contrast(1.07) brightness(.88)!important}#hero.home-hero-upgraded .photo-hero:after{content:""!important;position:absolute!important;inset:0!important;background:linear-gradient(to bottom,rgba(0,0,0,.04) 0%,rgba(0,0,0,.02) 56%,rgba(5,5,5,.72) 92%,#050505 100%)!important}#hero.home-hero-upgraded .hero-content{position:relative!important;z-index:2!important;width:100%!important;text-align:center!important;margin-top:52vh!important;padding:0 16px 20px!important}#hero.home-hero-upgraded .hero-tag{display:none!important}#hero.home-hero-upgraded h1{max-width:360px!important;margin:0 auto!important;color:#f3eee6!important;font-family:Cormorant Garamond,serif!important;font-size:clamp(34px,8.5vw,44px)!important;font-weight:600!important;line-height:.95!important;letter-spacing:.02em!important;text-transform:uppercase!important}#hero.home-hero-upgraded h1 .gold-script{display:block!important;color:#d8ad67!important;font-style:italic!important;font-size:.78em!important;line-height:1.08!important;text-transform:none!important;margin-top:4px!important}#hero.home-hero-upgraded .hero-sub{margin:16px auto 0!important;max-width:300px!important;font-size:15px!important;line-height:1.4!important;color:rgba(255,255,255,.72)!important}#hero.home-hero-upgraded .hero-btns{width:calc(100% - 32px)!important;max-width:360px!important;margin:20px auto 0!important;display:flex!important;flex-direction:column!important;gap:12px!important}#hero.home-hero-upgraded .hero-btns a{width:100%!important;min-height:52px!important;padding:0 18px!important;border-radius:3px!important;font-size:10.5px!important;letter-spacing:.12em!important;display:flex!important;align-items:center!important;justify-content:center!important}#hero.home-hero-upgraded .hero-btns .btn-secondary{border-color:rgba(216,173,103,.42)!important;color:#f3eee6!important;background:rgba(5,5,5,.58)!important}#hero.home-hero-upgraded .hero-services{position:relative!important;z-index:2!important;display:grid!important;grid-template-columns:repeat(4,1fr)!important;width:100%!important;max-width:430px!important;margin:18px auto 0!important;border-top:1px solid rgba(216,173,103,.18)!important;background:#050505!important}#hero.home-hero-upgraded .hero-service{min-height:108px!important;padding:12px 5px 8px!important;text-align:center!important;border-right:1px solid rgba(216,173,103,.14)!important;text-decoration:none!important}#hero.home-hero-upgraded .hero-service:last-child{border-right:0!important}#hero.home-hero-upgraded .hero-service-icon{display:block!important;color:#d8ad67!important;font-size:17px!important;margin:0 auto 8px!important}#hero.home-hero-upgraded .hero-service-title{display:block!important;font-size:9px!important;letter-spacing:.1em!important;color:#d8ad67!important;text-transform:uppercase!important;font-weight:800!important}#hero.home-hero-upgraded .hero-service-text{display:block!important;margin-top:5px!important;font-size:9.5px!important;line-height:1.2!important;color:rgba(255,255,255,.56)!important}.fixed-mob,.fixed-cta,.after-hero-cta,.duplicate-cta,.mobile-extra-cta{display:none!important}}';

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

(function brandCursor(){
  var cursor=document.querySelector('.brand-cursor');var dot=document.querySelector('.brand-cursor-dot');
  if(!cursor||!dot)return;
  window.addEventListener('mousemove',function(e){
    cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
    dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  });
})();