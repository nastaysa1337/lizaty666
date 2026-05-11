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

    /* Убраны летающие знаки зодиака */
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
    title.innerHTML='Я СМОТРЮ ТУДА,<span class="gold-script">куда обычно страшно смотреть</span>';
  }

  var sub=hero.querySelector('.hero-sub');
  if(sub) sub.textContent='Смотрю, куда движется ситуация — где риск, ресурс и что делать дальше.';

  var buttons=hero.querySelectorAll('.hero-btns a');
  if(buttons[0]) buttons[0].textContent='Записаться ко мне';
  if(buttons[1]) buttons[1].textContent='Выбрать формат';

  var img=hero.querySelector('.photo-hero img');
  if(img){
    img.src='assets/212CB13A-DFA8-4E37-BF86-4F200A4A0E9A.png';
    img.alt='Лиза liz_ty666';
  }

  var css='\
  html,body{overflow-x:hidden!important;}\
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
  @media(max-width:1024px){#hero.home-hero-upgraded{padding:102px 28px 58px!important;}#hero.home-hero-upgraded .hero-wrap{grid-template-columns:minmax(340px,.86fr) minmax(420px,1.14fr)!important;gap:14px!important;}#hero.home-hero-upgraded h1{font-size:clamp(38px,5.8vw,60px)!important;}#hero.home-hero-upgraded .hero-visual{min-height:570px!important;height:620px!important;}#hero.home-hero-upgraded .photo-hero{min-height:570px!important;}#hero.home-hero-upgraded .photo-hero img{right:-8%!important;width:118%!important;}}\
  @media(max-width:768px){#hero.home-hero-upgraded{display:block!important;min-height:auto!important;padding:96px 20px 58px!important;}#hero.home-hero-upgraded .hero-bg:after{background:linear-gradient(180deg,rgba(5,5,5,.9) 0%,rgba(5,5,5,.55) 30%,rgba(5,5,5,.95) 100%),radial-gradient(ellipse at 68% 20%,rgba(37,17,46,.62),transparent 58%)!important;}#hero.home-hero-upgraded .hero-wrap{display:flex!important;flex-direction:column!important;gap:22px!important;align-items:stretch!important;max-width:560px!important;}#hero.home-hero-upgraded .hero-content{order:1!important;max-width:100%!important;}#hero.home-hero-upgraded .hero-tag{font-size:8.5px!important;letter-spacing:.12em!important;line-height:1.45!important;padding:5px 10px!important;margin-bottom:18px!important;max-width:340px!important;}#hero.home-hero-upgraded h1{font-size:clamp(32px,10.4vw,46px)!important;line-height:1.08!important;max-width:390px!important;margin-bottom:16px!important;}#hero.home-hero-upgraded .hero-sub{font-size:15px!important;line-height:1.55!important;max-width:335px!important;margin-bottom:22px!important;}#hero.home-hero-upgraded .hero-btns{flex-direction:column!important;gap:10px!important;max-width:340px!important;}#hero.home-hero-upgraded .hero-btns a{width:100%!important;min-width:0!important;min-height:44px!important;}#hero.home-hero-upgraded .hero-visual{order:2!important;width:100%!important;height:430px!important;min-height:430px!important;max-height:none!important;overflow:visible!important;}#hero.home-hero-upgraded .photo-hero{height:430px!important;min-height:430px!important;border-left:0!important;border-top:1px solid rgba(201,164,92,.08)!important;}#hero.home-hero-upgraded .photo-hero img{right:50%!important;bottom:0!important;transform:translateX(50%)!important;width:108%!important;height:100%!important;object-fit:contain!important;object-position:center top!important;}#hero.home-hero-upgraded .photo-hero:before{font-size:54px!important;left:7%!important;top:8%!important;}#hero.home-hero-upgraded .photo-hero:after{background:linear-gradient(180deg,rgba(5,5,5,.04) 0%,rgba(5,5,5,.03) 58%,rgba(5,5,5,.78) 100%),linear-gradient(90deg,rgba(5,5,5,.28) 0%,transparent 34%,transparent 70%,rgba(5,5,5,.22) 100%)!important;}}\
  @media(max-width:480px){#hero.home-hero-upgraded{padding:88px 16px 52px!important;}#hero.home-hero-upgraded h1{font-size:32px!important;max-width:330px!important;}#hero.home-hero-upgraded .hero-tag{max-width:310px!important;}#hero.home-hero-upgraded .hero-sub{max-width:310px!important;}#hero.home-hero-upgraded .hero-btns{max-width:100%!important;}#hero.home-hero-upgraded .hero-visual{height:355px!important;min-height:355px!important;}#hero.home-hero-upgraded .photo-hero{height:355px!important;min-height:355px!important;}#hero.home-hero-upgraded .photo-hero img{width:112%!important;object-position:center top!important;}}\
  ';

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
