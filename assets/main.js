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

  // Organes de gouvernance : fenêtre avec les fiches des membres
  var organs = window.CARASS_GOUVERNANCE;
  var dlg = document.getElementById('organ-dialog');
  if (organs && dlg && typeof dlg.showModal === 'function') {
    var esc = function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    };
    var initials = function (name) {
      return name.replace(/^(Prof\.?|Dr\.?|Pr\.?)\s+/i, '').split(/\s+/).slice(0, 2)
        .map(function (w) { return w.charAt(0); }).join('').toUpperCase();
    };
    var silhouette = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
    var card = function (m) {
      var photo = m.photo
        ? '<img class="member__photo" src="' + esc(m.photo) + '" alt="Photo de ' + esc(m.nom || m.role) + '">'
        : '<div class="member__photo member__photo--empty" aria-hidden="true">' + (m.nom ? esc(initials(m.nom)) : silhouette) + '</div>';
      var links = [];
      if (m.email) links.push('<a href="mailto:' + esc(m.email) + '">' + esc(m.email) + '</a>');
      if (m.telephone) links.push('<a href="tel:' + esc(m.telephone.replace(/\s/g, '')) + '">' + esc(m.telephone) + '</a>');
      if (/^https?:\/\//i.test(m.linkedin || '')) links.push('<a href="' + esc(m.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
      return '<article class="member">' + photo +
        '<div class="member__info">' +
          '<span class="member__role">' + esc(m.role || '') + '</span>' +
          '<h3>' + (m.nom ? esc(m.nom) : '<span class="member__pending">Nom à venir</span>') + '</h3>' +
          (m.titre ? '<p class="member__title">' + esc(m.titre) + '</p>' : '') +
          (m.bio ? '<p>' + esc(m.bio) + '</p>' : '') +
          (m.mission ? '<p class="member__mission"><strong>Rôle :</strong> ' + esc(m.mission) + '</p>' : '') +
          (links.length ? '<p class="member__links">' + links.join(' · ') + '</p>' : '') +
        '</div></article>';
    };
    var lastBtn = null;
    var openOrgan = function (key) {
      var o = organs[key];
      if (!o) return;
      document.getElementById('organ-title').textContent = o.titre;
      document.getElementById('organ-intro').textContent = o.intro || '';
      document.getElementById('organ-facts').innerHTML = (o.composition || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
      var membres = o.membres || [];
      document.getElementById('organ-list').innerHTML = membres.length
        ? membres.map(card).join('')
        : '<p class="modal__empty">' + esc(o.vide || 'Les membres seront présentés prochainement.') + '</p>';
      if (!dlg.open) dlg.showModal();
      dlg.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    };
    document.querySelectorAll('[data-organ]').forEach(function (btn) {
      btn.addEventListener('click', function () { lastBtn = btn; openOrgan(btn.getAttribute('data-organ')); });
    });
    dlg.addEventListener('close', function () { document.body.style.overflow = ''; if (lastBtn) lastBtn.focus(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.querySelectorAll('[data-close]').forEach(function (c) { c.addEventListener('click', function () { dlg.close(); }); });
    // Lien direct : apropos.html#assemblee, #conseil, #controle, #direction
    var h = location.hash.slice(1);
    if (organs[h]) openOrgan(h);
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
