document.documentElement.classList.add('is-loading');

window.addEventListener('load', function () {
  var loader = document.querySelector('.brand-loader');
  setTimeout(function () {
    if (loader) loader.classList.add('hide');
    document.documentElement.classList.remove('is-loading');
  }, 900);
});

(function initCursor(){
  var cursor = document.querySelector('.brand-cursor');
  var dot = document.querySelector('.brand-cursor-dot');
  if (!cursor || !dot) return;

  window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a,button,.btn-primary,.btn-secondary,.svc-cta,.prog-cta,.prod-cta,.header-cta,.footer-tg').forEach(function (el) {
    el.addEventListener('mouseenter', function(){ cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function(){ cursor.classList.remove('hover'); });
  });
})();

(function initCinematicGlow(){
  document.querySelectorAll('.cinematic-card,.service-card,.service-full,.dir-card,.choose-card,.recog-card,.prod-card,.prog-card,.screenshot-slot,.tool-card,.when-card,.for-card,.whom-card,.mod-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });
})();

(function initPageTransitions(){
  document.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(e){
      var href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.target === '_blank') return;
      var url;
      try { url = new URL(href, window.location.href); } catch(err) { return; }
      if (url.hostname !== window.location.hostname) return;
      e.preventDefault();
      var tr = document.querySelector('.page-transition');
      if (tr) tr.classList.add('active');
      setTimeout(function(){ window.location.href = href; }, 520);
    });
  });
})();

(function activeNav(){
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href="' + path + '"]').forEach(function(a){ a.classList.add('is-active'); });
})();
