export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-head">
        <span className="section-eyebrow">04 / Contact</span>
        <h2 className="section-title">
          Building something? Let's talk.
        </h2>
      </div>

      <div className="contact-row">
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
      </div>

      <footer className="footer">
        <p>Caroline Njogu — Nairobi, Kenya</p>
        <p className="footer-log">
          <span className="hero-log-hash">$</span> still learning. still building.
        </p>
      </footer>
    </section>
  )
}
