import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <Reveal className="hero-content">
          <p className="hero-eyebrow">
            <span className="dot" /> Nairobi, Kenya — Product Engineer &amp; Founder
          </p>
          <p className="hero-status">
            Completing Software Engineering at Moringa School — Aug 2026
          </p>
          <h1 className="hero-title">
            Caroline Njogu builds
            <br />
            digital products, <span className="hero-title-accent">end to end.</span>
          </h1>
          <p className="hero-sub">
            I take products from problem to shipped code — combining software
            engineering, product thinking, and design to build AI-powered
            solutions that solve real-world problems. Currently building{' '}
            <a href="#projects" className="inline-link">
              Finora
            </a>
            , an AI-powered financial coach for everyday Kenyans, and leading{' '}
            <a href="#projects" className="inline-link">
              Kavaro Agency
            </a>
            , a digital product studio.
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
        </Reveal>

        <Reveal delay={150} className="hero-photo-wrap">
          <img src="/caroline.png" alt="Caroline Njogu" className="hero-photo" />
        </Reveal>
      </div>
    </section>
  )
}
