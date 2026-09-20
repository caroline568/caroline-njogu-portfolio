/* Projects workspace: directory on the left, selected case study on the right.
   Data lives in projects-data.js. No page reloads; the URL hash tracks the selection. */
(function () {
  var projects = window.PROJECTS || [];
  var tabs = document.getElementById("directory");
  var panel = document.getElementById("case");
  if (!tabs || !panel || !projects.length) return;

  var ICON_UP = '<span aria-hidden="true">\u2197</span>';

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function host(url) {
    try {
      var u = new URL(url);
      return u.hostname.replace(/^www\./, "") + (u.pathname !== "/" ? u.pathname.replace(/\/$/, "") : "");
    } catch (e) { return url; }
  }

  function metaRow(label, value) {
    var v = value ? esc(value) : '<span style="color:var(--muted);font-weight:450">To be added</span>';
    return "<div><dt>" + esc(label) + "</dt><dd>" + v + "</dd></div>";
  }

  /* Directory */
  tabs.innerHTML = projects.map(function (p, i) {
    return '<button type="button" role="tab" class="directory-item" id="tab-' + p.slug + '" data-slug="' + p.slug + '" ' +
      'aria-controls="case" aria-selected="false" tabindex="-1">' +
      '<span class="directory-name">' + esc(p.name) + "</span>" +
      '<span class="directory-class">' + esc(p.classification) + "</span></button>";
  }).join("");
  var buttons = Array.prototype.slice.call(tabs.querySelectorAll(".directory-item"));

  function caseHTML(p) {
    var meta = [["Role", p.role], ["Timeline", p.timeline], ["Classification", p.classification]];
    if (p.extra) meta.push([p.extra.label, p.extra.value]);

    var arch = (p.architecture || []).map(function (r) {
      return '<div class="vault-row"><dt>' + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>";
    }).join("");

    var challenges = (p.challenges || []).map(function (c) {
      return '<li class="challenge"><h4>' + esc(c.title) + "</h4><p>" + esc(c.body) + "</p></li>";
    }).join("");

    var v = p.victory || {};
    var stack = (p.stack || []).map(function (k) {
      var t = (window.TECH || {})[k];
      return t ? '<li class="stack-item">' + window.icon(t.icon) + esc(t.name) + "</li>" : "";
    }).join("");

    return (
      '<h2 class="case-title" tabindex="-1">' + esc(p.name) + "</h2>" +
      (p.tagline ? '<p class="case-tagline">' + esc(p.tagline) + "</p>" : "") +
      '<a class="link-arrow case-link" href="' + esc(p.link.url) + '" target="_blank" rel="noopener noreferrer">' +
        esc(p.link.label || "Live Project") + " " + ICON_UP + '<span class="sr-only"> (opens in a new tab)</span></a>' +
      '<dl class="meta">' + meta.map(function (m) { return metaRow(m[0], m[1]); }).join("") + "</dl>" +
      '<figure class="shot" style="margin:0"><div class="shot-bar">' + esc(host(p.link.url)) + "</div>" +
        '<div class="shot-body"><div class="shot-empty"><strong>' + esc(p.name) + "</strong><span>" +
        esc(p.screenshot || "Add a screenshot in projects-data.js") + "</span></div>" +
        (p.screenshot ? '<img src="' + esc(p.screenshot) + '" alt="' + esc(p.name) + ' screenshot" loading="lazy">' : "") +
      "</div></figure>" +
      '<section class="case-section" aria-labelledby="h-mission"><h3 id="h-mission">Mission</h3><div class="prose">' +
        (p.mission || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div></section>" +
      '<section class="case-section" aria-labelledby="h-arch"><h3 id="h-arch">Architectural Vault</h3><dl class="vault">' + arch + "</dl></section>" +
      '<section class="case-section" aria-labelledby="h-chal"><h3 id="h-chal">Structural Challenges</h3><ul class="challenges">' + challenges + "</ul></section>" +
      '<section class="case-section" aria-labelledby="h-vic"><h3 id="h-vic">Engineering Victory</h3><div class="victory"><div class="victory-steps">' +
        '<div class="victory-step"><h4>What was difficult</h4><p>' + esc(v.difficulty) + "</p></div>" +
        '<div class="victory-step"><h4>What I did</h4><p>' + esc(v.action) + "</p></div>" +
        '<div class="victory-step"><h4>What improved</h4><p>' + esc(v.outcome) + "</p></div>" +
      "</div></div></section>" +
      '<section class="case-section" aria-labelledby="h-stack"><h3 id="h-stack">Build Stack</h3><ul class="stack">' + stack + "</ul></section>"
    );
  }

  var currentSlug = null;

  function select(slug, opts) {
    opts = opts || {};
    var p = projects.filter(function (x) { return x.slug === slug; })[0] || projects[0];
    if (p.slug === currentSlug && !opts.force) return;
    currentSlug = p.slug;

    buttons.forEach(function (b) {
      var on = b.dataset.slug === p.slug;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "tab-" + p.slug);
    panel.innerHTML = caseHTML(p);

    var img = panel.querySelector(".shot-body img");
    if (img) img.addEventListener("error", function () { img.remove(); });

    panel.classList.remove("is-switching");
    void panel.offsetWidth; /* restart the short swap animation */
    panel.classList.add("is-switching");

    document.title = p.name + " — Projects — " + ((window.SITE && window.SITE.name) || "");
    if (opts.push && location.hash !== "#" + p.slug) history.replaceState(null, "", "#" + p.slug);

    /* On narrow screens the case study sits below the directory: bring it into view */
    if (opts.scroll && window.matchMedia("(max-width: 980px)").matches) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  tabs.addEventListener("click", function (e) {
    var b = e.target.closest(".directory-item");
    if (b) select(b.dataset.slug, { push: true, scroll: true });
  });

  /* Arrow-key navigation (roving tabindex) */
  tabs.addEventListener("keydown", function (e) {
    var i = buttons.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % buttons.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + buttons.length) % buttons.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = buttons.length - 1;
    if (next === null) return;
    e.preventDefault();
    buttons[next].focus();
    select(buttons[next].dataset.slug, { push: true });
  });

  window.addEventListener("hashchange", function () {
    select(location.hash.replace("#", ""), {});
  });

  select(location.hash.replace("#", "") || projects[0].slug, { force: true });
})();
