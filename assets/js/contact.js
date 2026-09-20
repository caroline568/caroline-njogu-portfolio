/* Contact form: client-side validation, then either a form service (if configured) or a pre-filled email. */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var S = window.SITE || {};
  var cfg = S.contactForm || {};
  var status = document.getElementById("form-status");
  var submit = form.querySelector("button[type=submit]");

  var rules = {
    name: function (v) { return v.trim().length >= 2 ? "" : "Enter your name."; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address, like name@example.com."; },
    message: function (v) { return v.trim().length >= 10 ? "" : "Write at least a sentence so I know how to help."; }
  };

  function check(field) {
    var input = form.elements[field];
    var msg = rules[field](input.value);
    var wrap = input.closest(".field");
    wrap.classList.toggle("is-invalid", !!msg);
    wrap.querySelector(".error").textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Object.keys(rules).forEach(function (f) {
    form.elements[f].addEventListener("blur", function () { check(f); });
    form.elements[f].addEventListener("input", function () {
      if (form.elements[f].closest(".field").classList.contains("is-invalid")) check(f);
    });
  });

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = "form-status" + (kind ? " is-" + kind : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setStatus("", "");
    var firstBad = null;
    Object.keys(rules).forEach(function (f) { if (!check(f) && !firstBad) firstBad = form.elements[f]; });
    if (firstBad) { firstBad.focus(); return; }
    if (form.elements.company.value) return; /* honeypot: bots fill this, people never see it */

    var data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim()
    };

    if (cfg.endpoint) {
      submit.disabled = true;
      setStatus("Sending…", "");
      fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error("bad response");
        form.reset();
        setStatus("Message sent. Thank you, I will reply soon.", "ok");
      }).catch(function () {
        setStatus("The message did not send. Please try again, or email " + S.email + " directly.", "error");
      }).then(function () { submit.disabled = false; });
      return;
    }

    /* No form service connected yet: open the visitor's email app with everything filled in. */
    var body = data.message + "\n\n— " + data.name + " (" + data.email + ")";
    window.location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent(cfg.subject || "Portfolio enquiry") +
      "&body=" + encodeURIComponent(body);
    setStatus("Opening your email app with your message. If nothing opens, write to " + S.email + ".", "ok");
  });
})();
