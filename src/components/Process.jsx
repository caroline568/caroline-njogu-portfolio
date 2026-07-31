import Reveal from './Reveal.jsx'

const steps = [
  {
    index: '01',
    title: 'Discover',
    detail: 'Understanding users, problems, and opportunities.',
  },
  {
    index: '02',
    title: 'Design',
    detail: 'Creating user flows, wireframes, and intuitive experiences.',
  },
  {
    index: '03',
    title: 'Build',
    detail: 'Engineering reliable software and AI-powered solutions.',
  },
  {
    index: '04',
    title: 'Improve',
    detail: 'Testing, learning, and iterating based on feedback.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <Reveal className="section-head">
        <span className="section-eyebrow">04 / Process</span>
        <h2 className="section-title">How I build.</h2>
      </Reveal>

      <div className="process-grid">
        {steps.map((step, i) => (
          <Reveal key={step.index} delay={i * 90}>
            <div className="process-step">
              <span className="process-index">{step.index}</span>
              <p className="process-title">{step.title}</p>
              <p className="process-detail">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
