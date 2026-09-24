import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SITE } from '../data/site.js'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/more', label: 'More' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const firstRender = useRef(true)

  /* New page: back to the top, close the mobile menu, and move focus to the content (not on first load). */
  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 781px)')
    const onMq = () => setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap">
          <Link className="brand" to="/" aria-label={`${SITE.name} — home`}>
            {SITE.name}
          </Link>
          <nav aria-label="Main">
            <button
              ref={toggleRef}
              className="nav-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="site-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="bars" aria-hidden="true" />
              <span className="label">{open ? 'Close' : 'Menu'}</span>
            </button>
            <ul className="nav-list" id="site-nav" data-open={open}>
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.end}>{n.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {SITE.name}. Nairobi, Kenya.</span>
          <span>Full-Stack Developer with a UI/UX &amp; Product Design background</span>
        </div>
      </footer>
    </>
  )
}
