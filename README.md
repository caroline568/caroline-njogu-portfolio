# Caroline Njogu — Portfolio

A static, five-page portfolio (Home, Projects, About, Contact, More). No build step, no dependencies:
plain HTML, CSS and JavaScript, with the fonts and icons bundled locally.

## Run it

Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

Deploy by dragging the folder onto Vercel, Netlify or Cloudflare Pages (or push it to a repo they watch).

## What to edit

| I want to…                         | Edit                                           |
| ---------------------------------- | ---------------------------------------------- |
| Change my email, LinkedIn, GitHub, Kavaro link, or resume path | `assets/js/config.js` |
| Replace my photo                   | `assets/img/profile.webp` (keep the filename)  |
| Replace my resume                  | `resume/Caroline-Njogu-Resume.pdf` (keep the filename) |
| Add screenshots                    | `assets/img/screenshots/` — see the README.txt there |
| Edit or add a project case study   | `assets/js/projects-data.js`                   |
| Change colours and fonts           | the tokens at the top of `assets/css/styles.css` |
| Connect the contact form           | `contactForm.endpoint` in `assets/js/config.js` |

The same URLs are also written into the HTML as a fallback, so if you change a link in `config.js`,
search-and-replace the old one in the `.html` files too.

## Contact form

Until you add a form-service endpoint (Formspree, Getform, Web3Forms, Netlify Forms…), "Send Message" validates the
fields and opens the visitor's email app with the message pre-filled. Once `endpoint` is set, it posts JSON to it instead.

## Structure

    index.html  projects.html  about.html  contact.html  more.html
    assets/css/styles.css          design tokens + all styles
    assets/js/config.js            links, email, resume, form endpoint
    assets/js/projects-data.js     the five case studies
    assets/js/tech.js, icons.js    technology names and inline SVG icons
    assets/js/main.js              nav, role rotator, tech grids
    assets/js/projects.js          the project workspace
    assets/js/contact.js           form validation and sending
    assets/fonts/                  Bricolage Grotesque + Newsreader (SIL OFL)
    resume/                        resume PDF

Brand icons come from Simple Icons (CC0) and Devicon (MIT).
