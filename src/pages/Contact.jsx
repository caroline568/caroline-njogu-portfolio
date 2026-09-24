import { useState } from 'react'
import { SITE } from '../data/site.js'
import { useTitle } from '../hooks.js'

const RULES = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Enter your name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Write at least a sentence so I know how to help.'),
}

const LINKS = [
  { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/carolinenjogu', href: SITE.links.linkedin, external: true },
  { label: 'GitHub', value: 'github.com/caroline568', href: SITE.links.github, external: true },
  { label: 'Kavaro Agency', value: 'kavaroagency.com', href: SITE.links.kavaro, external: true },
]

export default function Contact() {
  useTitle(`Contact — ${SITE.name}`)
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ text: '', kind: '' })
  const [sending, setSending] = useState(false)

  const validate = (field, value = values[field]) => {
    const msg = RULES[field](value)
    setErrors((e) => ({ ...e, [field]: msg }))
    return !msg
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) validate(name, value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus({ text: '', kind: '' })
    const fields = Object.keys(RULES)
    const bad = fields.filter((f) => !validate(f))
    if (bad.length) {
      document.getElementById(bad[0])?.focus()
      return
    }
    if (values.company) return /* honeypot: bots fill this, people never see it */

    const data = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() }
    const cfg = SITE.contactForm

    if (cfg.endpoint) {
      setSending(true)
      setStatus({ text: 'Sending…', kind: '' })
      fetch(cfg.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
        .then((r) => {
          if (!r.ok) throw new Error('bad response')
          setValues({ name: '', email: '', message: '', company: '' })
          setStatus({ text: 'Message sent. Thank you, I will reply soon.', kind: 'ok' })
        })
        .catch(() => setStatus({ text: `The message did not send. Please try again, or email ${SITE.email} directly.`, kind: 'error' }))
        .finally(() => setSending(false))
      return
    }

    /* No form service connected yet: open the visitor's email app with everything filled in. */
    const body = `${data.message}\n\n— ${data.name} (${data.email})`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(cfg.subject)}&body=${encodeURIComponent(body)}`
    setStatus({ text: `Opening your email app with your message. If nothing opens, write to ${SITE.email}.`, kind: 'ok' })
  }

  const field = (name, label, children) => (
    <div className={`field${errors[name] ? ' is-invalid' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {children}
      <p className="error" id={`${name}-err`} role="alert">{errors[name]}</p>
    </div>
  )

  const common = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    onBlur: () => validate(name),
    required: true,
    'aria-describedby': `${name}-err`,
    'aria-invalid': errors[name] ? 'true' : 'false',
  })

  return (
    <>
      <header className="page-head wrap">
        <h1>Contact Me</h1>
        <p className="lede">Have a project, opportunity, or idea you'd like to discuss? Let's connect.</p>
      </header>

      <div className="wrap section" style={{ paddingTop: '1rem' }}>
        <div className="contact-grid">
          <ul className="contact-links" aria-label="Contact links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="label">{l.label}</span>
                  <span className="value">
                    {l.value}
                    {l.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <form className="form" onSubmit={onSubmit} noValidate>
            {field('name', 'Name', <input type="text" autoComplete="name" {...common('name')} />)}
            {field('email', 'Email', <input type="email" autoComplete="email" {...common('email')} />)}
            {field('message', 'Message', <textarea {...common('message')} />)}
            <div className="hp" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" value={values.company} onChange={onChange} tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button className="btn" type="submit" disabled={sending}>Send Message</button>
            <p className={`form-status${status.kind ? ` is-${status.kind}` : ''}`} role="status" aria-live="polite">{status.text}</p>
          </form>
        </div>
      </div>
    </>
  )
}
