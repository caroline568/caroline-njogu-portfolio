import Icon from '../components/Icon.jsx'
import { SITE } from '../data/site.js'
import { useTitle } from '../hooks.js'

/* To add a resource, add an entry here. Later you can group them under headings such as
   Experiments, Open Source, Design explorations, Articles or GitHub projects. */
const RESOURCES = [
  {
    name: 'Kavaro Agency',
    description: 'Digital Product Design, Web Development & AI Solutions',
    cta: 'Visit Kavaro Agency',
    href: SITE.links.kavaro,
    icon: 'kavaro',
  },
]

export default function More() {
  useTitle(`More — ${SITE.name}`)
  return (
    <>
      <header className="page-head wrap">
        <h1>More</h1>
        <p className="lede">Additional resources, tools, experiments, and links related to my work.</p>
      </header>

      <div className="wrap section" style={{ paddingTop: '1rem' }}>
        <div className="resources">
          {RESOURCES.map((r) => (
            <a key={r.name} className="resource" href={r.href} target="_blank" rel="noopener noreferrer">
              <Icon name={r.icon} />
              <h2>{r.name}</h2>
              <p>{r.description}</p>
              <span className="link-arrow">
                {r.cta} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
