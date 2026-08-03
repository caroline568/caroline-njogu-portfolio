import Reveal from './Reveal.jsx'

const stages = [
  {
    label: 'Research & Design',
    items: ['UI/UX Design', 'Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST APIs', 'SQL', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'AI',
    items: ['Generative AI', 'Prompt Engineering', 'OpenAI API', 'AI Product Development'],
  },
  {
    label: 'Deployment',
    items: ['Git', 'Vercel', 'Cloudflare'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <Reveal className="section-head">
        <span className="section-eyebrow">05 / Skills</span>
        <h2 className="section-title">One connected skillset, not three separate ones.</h2>
      </Reveal>

      <div className="skills-flow">
        {stages.map((stage, i) => (
          <div className="skills-flow-item" key={stage.label}>
            <Reveal delay={i * 90} className="skills-stage">
              <p className="skills-stage-index">{String(i + 1).padStart(2, '0')}</p>
              <p className="skills-label">{stage.label}</p>
              <div className="skills-chips">
                {stage.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            {i < stages.length - 1 && <span className="skills-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}