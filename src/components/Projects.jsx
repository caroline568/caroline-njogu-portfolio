import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

const projects = [
  {
    index: '01',
    flagship: true,
    name: 'Finora',
    tagline: 'AI Financial Coach',
    description:
      'An AI-powered financial coach designed for everyday Kenyans, helping users budget, save toward goals, track spending, manage debt, and make better financial decisions.',
    problem:
      'Many people struggle with managing money because financial tools are often complicated or disconnected from everyday realities.',
    image: '/projects/finora-promo.png',
    caseStudy: '/projects/finora',
    role: [
      'Product strategy',
      'UX design',
      'Frontend engineering',
      'AI integration',
      'Feature development',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'AI-powered guidance'],
    links: [
      { label: 'Repository', href: 'https://github.com/caroline568/finora-financial-coach' },
    ],
  },
  {
    index: '02',
    name: 'Kavaro Agency',
    tagline: 'Digital Product Studio',
    description:
      'Kavaro Agency is a digital product studio founded by Caroline, combining software engineering, AI, and product design to build modern websites, web applications, and digital solutions.',
    image: '/projects/kavaro-hero.png',
    role: [
      'Founder & Software Engineer',
      'Product strategy',
      'UI/UX design',
      'Frontend development',
      'Client-focused solutions',
    ],
    caseStudy: '/projects/kavaro-agency',
    stack: ['React', 'Node.js', 'TypeScript', 'Vercel'],
    links: [{ label: 'Live site', href: 'https://kavaroagency.com' }],
  },
  {
    index: '03',
    name: 'Inventory Management System',
    tagline: 'REST API & Backend Architecture',
    description:
      'A Flask REST API and CLI for managing inventory — built as a Moringa School summative lab, with a clean commit history and tests covering both the CLI and API.',
    role: [
      'REST API development',
      'Database management',
      'Testing',
      'Error handling',
      'Backend architecture',
    ],
    stack: ['Python', 'Flask', 'SQLAlchemy'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/caroline568/Inventory-Management-System',
      },
    ],
  },
  {
    index: '04',
    name: 'Wordly Dictionary',
    tagline: 'Word Lookup, Search & Save',
    description:
      'A dark-themed dictionary app for searching word definitions, saving favorites, and revisiting recent searches — built for quick, distraction-free lookups.',
    role: ['React development', 'API & data handling', 'User experience', 'Search functionality'],
    stack: ['JavaScript', 'React'],
    links: [
      { label: 'Live demo', href: 'https://wordly-dictionary-ten.vercel.app/' },
      { label: 'Repository', href: 'https://github.com/caroline568/wordly-vocabulary-app' },
    ],
  },
  {
    index: '05',
    name: 'Workout Tracker API',
    tagline: 'Backend for Workouts & Exercises',
    description:
      'A backend API for logging workouts and exercises, with sets, reps, and duration tracked through a many-to-many exercise relationship — built as a Moringa School summative lab.',
    role: ['REST API development', 'Database design', 'Serialization', 'Backend architecture'],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'Marshmallow'],
    links: [
      { label: 'Repository', href: 'https://github.com/caroline568/workout-tracker-api' },
    ],
  },
  {
    index: '06',
    name: 'Mood Tracker',
    tagline: 'Full-Stack Journaling App',
    description:
      'A full-stack mood tracker with session and JWT authentication, where each user only sees and manages their own mood entries — built as a Moringa School summative lab.',
    role: ['Frontend development', 'Auth implementation', 'API design', 'Full-stack integration'],
    stack: ['JavaScript', 'React', 'Flask', 'JWT'],
    links: [
      { label: 'Repository', href: 'https://github.com/caroline568/mood-tracker-app' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <Reveal className="section-head">
        <span className="section-eyebrow">01 / Projects</span>
        <h2 className="section-title">Things I've shipped and things I'm still shipping.</h2>
      </Reveal>

      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}