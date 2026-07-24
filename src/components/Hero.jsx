export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">
        <span className="dot" /> Nairobi, Kenya — Product Engineer &amp; Founder
      </p>
      <h1 className="hero-title">
        Caroline Njogu builds
        <br />
        digital products, <span className="hero-title-accent">end to end.</span>
      </h1>
      <p className="hero-sub">
        I take products from problem to shipped code — discovery, design,
        development, deployment. Currently building{' '}
        <a href="#projects" className="inline-link">
          Finora
        </a>
        , an AI-powered financial coach, and leading{' '}
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
        <span className="hero-log-msg">building in public.</span>
      </p>
    </section>
  )
}
