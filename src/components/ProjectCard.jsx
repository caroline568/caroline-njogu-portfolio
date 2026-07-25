import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const { index, flagship, name, tagline, description, problem, role, stack, links, image, caseStudy } =
    project

  return (
    <article className={`project-card${flagship ? ' project-card-flagship' : ''}`}>
      <div className="project-index">
        {index}
        {flagship && <span className="project-flagship-tag">Flagship</span>}
      </div>
      <div className="project-body">
        {image && (
          <div className="project-image-wrap">
            <img src={image} alt={`${name} preview`} className="project-image" />
          </div>
        )}
        <div className="project-heading">
          <h3 className="project-name">{name}</h3>
          <p className="project-tagline">{tagline}</p>
        </div>
        <p className="project-desc">{description}</p>

        {problem && (
          <div className="project-block">
            <p className="project-block-label">Problem</p>
            <p className="project-block-text">{problem}</p>
          </div>
        )}

        {role && role.length > 0 && (
          <div className="project-block">
            <p className="project-block-label">My role</p>
            <ul className="project-role">
              {role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <ul className="project-stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {caseStudy && (
            <Link to={caseStudy} className="project-link project-link-case-study">
              Case study →
            </Link>
          )}
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
