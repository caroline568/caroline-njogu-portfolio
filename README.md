# Caroline Njogu — Portfolio

A projects-first portfolio built with React + Vite. Dark, tech-forward,
built around a "build log" of the journey from education → design →
engineering, with Finora, Kavaro Agency, Inventory Management System, and
Wordly Dictionary as the featured work.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`, ready to deploy to Vercel, Netlify, GitHub
Pages, or any static host.

## Structure

```
src/
  components/
    Nav.jsx        top navigation
    Hero.jsx        intro + tagline
    Projects.jsx     project list (edit the `projects` array to add/reorder)
    ProjectCard.jsx  single project card
    About.jsx        bio + journey log
    Log.jsx          "build log" timeline — the journey from education to now
    Skills.jsx       grouped skill chips
    Contact.jsx      links + footer
  App.jsx
  App.css
  index.css
```

## Adding a project later

Open `src/components/Projects.jsx` and add an entry to the `projects` array —
each one just needs an index, name, tagline, description, stack, and links.
That's where the Online Bookstore App, Managing Event Attendees, and the
Task Manager can go once they're ready.
