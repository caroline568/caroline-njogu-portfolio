import { NavLink } from 'react-router-dom'

/* Small line icons, one per page. Kept local to this component since they're
   only used here (the top header nav uses plain text, not icons). */
const ICONS = {
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  projects: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" />
    </>
  ),
  contact: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </>
  ),
  more: (
    <>
      <circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
}

const ITEMS = [
  { to: '/', end: true, key: 'home', label: 'Home' },
  { to: '/projects', key: 'projects', label: 'Projects' },
  { to: '/about', key: 'about', label: 'About' },
  { to: '/contact', key: 'contact', label: 'Contact' },
  { to: '/more', key: 'more', label: 'More' },
]

/* Icon + label quick-nav for the hero. Plain content (not fixed/sticky), so it
   scrolls away with the page like everything else in the hero. */
export default function QuickNav() {
  return (
    <nav className="quick-nav" aria-label="Quick navigation">
      <ul>
        {ITEMS.map((item) => (
          <li key={item.key}>
            <NavLink to={item.to} end={item.end} className="quick-nav-item">
              <svg
                className="quick-nav-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                {ICONS[item.key]}
              </svg>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
