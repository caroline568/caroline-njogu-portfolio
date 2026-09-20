/* Shared behaviour: config-driven links, mobile nav, role rotator, tech grids. */
(function () {
  var S = window.SITE || {};

  /* Inline SVG helper, used by the tech grids and the projects workspace */
  window.icon = function (key, cls) {
    var i = (window.ICONS || {})[key] || (window.ICONS || {}).generic;
    if (!i) return "";
    return '<svg class="icon ' + (cls || "") + '" viewBox="' + i.vb + '" aria-hidden="true" focusable="false">' + i.inner + "</svg>";
  };

  /* Config-driven links */
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = S.links && S.links[a.dataset.link];
    if (url) a.setAttribute("href", url);
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (!S.email) return;
    el.setAttribute("href", "mailto:" + S.email);
    if (el.hasAttribute("data-email-text")) el.textContent = S.email;
  });
  document.querySelectorAll("[data-resume]").forEach(function (a) {
    if (S.resume) a.setAttribute("href", S.resume);
  });

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("site-nav");
  if (toggle && list) {
    var close = function () {
      list.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector(".label").textContent = "Menu";
    };
    toggle.addEventListener("click", function () {
      var open = list.getAttribute("data-open") !== "true";
      list.setAttribute("data-open", String(open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".label").textContent = open ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.getAttribute("data-open") === "true") { close(); toggle.focus(); }
    });
    window.matchMedia("(min-width: 781px)").addEventListener("change", close);
  }

  /* Rotating specialty line (home). Only one line is prominent at a time. */
  var items = Array.prototype.slice.call(document.querySelectorAll(".rotator-item"));
  if (items.length) {
    var current = 0;
    items[0].classList.add("is-active");
    if (items.length > 1) {
      setInterval(function () {
        if (document.hidden) return;
        var prev = items[current];
        current = (current + 1) % items.length;
        prev.classList.remove("is-active");
        prev.classList.add("is-leaving");
        items[current].classList.add("is-active");
        setTimeout(function () { prev.classList.remove("is-leaving"); }, 650);
      }, 3200);
    }
  }

  /* Technology grids on the About page: <ul data-tech="react,flask" data-variant="chips|tools|inline"> */
  document.querySelectorAll("[data-tech]").forEach(function (root) {
    var variant = root.dataset.variant || "chips";
    root.innerHTML = root.dataset.tech.split(",").map(function (k) {
      var t = (window.TECH || {})[k.trim()];
      if (!t) return "";
      if (variant === "tools") {
        return '<li class="tool" tabindex="0" aria-label="' + t.name + '">' + window.icon(t.icon) +
          '<span class="tool-tip" aria-hidden="true">' + t.name + "</span></li>";
      }
      if (variant === "inline") return "<li>" + window.icon(t.icon) + t.name + "</li>";
      return '<li class="chip">' + window.icon(t.icon) + t.name + "</li>";
    }).join("");
  });
})();
