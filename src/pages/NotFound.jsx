import { Link } from 'react-router-dom'
import { SITE } from '../data/site.js'
import { useTitle } from '../hooks.js'

export default function NotFound() {
  useTitle(`Page not found — ${SITE.name}`)
  return (
    <div className="wrap not-found">
      <h1 className="section-title">That page doesn't exist.</h1>
      <p><Link className="link-arrow" to="/">Back to the home page</Link></p>
    </div>
  )
}
