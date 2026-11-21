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
    var photoOf = function (m, cls) {
      return m.photo
        ? '<img class="' + cls + '" src="' + esc(m.photo) + '" alt="Photo de ' + esc(m.nom || m.role) + '">'
        : '<div class="' + cls + ' member__photo--empty" aria-hidden="true">' + (m.nom ? esc(initials(m.nom)) : silhouette) + '</div>';
    };
    var nameOf = function (m) { return m.nom ? esc(m.nom) : '<span class="member__pending">Nom à venir</span>'; };
    var current = null;
    var card = function (m, i) {
      return '<button type="button" class="member" data-member="' + i + '">' + photoOf(m, 'member__photo') +
        '<span class="member__info">' +
          '<span class="member__role">' + esc(m.role || '') + '</span>' +
          '<span class="member__name">' + nameOf(m) + '</span>' +
          (m.titre ? '<span class="member__title">' + esc(m.titre) + '</span>' : '') +
          (m.specialite ? '<span class="member__spec">' + esc(m.specialite) + '</span>' : '') +
          '<span class="member__more">Voir la fiche →</span>' +
        '</span></button>';
    };
    var row = function (label, val) { return val ? '<div><dt>' + label + '</dt><dd>' + esc(val) + '</dd></div>' : ''; };
    var profile = function (m) {
      var links = [];
      if (m.email) links.push('<a href="mailto:' + esc(m.email) + '">' + esc(m.email) + '</a>');
      if (m.telephone) links.push('<a href="tel:' + esc(m.telephone.replace(/\s/g, '')) + '">' + esc(m.telephone) + '</a>');
      if (/^https?:\/\//i.test(m.linkedin || '')) links.push('<a href="' + esc(m.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
      var facts = row('Diplômes / grade', m.titre) + row('Spécialité', m.specialite) + row('Institution', m.institution) + row('Pays', m.pays);
      return '<div class="profile">' +
        '<button type="button" class="profile__back" data-back>← Retour aux membres</button>' +
        '<div class="profile__top">' + photoOf(m, 'profile__photo') +
          '<div><span class="member__role">' + esc(m.role || '') + '</span><h3>' + nameOf(m) + '</h3>' +
          (facts ? '<dl class="profile__facts">' + facts + '</dl>' : '') + '</div></div>' +
        (m.bio ? '<h4>Présentation</h4><p>' + esc(m.bio) + '</p>' : '') +
        (m.experience ? '<h4>Parcours et expérience</h4><p>' + esc(m.experience) + '</p>' : '') +
        (m.mission ? '<h4>Rôle au CARASS</h4><p>' + esc(m.mission) + '</p>' : '') +
        (links.length ? '<h4>Contact</h4><p class="member__links">' + links.join(' · ') + '</p>' : '') +
        (!m.nom && !m.bio ? '<p class="modal__empty" style="margin-top:20px">Les informations de ce membre seront publiées prochainement.</p>' : '') +
      '</div>';
    };
    var listEl = document.getElementById('organ-list');
    var showList = function () {
      var membres = (current && current.membres) || [];
      listEl.classList.remove('is-profile');
      listEl.innerHTML = membres.length
        ? membres.map(card).join('')
        : '<p class="modal__empty">' + esc(current.vide || 'Les membres seront présentés prochainement.') + '</p>';
    };
    listEl.addEventListener('click', function (e) {
      var c = e.target.closest('[data-member]');
      if (c) {
        listEl.classList.add('is-profile');
        listEl.innerHTML = profile(current.membres[+c.getAttribute('data-member')]);
        dlg.scrollTop = 0; listEl.scrollTop = 0;
        var back = listEl.querySelector('[data-back]'); if (back) back.focus();
        return;
      }
      if (e.target.closest('[data-back]')) { showList(); }
    });
    var lastBtn = null;
    var openOrgan = function (key) {
      var o = organs[key];
      if (!o) return;
      current = o;
      document.getElementById('organ-title').textContent = o.titre;
      document.getElementById('organ-intro').textContent = o.intro || '';
      document.getElementById('organ-facts').innerHTML = (o.composition || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
      showList();
      if (!dlg.open) dlg.showModal();
      listEl.scrollTop = 0;
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
