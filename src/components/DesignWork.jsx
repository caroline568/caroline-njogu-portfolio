import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const designProjects = [
  {
    name: 'Wedding Planner App',
    tagline: 'UX Case Study',
    description:
      'A mobile app consolidating wedding budget, guests, tasks, and inspiration into one dashboard-first experience.',
    image: '/projects/wedding-planner/inspiration.png',
    caseStudy: '/projects/wedding-planner-app',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/RBGCGjPF9fW8mkLGCe8Hue/wedding-planner-app',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/RBGCGjPF9fW8mkLGCe8Hue/wedding-planner-app?node-id=98-170',
      },
    ],
  },
  {
    name: 'S Mart',
    tagline: 'UX Case Study',
    description:
      'A grocery shopping and delivery app for Kenyan shoppers, with local payment options and live delivery tracking.',
    image: '/projects/smart-mart/products.png',
    caseStudy: '/projects/smart-mart',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/2DaNeg6c0ujjkAvPKUCtOt/Smart-App',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/2DaNeg6c0ujjkAvPKUCtOt/Smart-App?node-id=53-83',
      },
    ],
  },
]

export default function DesignWork() {
  return (
    <section id="design-work" className="design-work">
      <Reveal className="section-head">
        <span className="section-eyebrow">02 / Design Work</span>
        <h2 className="section-title">Product design, alongside the engineering.</h2>
      </Reveal>

      <div className="design-list">
        {designProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <div className="design-card">
              <div className="design-card-image-wrap">
                <span className="design-card-badge">Design</span>
                <img src={project.image} alt={`${project.name} preview`} className="design-card-image" />
              </div>
              <div className="design-card-body">
                <p className="design-card-tagline">{project.tagline}</p>
                <h3 className="design-card-name">{project.name}</h3>
                <p className="design-card-desc">{project.description}</p>
                <div className="design-card-links">
                  <Link to={project.caseStudy} className="project-link project-link-case-study">
                    Case study →
                  </Link>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
