const entries = [
  {
    hash: 'c9027ab',
    when: 'Apr – Nov 2025',
    title: 'Product Design bootcamp, Moringa School',
    detail: 'UI/UX design, Figma, wireframing, prototyping, user research.',
  },
  {
    hash: 'd44f8e1',
    when: 'Sep 2025 →',
    title: 'Founded Kavaro Agency',
    detail: 'Design and engineering studio building websites, apps, and AI tools for real clients.',
  },
  {
    hash: 'c1a4de9',
    when: 'Nov 2025',
    title: 'Professional Certificate in UI/UX Design, Moringa School',
    detail: 'Formal certification building on the Product Design bootcamp.',
  },
  {
    hash: 'e01b73f',
    when: 'Feb – Sep 2026',
    title: 'Software Engineering, Moringa School',
    detail: 'JavaScript, Python, React, Next.js, backend systems, databases, APIs. Coursework complete; graduation & certificate expected late 2026.',
  },
  {
    hash: 'f7d90a2',
    when: 'Jun 2026 →',
    title: 'Building Finora',
    detail: 'AI-powered financial coach for everyday Kenyans — in public, feature by feature.',
  },
  {
    hash: 'd2c8f31',
    when: 'Mar 2026',
    title: 'Generative AI Tools certification, Moringa School',
    detail: 'Applied directly to the AI layers in Finora, MediFlow, and Kavaro AI Support.',
  },
  {
    hash: 'b6e21d4',
    when: 'Earlier',
    title: 'Cybersecurity fundamentals',
    detail: 'Data protection, network security, risk awareness — an early look at how systems work.',
  },
  {
    hash: 'a1f9c02',
    when: 'Earlier',
    title: 'Diploma, Early Childhood Development Education',
    detail: 'An earlier foundation in education that strengthened communication, empathy, and understanding how people learn.',
  },
]

export default function Log() {
  return (
    <div className="log">
      {entries.map((entry, i) => (
        <div className="log-entry" key={entry.hash}>
          <div className="log-marker">
            <span className="log-hash">{entry.hash}</span>
            {i < entries.length - 1 && <span className="log-rule" />}
          </div>
          <div className="log-body">
            <p className="log-when">{entry.when}</p>
            <p className="log-title">{entry.title}</p>
            <p className="log-detail">{entry.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}