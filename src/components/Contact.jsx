import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="section-head">
        <span className="section-eyebrow">07 / Contact</span>
        <h2 className="section-title">
          Building something? Let's talk.
        </h2>
        <p className="contact-intro">
          Whether it's a product idea, a role, or a project you need shipped —
          I'd like to hear about it. Usually reply within a day.
        </p>
      </Reveal>

      <Reveal delay={100} className="contact-row">
        <a
          className="contact-link"
          href="mailto:njogucaroline91@gmail.com"
        >
          Email ↗
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/carolinenjogu"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          className="contact-link"
          href="https://github.com/caroline568"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="contact-link"
          href="https://kavaroagency.com/contact"
          target="_blank"
          rel="noreferrer"
        >
          Kavaro Agency ↗
        </a>
      </Reveal>

      <footer className="footer">
        <p>Caroline Njogu — Nairobi, Kenya</p>
        <p className="footer-log">
          <span className="hero-log-hash">$</span> building in public.
        </p>
      </footer>
    </section>
  )
}
