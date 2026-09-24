import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import QuickNav from '../components/QuickNav.jsx'
import Rotator from '../components/Rotator.jsx'
import { PROJECTS } from '../data/projects.js'
import { SITE } from '../data/site.js'
import { useTitle } from '../hooks.js'

const SOCIAL = [
  { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn' },
  { key: 'github', icon: 'github', label: 'GitHub' },
  { key: 'kavaro', icon: 'kavaro', label: 'Kavaro Agency' },
]

export default function Home() {
  useTitle(`${SITE.name} — Full-Stack Developer`)
  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-name">
        <div className="hero-copy">
          <h1 className="hero-name" id="hero-name">
            <span>Caroline</span>
            <span>Njogu</span>
          </h1>
          <p className="hero-title">Full-Stack Developer</p>
          <p className="hero-support">
            Building digital products across the front end, back end, and user experience.
          </p>
          <Rotator />
          <div className="hero-actions">
            <a className="btn" href={SITE.resume} download="Caroline-Njogu-Resume.pdf">
              <svg className="icon icon--sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" />
              </svg>
              Download Resume
            </a>
            <Link className="link-arrow" to="/projects">View projects</Link>
          </div>
          <QuickNav />
          <ul className="social" aria-label="Social links">
            {SOCIAL.map((s) => (
              <li key={s.key}>
                <a href={SITE.links[s.key]} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className="portrait">
          {/* Replace public/profile.webp with your own photo (square or near-square works best). */}
          <div className="portrait-art">
            <PortraitFrame />
          </div>
          <figcaption className="portrait-note">
            <strong>Nairobi, Kenya</strong>
            Seeking a full-stack developer role
          </figcaption>
        </figure>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <p className="statement">
            I build full-stack digital products with a strong understanding of how they should look, feel, and work.
          </p>
          <h2 className="section-title" id="work-title">Selected work</h2>
          <div className="work-index">
            {PROJECTS.map((p) => (
              <Link key={p.slug} className="work-row" to={{ pathname: '/projects', hash: `#${p.slug}` }}>
                <span className="work-row-name">{p.name}</span>
                <span className="work-row-desc">{p.tagline}</span>
                <span className="work-row-class">{p.classification.split(' / ').slice(0, 2).join(' / ')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function PortraitFrame() {
  return (
    <div className="portrait-frame">
      <img
        src="/profile.webp"
        width="800"
        height="800"
        alt={`Portrait of ${SITE.name}`}
        onError={(e) => e.currentTarget.parentElement.classList.add('is-empty')}
      />
    </div>
  )
}
