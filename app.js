(function(){
  var styles=['mobile-hero-short.css','site-improvements.css'];
  styles.forEach(function(h){
    if(document.querySelector('link[href="'+h+'"]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href=h;
    document.head.appendChild(l);
  });
})();

function openMenu(btn){
  var n=document.getElementById('mobileNav')||document.getElementById('mobNav');
  if(n)n.classList.add('open');
  if(btn)btn.setAttribute('aria-expanded','true');
}
function closeMenu(){
  var n=document.getElementById('mobileNav')||document.getElementById('mobNav');
  if(n)n.classList.remove('open');
  var b=document.querySelector('.burger');
  if(b)b.setAttribute('aria-expanded','false');
}
function openMob(btn){openMenu(btn)}
function closeMob(){closeMenu()}
function toggleFaq(btn){
  var i=btn.closest('.faq-item');
  if(!i)return;
  var o=i.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(x){
    x.classList.remove('open');
    var b=x.querySelector('.faq-q');
    if(b)b.setAttribute('aria-expanded','false');
  });
  if(!o){i.classList.add('open');btn.setAttribute('aria-expanded','true')}
}
function toggleExpand(btn){
  var b=btn.nextElementSibling;
  if(!b)return;
  var o=b.classList.contains('open');
  b.classList.toggle('open',!o);
  btn.setAttribute('aria-expanded',String(!o));
}

(function(){
  function addMeta(attr,name,content){
    if(!content)return;
    var selector='meta['+attr+'="'+name+'"]';
    var m=document.querySelector(selector);
    if(!m){m=document.createElement('meta');m.setAttribute(attr,name);document.head.appendChild(m)}
    m.setAttribute('content',content);
  }
  function addLink(rel,href){
    if(!href||document.querySelector('link[rel="'+rel+'"]'))return;
    var l=document.createElement('link');l.rel=rel;l.href=href;document.head.appendChild(l);
  }
  function ensureSeo(){
    var url='https://lizty666.ru'+location.pathname.replace(/index\.html$/,'');
    var image='https://lizty666.ru/assets/212CB13A-DFA8-4E37-BF86-4F200A4A0E9A.png';
    addLink('canonical',url);
    addMeta('name','theme-color','#050505');
    addMeta('name','robots','index,follow');
    addMeta('property','og:url',url);
    addMeta('property','og:image',image);
    addMeta('property','og:image:alt','liz_ty666 — астрология, руны, свечи и обучение');
    addMeta('name','twitter:card','summary_large_image');
    addMeta('name','twitter:image',image);
    addMeta('name','twitter:title',document.title);
    var desc=document.querySelector('meta[name="description"]');
    if(desc)addMeta('name','twitter:description',desc.getAttribute('content'));
    if(!document.getElementById('liz-schema')){
      var s=document.createElement('script');
      s.type='application/ld+json';
      s.id='liz-schema';
      s.textContent=JSON.stringify({
        '@context':'https://schema.org',
        '@type':'Person',
        name:'liz_ty666',
        url:'https://lizty666.ru/',
        sameAs:['https://t.me/liz_ty666'],
        knowsAbout:['астрология','руны','свечные практики','прогнозы','обучение'],
        offers:{
          '@type':'OfferCatalog',
          name:'Консультации, руны, свечи и обучение',
          itemListElement:[
            {'@type':'Offer',name:'Лиза, что делать?',price:'2766',priceCurrency:'RUB'},
            {'@type':'Offer',name:'Астрология и прогнозы',priceSpecification:{'@type':'PriceSpecification',priceCurrency:'RUB',minPrice:'3666'}},
            {'@type':'Offer',name:'Руны',priceSpecification:{'@type':'PriceSpecification',priceCurrency:'RUB',minPrice:'1666'}},
            {'@type':'Offer',name:'Свечи',priceSpecification:{'@type':'PriceSpecification',priceCurrency:'RUB',minPrice:'666'}}
          ]
        }
      });
      document.head.appendChild(s);
    }
  }
  function setActiveLinks(){
    var current=(location.pathname.split('/').pop()||'index.html');
    document.querySelectorAll('a[href]').forEach(function(a){
      var href=a.getAttribute('href');
      if(href===current || (current==='index.html' && href==='index.html')) a.setAttribute('aria-current','page');
    });
  }
  function injectHomeBlocks(){
    if(!document.getElementById('routes')||document.getElementById('decision-helper'))return;
    var routes=document.getElementById('routes');
    var helper=document.createElement('section');
    helper.id='decision-helper';
    helper.className='enhanced-section';
    helper.innerHTML='<div class="container"><div class="section-label">Быстрый выбор</div><h2 class="section-title fi vis">Не знаете, что выбрать?</h2><p class="section-sub fi vis">Выберите состояние — сайт сразу подскажет подходящий формат.</p><div class="choice-grid"><a class="choice-card" href="liza-chto-delat.html"><span>01</span><h3>У меня горит ситуация</h3><p>Нужен быстрый ориентир и понятный следующий шаг.</p><b>Лиза, что делать? →</b></a><a class="choice-card" href="astrology.html"><span>02</span><h3>Хочу понять период</h3><p>Месяц, год, отношения, финансы, карта и сценарии.</p><b>Астрология →</b></a><a class="choice-card" href="runes.html"><span>03</span><h3>Нужно увидеть скрытое</h3><p>Энергия ситуации, выбор, препятствия и направление.</p><b>Руны →</b></a><a class="choice-card" href="candles.html"><span>04</span><h3>Нужна практика</h3><p>Свечи, очищение, намерение и работа с состоянием.</p><b>Свечи →</b></a></div></div>';
    routes.parentNode.insertBefore(helper,routes.nextSibling);

    var flagship=document.getElementById('flagship');
    if(flagship&&!document.getElementById('popular-formats')){
      var popular=document.createElement('section');
      popular.id='popular-formats';
      popular.className='enhanced-section popular-section';
      popular.innerHTML='<div class="container"><div class="section-label">Популярное</div><h2 class="section-title fi vis">Самые понятные входы</h2><div class="popular-list"><a href="liza-chto-delat.html"><strong>2 766 ₽</strong><span>Лиза, что делать?</span><em>1 запрос · голосовыми · 2–3 дня</em></a><a href="astrology.html"><strong>3 666 ₽</strong><span>Прогноз на месяц</span><em>периоды, риски, ресурс</em></a><a href="runes.html"><strong>2 766 ₽</strong><span>Консультация по рунам</span><em>энергия ситуации и лучший шаг</em></a><a href="candles.html"><strong>от 666 ₽</strong><span>Свечи и наборы</span><em>намерение, очищение, состояние</em></a></div></div>';
      flagship.parentNode.insertBefore(popular,flagship.nextSibling);
    }
    var finalCta=document.getElementById('final-cta');
    if(finalCta&&!document.getElementById('review-proof')){
      var reviews=document.createElement('section');
      reviews.id='review-proof';
      reviews.className='enhanced-section reviews-section';
      reviews.innerHTML='<div class="container"><div class="review-proof-card"><div><div class="section-label">Отзывы</div><h2 class="section-title fi vis">Сначала можно посмотреть живые реакции</h2><p class="section-sub fi vis">Отзывы клиентов собраны в отдельном Telegram-канале: скриншоты сообщений, реакции после разборов, обучения, свечей и консультаций.</p></div><div class="review-actions"><a class="btn-primary" href="reviews.html">Отзывы на сайте</a><a class="btn-secondary" href="https://t.me/+dSRMo6E88dk4MjI6" target="_blank" rel="noopener noreferrer">Канал отзывов</a></div></div></div>';
      finalCta.parentNode.insertBefore(reviews,finalCta);
    }
    if(finalCta&&!document.getElementById('trust-block')){
      var trust=document.createElement('section');
      trust.id='trust-block';
      trust.className='enhanced-section trust-section';
      trust.innerHTML='<div class="container"><div class="section-label">Доверие</div><h2 class="section-title fi vis">Что важно знать до записи</h2><div class="trust-grid"><div><h3>Без обещаний чуда</h3><p>Разбор даёт ясность, но решение всегда остаётся за вами.</p></div><div><h3>Формат заранее понятен</h3><p>На страницах указаны цены, сроки, формат и что подготовить.</p></div><div><h3>Запись в Telegram</h3><p>Можно коротко описать ситуацию, а Лиза подскажет подходящий формат.</p></div></div></div>';
      finalCta.parentNode.insertBefore(trust,finalCta);
    }
  }
  function enhanceFooter(){
    var footer=document.querySelector('footer,.footer');
    if(!footer||footer.querySelector('.legal-links'))return;
    var box=document.createElement('div');
    box.className='legal-links';
    box.innerHTML='<a href="privacy.html">Политика конфиденциальности</a><a href="offer.html">Условия услуг</a><a href="contacts.html">Контакты</a>';
    footer.appendChild(box);
  }
  document.addEventListener('DOMContentLoaded',function(){
    ensureSeo();
    setActiveLinks();
    injectHomeBlocks();
    enhanceFooter();
    document.querySelectorAll('.fi').forEach(function(e){e.classList.add('vis')});
    var c=document.getElementById('starsContainer');
    if(c&&!c.dataset.ready){
      c.dataset.ready='1';
      for(var i=0;i<40;i++){
        var s=document.createElement('span');
        s.className='star';
        s.style.left=Math.random()*100+'%';
        s.style.top=Math.random()*100+'%';
        s.style.setProperty('--dur',2+Math.random()*4+'s');
        c.appendChild(s);
      }
    }
  });
})();
