const groups = [
  {
    label: 'Engineering',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Flask',
      'REST APIs',
      'SQL',
      'PostgreSQL',
      'Supabase',
      'Git',
    ],
  },
  {
    label: 'Design',
    items: [
      'UI/UX Design',
      'Figma',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    label: 'AI',
    items: [
      'Generative AI',
      'Prompt Engineering',
      'OpenAI API',
      'AI Product Development',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-head">
        <span className="section-eyebrow">04 / Skills</span>
        <h2 className="section-title">Design and engineering, in one toolkit.</h2>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skills-group" key={group.label}>
            <p className="skills-label">{group.label}</p>
            <div className="skills-chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
