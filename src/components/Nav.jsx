import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme.js'

const links = [
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#design-work', label: 'Design', id: 'design-work' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#process', label: 'Process', id: 'process' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#build-in-public', label: 'Build in Public', id: 'build-in-public' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="nav">
      <a href="#top" className="nav-mark">
        CN<span className="cursor">_</span>
      </a>

      <nav className="nav-links">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={active === link.id ? 'nav-link-active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="nav-gh"
        href="https://github.com/caroline568"
        target="_blank"
        rel="noreferrer"
      >
        github.com/caroline568
      </a>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 14.5a8.5 8.5 0 1 1-10.5-11 7 7 0 0 0 10.5 11z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      {open && (
        <nav className="nav-mobile-menu">
          {links.map((link) => (
            <a key={link.id} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}