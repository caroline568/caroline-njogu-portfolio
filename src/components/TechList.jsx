import Icon from './Icon.jsx'
import { TECH } from '../data/tech.js'

/** variant: "chips" (icon + name), "tools" (icon-only tile with tooltip), "inline" (compact row) */
export default function TechList({ keys, variant = 'chips', className }) {
  const items = keys.map((k) => ({ key: k, ...TECH[k] })).filter((t) => t.name)
  const cls = className || (variant === 'tools' ? 'grid-tools' : variant === 'inline' ? 'fw' : 'chips')
  return (
    <ul className={cls}>
      {items.map((t) =>
        variant === 'tools' ? (
          <li key={t.key} className="tool" tabIndex={0} aria-label={t.name}>
            <Icon name={t.icon} />
            <span className="tool-tip" aria-hidden="true">{t.name}</span>
          </li>
        ) : variant === 'inline' ? (
          <li key={t.key}><Icon name={t.icon} />{t.name}</li>
        ) : (
          <li key={t.key} className="chip"><Icon name={t.icon} />{t.name}</li>
        ),
      )}
    </ul>
  )
}
