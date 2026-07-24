import Log from './Log.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head">
        <span className="section-eyebrow">01 / About</span>
        <h2 className="section-title">From understanding people to building systems.</h2>
      </div>

      <div className="about-grid">
        <p className="about-copy">
          I'm a software engineering student at Moringa School and a UI/UX
          designer who believes the best way to learn is by building in
          public. Every project is a chance to sharpen my engineering skills,
          improve my product thinking, and ship something real.
          <br />
          <br />
          Right now I'm building{' '}
          <a
            href="https://github.com/caroline568/finora-financial-coach"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            Finora
          </a>
          , an AI-powered personal finance platform for everyday Kenyans —
          budgeting, saving, and spending insights made simple. Alongside
          that, I run{' '}
          <a
            href="https://kavaroagency.com"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            Kavaro Agency
          </a>
          , where design and engineering come together to build websites and
          digital products for startups and small businesses.
        </p>

        <Log />
      </div>
    </section>
  )
}
