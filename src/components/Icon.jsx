import { ICONS } from '../data/icons.js'

/** Inline SVG icon; colour follows the surrounding text colour. */
export default function Icon({ name, className = '' }) {
  const i = ICONS[name] || ICONS.generic
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox={i.vb}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: i.inner }}
    />
  )
}
