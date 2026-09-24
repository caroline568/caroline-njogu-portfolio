/* ==========================================================================
   SITE CONFIG — the one place to update links, email and the resume file.
   ========================================================================== */
export const SITE = {
  name: 'Caroline Njogu',
  email: 'njogucaroline91@gmail.com',

  links: {
    linkedin: 'https://linkedin.com/in/carolinenjogu',
    github: 'https://github.com/caroline568',
    kavaro: 'https://kavaroagency.com',
  },

  // Replace public/resume/Caroline-Njogu-Resume.pdf (same name), or change this path.
  resume: '/resume/Caroline-Njogu-Resume.pdf',

  contactForm: {
    // Paste a form-service endpoint (Formspree, Getform, Web3Forms…) to send messages from the site.
    // Example: 'https://formspree.io/f/xxxxxxxx'
    // While empty, "Send Message" opens the visitor's email app, pre-filled and addressed to the email above.
    endpoint: '',
    subject: 'Portfolio enquiry',
  },
}
