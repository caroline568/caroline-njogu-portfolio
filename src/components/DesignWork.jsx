import { Link } from 'react-router-dom'

const designProjects = [
  {
    name: 'Wedding Planner App',
    tagline: 'UX Case Study',
    description:
      'A mobile app consolidating wedding budget, guests, tasks, and inspiration into one dashboard-first experience.',
    image: '/projects/wedding-planner/dashboard.png',
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
]

export default function DesignWork() {
  return (
    <section id="design-work" className="design-work">
      <div className="section-head">
        <span className="section-eyebrow">02 / Design Work</span>
        <h2 className="section-title">Product design, alongside the engineering.</h2>
      </div>

      <div className="design-list">
        {designProjects.map((project) => (
          <div className="design-card" key={project.name}>
            <div className="design-card-image-wrap">
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
        ))}
      </div>
    </section>
  )
}
