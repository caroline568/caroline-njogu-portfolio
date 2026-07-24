export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">
        <span className="dot" /> Nairobi, Kenya — open to opportunities
      </p>
      <h1 className="hero-title">
        Caroline Njogu builds digital
        <br />
        products, <span className="hero-title-accent">end to end.</span>
      </h1>
      <p className="hero-sub">
        Software engineering student and product designer. I design the
        interface, then build the system behind it — currently shipping{' '}
        <a href="#projects" className="inline-link">
          Finora
        </a>{' '}
        and running{' '}
        <a href="#projects" className="inline-link">
          Kavaro Agency
        </a>
        .
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View projects
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
      <p className="hero-log-line">
        <span className="hero-log-hash">$</span> status —{' '}
        <span className="hero-log-msg">still learning. still building.</span>
      </p>
    </section>
  )
}
