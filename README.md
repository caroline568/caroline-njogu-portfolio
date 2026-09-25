# Caroline Njogu — Portfolio

A static, five-page portfolio (Home, Projects, About, Contact, More). No build step, no dependencies:
plain HTML, CSS and JavaScript, with the fonts and icons bundled locally.

## Run it

Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

Deploy by dragging the folder onto Vercel, Netlify or Cloudflare Pages (or push it to a repo they watch).
This is a static, multi-page site — it does not need `npm install`, `vite`, or a build step of any kind.
If your GitHub repo has old React files in it (`package.json`, `vite.config.js`, `src/`), delete them so
Vercel doesn't try to build this as a React app.

## Making the contact form actually deliver to your inbox

Right now, submitting the form opens the visitor's own email app with the message pre-filled — it works,
but it depends on them hitting send. To have messages land in your inbox automatically with no extra step
for the visitor:

1. Go to formspree.io and sign up free.
2. Create a form, point it at your email, and copy the endpoint it gives you
   (looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `assets/js/config.js`:

       contactForm: {
         endpoint: "https://formspree.io/f/xxxxxxxx",
         ...
       }

That's the only step — the form code already knows how to send to it.

## What to edit

| I want to…                         | Edit                                           |
| ---------------------------------- | ---------------------------------------------- |
| Change my email, LinkedIn, GitHub, Kavaro link, or resume path | `assets/js/config.js` |
| Replace my photo                   | `assets/img/profile.webp` (keep the filename)  |
| Replace my resume                  | `resume/Caroline-Njogu-Resume.pdf` (keep the filename) |
| Add screenshots                    | `assets/img/screenshots/` — see the README.txt there |
| Edit or add a project case study   | `assets/js/projects-data.js`                   |
| Change colours and fonts           | the tokens at the top of `assets/css/styles.css` |
| Connect the contact form           | see above, or `contactForm.endpoint` in `assets/js/config.js` |
| Change the background bubbles      | the `BUBBLES` array in `build.py` if you regenerate, or edit the `<div class="bg-motion">` markup directly in each `.html` file |
| Change the small note at the bottom of More | search `stray-note` in `more.html` |

The same URLs are also written into the HTML as a fallback, so if you change a link in `config.js`,
search-and-replace the old one in the `.html` files too.

## Structure

    index.html  projects.html  about.html  contact.html  more.html
    assets/css/styles.css          design tokens + all styles
    assets/js/config.js            links, email, resume, form endpoint
    assets/js/projects-data.js     the five case studies
    assets/js/tech.js, icons.js    technology names and inline SVG icons
    assets/js/main.js              nav-tile rendering, role rotator, tech grids
    assets/js/projects.js          the project workspace
    assets/js/contact.js           form validation and sending
    assets/fonts/                  Bricolage Grotesque + Newsreader (SIL OFL)
    resume/                        resume PDF

Brand icons come from Simple Icons (CC0) and Devicon (MIT).
