import Log from './Log.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <Reveal className="section-head">
        <span className="section-eyebrow">03 / About</span>
        <h2 className="section-title">Idea to shipped product — end to end.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal as="p" className="about-copy">
          I'm a product builder and software engineer focused on creating
          AI-powered solutions that solve real-world problems. With a
          foundation in UI/UX design, I approach software development by
          understanding users, designing thoughtful experiences, and building
          reliable systems.
          <br />
          <br />
          Currently, I'm building{' '}
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
          , where I create digital products for businesses and organizations.
        </Reveal>

        <Reveal delay={120}>
          <Log />
        </Reveal>
      </div>
    </section>
  )
}
