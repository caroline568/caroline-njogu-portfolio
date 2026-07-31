import { useEffect, useState } from 'react'

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
