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
  {
    index: '05',
    name: 'MediFlow',
    tagline: 'Healthcare Booking Platform',
    description:
      'A patient-facing booking platform for local clinics — live doctor availability, instant confirmation, free rescheduling, and a 24/7 AI patient assistant, built under Kavaro Agency.',
    image: '/projects/mediflow.png',
    role: ['Product design', 'Frontend development', 'AI integration'],
    stack: ['React', 'Tailwind', 'Supabase', 'AI Assistant'],
    links: [{ label: 'Live demo', href: 'https://healthbuddy-appointments.lovable.app' }],
  },
  {
    index: '06',
    name: 'Kavaro AI Support',
    tagline: 'AI Customer Support Product',
    description:
      'An AI support widget trained only on a business\u2019s own documents — answers from that content, escalates what it doesn\u2019t know, and embeds on any site in one line of code.',
    image: '/projects/kavaro-ai-support.png',
    role: ['Product design', 'Frontend development', 'AI integration'],
    stack: ['React', 'OpenAI API', 'Node.js'],
    links: [{ label: 'Live demo', href: 'https://kavaro-support-ai.lovable.app' }],
  },
  {
    index: '07',
    name: 'LearnHub',
    tagline: 'Learning Management Platform',
    description:
      'A learning management platform with courses, lessons, assignments, and certificates for students, authoring and grading tools for instructors, and an always-on AI tutor alongside every lesson.',
    image: '/projects/learnhub.png',
    role: ['Product design', 'Frontend development', 'AI integration'],
    stack: ['React', 'Supabase', 'AI Assistant'],
    links: [{ label: 'Live demo', href: 'https://nurture-learning-space.lovable.app' }],
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