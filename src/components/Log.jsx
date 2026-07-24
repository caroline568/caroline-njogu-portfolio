const entries = [
  {
    hash: 'a1f9c02',
    when: '2025',
    title: 'Diploma, Early Childhood Development Education',
    detail: 'Foundations in communication, patience, and how people learn.',
  },
  {
    hash: 'b6e21d4',
    when: '2025',
    title: 'Cybersecurity fundamentals',
    detail: 'Data protection, network security, risk awareness — first look at systems.',
  },
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
    hash: 'e01b73f',
    when: 'Feb 2026 →',
    title: 'Software Engineering, Moringa School',
    detail: 'JavaScript, Python, React, Next.js, backend systems, databases, APIs.',
  },
  {
    hash: 'f7d90a2',
    when: 'Jun 2026 →',
    title: 'Building Finora',
    detail: 'AI-powered financial coach for everyday Kenyans — in public, feature by feature.',
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
