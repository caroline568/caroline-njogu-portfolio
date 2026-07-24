import Log from './Log.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head">
        <span className="section-eyebrow">01 / About</span>
        <h2 className="section-title">Idea to shipped product — end to end.</h2>
      </div>

      <div className="about-grid">
        <p className="about-copy">
          I'm a product builder and founder focused on creating AI-powered
          solutions that solve real-world problems. I combine software
          engineering and product design to turn ideas into functional,
          user-centered digital products — from designing the experience to
          building the systems behind it.
          <br />
          <br />
          Currently building{' '}
          <a
            href="https://github.com/caroline568/finora-financial-coach"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            Finora
          </a>
          , an AI-powered financial coach for everyday Kenyans, and leading{' '}
          <a
            href="https://kavaroagency.com"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            Kavaro Agency
          </a>
          , where I build modern websites, web applications, and digital
          solutions.
        </p>

        <Log />
      </div>
    </section>
  )
}
