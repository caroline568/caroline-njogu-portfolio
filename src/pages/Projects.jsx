import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PROJECTS } from '../data/projects.js'
import { SITE } from '../data/site.js'
import { TECH } from '../data/tech.js'
import { useTitle } from '../hooks.js'

function hostOf(url) {
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./, '') + (u.pathname !== '/' ? u.pathname.replace(/\/$/, '') : '')
  } catch {
    return url
  }
}

function Screenshot({ project }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="shot" style={{ margin: 0 }}>
      <div className="shot-bar">{hostOf(project.link.url)}</div>
      <div className="shot-body">
        <div className="shot-empty">
          <strong>{project.name}</strong>
          <span>{project.screenshot || 'Add a screenshot in src/data/projects.js'}</span>
        </div>
        {project.screenshot && !failed && (
          <img src={project.screenshot} alt={`${project.name} screenshot`} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
    </figure>
  )
}

function CaseStudy({ p }) {
  const meta = [
    ['Role', p.role],
    ['Timeline', p.timeline],
    ['Classification', p.classification],
    ...(p.extra ? [[p.extra.label, p.extra.value]] : []),
  ]
  const v = p.victory || {}
  return (
    <>
      <h2 className="case-title">{p.name}</h2>
      {p.tagline && <p className="case-tagline">{p.tagline}</p>}
      <a className="link-arrow case-link" href={p.link.url} target="_blank" rel="noopener noreferrer">
        {p.link.label || 'Live Project'} <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>

      <dl className="meta">
        {meta.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value || <span style={{ color: 'var(--muted)', fontWeight: 450 }}>To be added</span>}</dd>
          </div>
        ))}
      </dl>

      <Screenshot project={p} />

      <section className="case-section" aria-labelledby="h-mission">
        <h3 id="h-mission">Mission</h3>
        <div className="prose">{(p.mission || []).map((t) => <p key={t}>{t}</p>)}</div>
      </section>

      <section className="case-section" aria-labelledby="h-arch">
        <h3 id="h-arch">Architectural Vault</h3>
        <dl className="vault">
          {(p.architecture || []).map(([layer, detail]) => (
            <div className="vault-row" key={layer}>
              <dt>{layer}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-section" aria-labelledby="h-chal">
        <h3 id="h-chal">Structural Challenges</h3>
        <ul className="challenges">
          {(p.challenges || []).map((c) => (
            <li className="challenge" key={c.title}>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-section" aria-labelledby="h-vic">
        <h3 id="h-vic">Engineering Victory</h3>
        <div className="victory">
          <div className="victory-steps">
            <div className="victory-step"><h4>What was difficult</h4><p>{v.difficulty}</p></div>
            <div className="victory-step"><h4>What I did</h4><p>{v.action}</p></div>
            <div className="victory-step"><h4>What improved</h4><p>{v.outcome}</p></div>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="h-stack">
        <h3 id="h-stack">Build Stack</h3>
        <ul className="stack">
          {(p.stack || []).map((k) =>
            TECH[k] ? (
              <li className="stack-item" key={k}>
                <Icon name={TECH[k].icon} />
                {TECH[k].name}
              </li>
            ) : null,
          )}
        </ul>
      </section>
    </>
  )
}

export default function Projects() {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const caseRef = useRef(null)
  const tabRefs = useRef([])

  const slug = hash.replace('#', '')
  const index = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug))
  const active = PROJECTS[index]

  useTitle(`${active.name} — Projects — ${SITE.name}`)

  const select = (i, { scroll = false } = {}) => {
    navigate({ hash: `#${PROJECTS[i].slug}` }, { replace: true })
    if (scroll && window.matchMedia('(max-width: 980px)').matches) {
      requestAnimationFrame(() => caseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }

  /* Arrow-key navigation (roving tabindex) */
  const onKeyDown = (e) => {
    const n = PROJECTS.length
    let next = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % n
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next === null) return
    e.preventDefault()
    tabRefs.current[next]?.focus()
    select(next)
  }

  return (
    <>
      <header className="page-head wrap">
        <h1>Projects</h1>
        <p className="lede">
          Projects I've designed and built across full-stack development, product design, APIs, and digital products.
        </p>
      </header>

      <div className="wrap">
        <div className="workspace">
          <aside className="directory" aria-label="Project directory">
            <div className="directory-inner">
              <p className="directory-label" id="dir-label">Project directory</p>
              <div className="directory-list" role="tablist" aria-labelledby="dir-label" onKeyDown={onKeyDown}>
                {PROJECTS.map((p, i) => (
                  <button
                    key={p.slug}
                    ref={(el) => (tabRefs.current[i] = el)}
                    type="button"
                    role="tab"
                    className="directory-item"
                    id={`tab-${p.slug}`}
                    aria-controls="case"
                    aria-selected={i === index}
                    tabIndex={i === index ? 0 : -1}
                    onClick={() => select(i, { scroll: true })}
                  >
                    <span className="directory-name">{p.name}</span>
                    <span className="directory-class">{p.classification}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* key remounts the panel on selection, replaying the short swap animation */}
          <article
            key={active.slug}
            ref={caseRef}
            className="case is-switching"
            id="case"
            role="tabpanel"
            aria-labelledby={`tab-${active.slug}`}
          >
            <CaseStudy p={active} />
          </article>
        </div>
      </div>
    </>
  )
}
