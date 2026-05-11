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

(function(){
  var style=document.createElement('style');
  style.textContent='@media(max-width:768px){#hero.home-hero-upgraded .photo-hero img{left:50%!important;right:auto!important;width:106%!important;transform:translateX(-51%)!important;object-fit:contain!important;object-position:center top!important}#hero.home-hero-upgraded .hero-visual{overflow:hidden!important}}@media(max-width:480px){#hero.home-hero-upgraded .photo-hero img{width:104%!important;transform:translateX(-50%)!important}}';
  document.head.appendChild(style);
})();