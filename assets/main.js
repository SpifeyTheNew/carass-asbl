// CARASS ASBL — interactions
(function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Lien actif
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });

  // Fermer le menu mobile après un clic sur un lien
  if (nav) nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Onglets de page : surligne la section visible
  var tabs = document.querySelectorAll('.subnav a');
  if (tabs.length && 'IntersectionObserver' in window) {
    var byId = {};
    tabs.forEach(function (t) { byId[t.getAttribute('href').slice(1)] = t; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        var t = byId[e.target.id];
        if (t) {
          t.classList.add('is-active');
          var ul = t.closest('ul');
          if (ul) ul.scrollLeft = t.offsetLeft - 16;
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  // Profils des membres (Conseil d'administration, Direction exécutive)
  var pdlg = document.getElementById('profile-dialog');
  var pcontent = document.getElementById('profile-content');
  if (pdlg && pcontent && typeof pdlg.showModal === 'function') {
    var lastCard = null;
    var openProfile = function (id) {
      var tpl = document.getElementById('profil-' + id);
      if (!tpl) return;
      pcontent.innerHTML = '';
      pcontent.appendChild(tpl.content.cloneNode(true));
      if (!pdlg.open) pdlg.showModal();
      pcontent.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    };
    document.querySelectorAll('[data-profile]').forEach(function (b) {
      b.addEventListener('click', function () { lastCard = b; openProfile(b.getAttribute('data-profile')); });
    });
    pdlg.addEventListener('close', function () { document.body.style.overflow = ''; if (lastCard) lastCard.focus(); });
    pdlg.addEventListener('click', function (e) { if (e.target === pdlg) pdlg.close(); });
    pdlg.querySelectorAll('[data-close]').forEach(function (c) { c.addEventListener('click', function () { pdlg.close(); }); });
    // Lien direct : apropos.html#profil-erick-mukala-mayoyo
    if (/^#profil-/.test(location.hash)) openProfile(location.hash.slice(8));
  }

  // Apparition au défilement
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Formulaires : ouvre le client e-mail avec le message pré-rempli
  document.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var subject = form.getAttribute('data-subject') || 'Message depuis le site CARASS';
      var body = '';
      data.forEach(function (v, k) { body += k + ' : ' + v + '\n'; });
      window.location.href = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var status = form.querySelector('.form-status');
      if (status) status.style.display = 'block';
    });
  });

  // Année du pied de page
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
