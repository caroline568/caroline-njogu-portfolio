import ProjectCard from './ProjectCard.jsx'

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
    image: '/projects/kavaro-logo.png',
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
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-head">
        <span className="section-eyebrow">01 / Projects</span>
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
