/* ==========================================================================
   PROJECT CASE STUDIES
   The Projects page is rendered entirely from this list. To edit a project,
   change its entry; to add one, copy an entry and give it a new `slug`.

   Fields
   - slug            URL-safe id, also used for deep links (projects.html#pesarate)
   - link            { url, label }   label defaults to "Live Project"
   - role            Full-Stack Developer always comes first
   - extra           optional 4th metadata item, e.g. Design contribution
   - screenshot      path to the image (see assets/screenshots/README.txt)
   - mission         array of paragraphs
   - architecture    array of [layer, detail] rows — only list what is true
   - challenges      array of { title, body }
   - victory         { difficulty, action, outcome }  (difficult → what I did → what improved)
   - stack           keys from tech.js

   Copy below is drawn from the resume and project notes. Where a real story
   would be stronger than a summary (challenges, victory), swap yours in.
   ========================================================================== */
window.PROJECTS = [
  {
    slug: "pesarate",
    name: "PesaRate",
    tagline: "Currency and travel-money intelligence workspace",
    link: { url: "https://pesarate.vercel.app/", label: "Live Project" },
    role: "Full-Stack Developer · UI/UX Design",
    timeline: "Started August 2026",
    classification: "Full-Stack / FinTech / Web Application",
    extra: { label: "Design contribution", value: "UI/UX / Product Design" },
    screenshot: "assets/screenshots/pesarate.png",
    mission: [
      "Moving money across borders means trusting a rate that is hard to check. PesaRate began as a comparison of live mid-market exchange rates against what remittance channels actually charge, built for Kenyans who send, receive and spend money abroad.",
      "It has since grown into one workspace for currency conversion, provider-aware fee estimates, travel budgeting, exchange-rate monitoring and trend visualization, so the decision happens in one place instead of across several tools."
    ],
    architecture: [
      ["Frontend", "React with Vite, written in plain JavaScript"],
      ["Backend", "Flask REST API"],
      ["Database", "PostgreSQL"],
      ["Authentication", "JWT-based accounts"],
      ["Data source", "Frankfurter API for live exchange rates"],
      ["Deployment", "Frontend on Vercel"]
    ],
    challenges: [
      { title: "From front-end app to full-stack product", body: "PesaRate started as a React app reading live rates. A Flask API, PostgreSQL and JWT authentication turned it into a full-stack application over successive project phases." },
      { title: "Showing the real cost of a transfer", body: "Fee estimates are provider-aware, so the comparison with the mid-market rate reflects what each channel charges rather than one generic figure." },
      { title: "Many tools, one workflow", body: "Conversion, fees, budgeting, rate monitoring and trend charts each answer a different question. The challenge was presenting them as one decision-making experience." }
    ],
    victory: {
      difficulty: "Comparing a remittance quote with the true exchange rate usually means checking several sources and doing the math yourself.",
      action: "Built one workspace that pulls live mid-market rates, applies provider-aware fee estimates and charts how rates trend, backed by a Flask API and PostgreSQL.",
      outcome: "A person can see what a channel really costs against the mid-market rate, and plan a trip budget around it, without leaving the app."
    },
    stack: ["react", "vite", "javascript", "flask", "python", "postgresql", "jwt", "frankfurter", "vercel", "git", "github"]
  },

  {
    slug: "kavaro-agency",
    name: "Kavaro Agency",
    tagline: "Digital product agency platform",
    link: { url: "https://kavaroagency.com", label: "Live Project" },
    role: "Full-Stack Developer · UI/UX Design",
    timeline: "September 2025 – Present",
    classification: "Full-Stack / Agency Platform / Web Application",
    extra: { label: "Design contribution", value: "UI/UX / Product Design" },
    screenshot: "assets/screenshots/kavaro-agency.png",
    mission: [
      "Kavaro Agency is a digital product studio for web development, product design and AI-powered solutions. Its website has two jobs at once: present the studio's work with polish, and handle the practical side of the business, from leads to booked calls and inquiries.",
      "It is designed for small businesses, startups and entrepreneurs looking for a product partner."
    ],
    architecture: [
      ["Frontend", "React with Vite"],
      ["Backend", "Node.js and Express"],
      ["Admin dashboard", "Internal Flask and SQLAlchemy app that tracks leads, booked calls and inquiry status"],
      ["Integrations", "WhatsApp contact"],
      ["Hosting", "Cloudflare"]
    ],
    challenges: [
      { title: "Two back ends, one business", body: "The public site runs on Node.js and Express while the internal dashboard runs on Flask and SQLAlchemy: two services, each with a clear job." },
      { title: "Polish and practicality together", body: "The site had to look like a product studio and also work like a business tool, so lead capture stayed in view through every design decision." },
      { title: "Changing with real behavior", body: "WhatsApp integration and a navigation redesign shipped after looking at how visitors actually used the site." }
    ],
    victory: {
      difficulty: "Leads, booked calls and inquiries needed one place where their status could be tracked.",
      action: "Built an internal Flask and SQLAlchemy dashboard that records each lead's status, then shipped iterative improvements, including WhatsApp integration and a redesigned navigation, based on real user behavior.",
      outcome: "Every inquiry can be followed from first contact to booked call, and visitors have a more direct way to reach out."
    },
    stack: ["react", "vite", "nodejs", "express", "flask", "sqlalchemy", "cloudflare", "git", "github"]
  },

  {
    slug: "inventory-management-system",
    name: "Inventory Management System",
    tagline: "RESTful inventory and product intelligence API",
    link: { url: "https://github.com/caroline568/Inventory-Management-System", label: "View Repository" },
    role: "Full-Stack Developer",
    timeline: "2026 · Moringa School",
    classification: "Back-End / REST API / CLI",
    extra: { label: "Focus", value: "Back-end and API design" },
    screenshot: "assets/screenshots/inventory-management-system.png",
    mission: [
      "A RESTful API for managing inventory, with full create, read, update and delete operations and product details enriched from OpenFoodFacts. A companion command-line interface manages the same inventory from the terminal.",
      "Built during Moringa School's Software Engineering program to practice production-style back-end work: a clean API, an external integration, automated tests and a pull-request workflow."
    ],
    architecture: [
      ["API", "Flask REST API with full CRUD"],
      ["Persistence", "SQLAlchemy"],
      ["Integration", "OpenFoodFacts product data"],
      ["Interface", "Companion command-line tool"],
      ["Testing", "pytest"],
      ["Workflow", "Feature branches merged through pull requests on GitHub"]
    ],
    challenges: [
      { title: "Blending outside data with your own", body: "Product details from OpenFoodFacts had to sit alongside inventory records the system manages itself." },
      { title: "One inventory, two interfaces", body: "The same data is reachable through a REST API and a command-line tool, so behavior has to stay consistent between them." },
      { title: "Keeping changes safe", body: "pytest coverage and a feature-branch, pull-request workflow keep changes tested and merged deliberately." }
    ],
    victory: {
      difficulty: "A back end that depends on an external product database and serves two interfaces can break quietly.",
      action: "Covered it with pytest tests and built every change on a feature branch, merged through a pull request.",
      outcome: "Behavior stays verified as the API and CLI evolve, and the project history reads like a team codebase."
    },
    stack: ["python", "flask", "sqlalchemy", "pytest", "openfoodfacts", "git", "github"]
  },

  {
    slug: "workout-tracker-api",
    name: "Workout Tracker API",
    tagline: "RESTful fitness management back end",
    link: { url: "https://github.com/caroline568/workout-tracker-api", label: "View Repository" },
    role: "Full-Stack Developer",
    timeline: "2026 · Moringa School",
    classification: "Back-End / REST API / Fitness",
    extra: { label: "Focus", value: "Back-end and data modeling" },
    screenshot: "assets/screenshots/workout-tracker-api.png",
    mission: [
      "A RESTful back end for a workout-tracking app used by personal trainers. Workouts contain many exercises, and each exercise can be reused across workouts with its own sets, reps and duration.",
      "Built as a Moringa School lab to practice relational data modeling, validation and reliable API responses."
    ],
    architecture: [
      ["API", "Flask REST API for workouts and exercises"],
      ["Persistence", "SQLAlchemy models"],
      ["Serialization", "Marshmallow schemas for structured, validated responses"],
      ["Data model", "Workouts and exercises are many-to-many, with sets, reps and duration held per workout-exercise"]
    ],
    challenges: [
      { title: "Many-to-many with attributes", body: "Sets, reps and duration belong to the link between a workout and an exercise, not to either one alone." },
      { title: "Validating at two levels", body: "Model and schema validation reject bad data before it reaches the database." },
      { title: "Consistent responses", body: "Marshmallow serialization keeps every response structured the same way." }
    ],
    victory: {
      difficulty: "Reusable exercises appear in many workouts, each time with different numbers.",
      action: "Modeled the link between workout and exercise as its own record carrying sets, reps and duration, and used Marshmallow to serialize and validate it.",
      outcome: "Trainers' workouts come back as consistent, validated JSON, and invalid input is stopped early."
    },
    stack: ["python", "flask", "sqlalchemy", "marshmallow", "git", "github"]
  },

  {
    slug: "mood-tracker",
    name: "Mood Tracker",
    tagline: "Private personal wellness tracker",
    link: { url: "https://github.com/caroline568/mood-tracker-app", label: "View Repository" },
    role: "Full-Stack Developer",
    timeline: "2026 · Moringa School",
    classification: "Full-Stack / Wellness / Web Application",
    extra: { label: "Focus", value: "Authentication and user-owned data" },
    screenshot: "assets/screenshots/mood-tracker.png",
    mission: [
      "A private wellness tracker where each person logs how they feel and sees only their own entries.",
      "Built to practice secure, account-based data management across a full stack, with a clean line between the React front end and the Flask back end."
    ],
    architecture: [
      ["Frontend", "React"],
      ["Backend", "Flask REST API"],
      ["Authentication", "JWT"],
      ["Data ownership", "Every mood entry belongs to, and is only visible to, its owner"]
    ],
    challenges: [
      { title: "Privacy by default", body: "Mood data is personal, so each entry is tied to a user and scoped to them." },
      { title: "Authenticated requests end to end", body: "The React client and the Flask API communicate with JWTs so every request is tied to a signed-in user." },
      { title: "A clean front-end to back-end boundary", body: "Keeping responsibilities clearly divided between the interface and the API." }
    ],
    victory: {
      difficulty: "Mood data is personal: one user must never be able to reach another's entries.",
      action: "Put JWT authentication in front of the API and scoped every entry to its owner.",
      outcome: "Private, user-owned tracking with secure account-based data management on a clean React and Flask architecture."
    },
    stack: ["react", "javascript", "python", "flask", "jwt", "git", "github"]
  }
];
