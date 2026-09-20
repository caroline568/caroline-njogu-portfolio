/* ==========================================================================
   SITE CONFIG — the one place to update links, email and the resume file.
   Every link on every page reads from here (elements marked data-link,
   data-email, data-resume). The same values are also written into the HTML as
   a fallback, so search-and-replace them there too if you change them.
   ========================================================================== */
window.SITE = {
  name: "Caroline Njogu",              // also appears in the page <title>s and header (see README)
  email: "njogucaroline91@gmail.com",

  links: {
    linkedin: "https://linkedin.com/in/carolinenjogu",
    github:   "https://github.com/caroline568",
    kavaro:   "https://kavaroagency.com"
  },

  // Replace this file (same name) or change the path. Relative paths work on any host.
  resume: "resume/Caroline-Njogu-Resume.pdf",

  contactForm: {
    // Paste a form-service endpoint here (Formspree, Getform, Web3Forms, Netlify…).
    // Example: "https://formspree.io/f/xxxxxxxx"
    // While this is empty, "Send Message" opens the visitor's email app,
    // pre-filled and addressed to the email above — so it works from day one.
    endpoint: "",
    subject: "Portfolio enquiry"
  }
};
