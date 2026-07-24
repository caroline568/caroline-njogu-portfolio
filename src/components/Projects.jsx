import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    index: '01',
    name: 'Finora',
    tagline: 'AI financial coach for everyday Kenyans',
    description:
      'A personal finance platform that helps informal workers, salaried employees, and students budget, save toward goals, manage debt, and get personalized financial guidance from an AI coach that speaks their financial language.',
    stack: ['React', 'TypeScript', 'TanStack Start', 'Supabase', 'Tailwind CSS'],
    links: [
      { label: 'Repository', href: 'https://github.com/caroline568/finora-financial-coach' },
    ],
  },
  {
    index: '02',
    name: 'Kavaro Agency',
    tagline: 'Digital product studio, founded and led by Caroline',
    description:
      'A remote design and engineering studio building websites, web apps, and AI-powered tools for clinics, startups, and small businesses. Leads product strategy, design, and delivery end to end.',
    stack: ['React', 'Node.js', 'TypeScript', 'Vercel'],
    links: [{ label: 'Live site', href: 'https://kavaroagency.com' }],
  },
  {
    index: '03',
    name: 'Inventory Management System',
    tagline: 'A REST API for tracking stock, built from scratch',
    description:
      'A Flask REST API and CLI for managing inventory — built as a Moringa School summative lab, with a clean commit history, tests covering the CLI and API, and handling for edge cases beyond the happy path.',
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
    tagline: 'Look up words, keep the ones worth keeping',
    description:
      'A dark-themed dictionary app for searching word definitions, saving favorites, and revisiting recent searches — built for quick, distraction-free lookups.',
    stack: ['JavaScript', 'React'],
    links: [
      { label: 'Live demo', href: 'https://wordly-dictionary-ten.vercel.app/' },
      { label: 'Repository', href: 'https://github.com/caroline568/lab-wordly-dictionary' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-head">
        <span className="section-eyebrow">02 / Projects</span>
        <h2 className="section-title">Things I've shipped and things I'm still shipping.</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}
