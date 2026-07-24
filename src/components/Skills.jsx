const groups = [
  {
    label: 'Engineering',
    items: ['JavaScript', 'Python', 'React', 'Next.js', 'Flask', 'SQL', 'Git'],
  },
  {
    label: 'Design',
    items: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
  },
  {
    label: 'AI',
    items: ['Generative AI Tools', 'Prompt Engineering'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-head">
        <span className="section-eyebrow">03 / Skills</span>
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
