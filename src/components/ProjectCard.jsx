export default function ProjectCard({ project }) {
  const { index, name, tagline, description, stack, links } = project

  return (
    <article className="project-card">
      <div className="project-index">{index}</div>
      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-name">{name}</h3>
          <p className="project-tagline">{tagline}</p>
        </div>
        <p className="project-desc">{description}</p>
        <ul className="project-stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {links.map((link) => (
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
    </article>
  )
}
