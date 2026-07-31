import Reveal from './Reveal.jsx'

const posts = [
  {
    tag: 'Flask · REST APIs',
    title: 'Git matters as much as code',
    body: 'After building a Python REST API with an Inventory Management System as a Moringa School summative lab, the most valuable part wasn\u2019t finishing — it was the feedback after. A clean commit history with meaningful branches and PRs tells the story of how a project evolved. Testing builds the confidence to keep improving without fear of breaking things. And good APIs handle more than the happy path.',
  },
  {
    tag: 'SQL · Flask-SQLAlchemy',
    title: 'Data structure is what makes an interface useful',
    body: 'Learning SQL joins, relationships, and Flask-SQLAlchemy changed how I saw interfaces. I applied it by building an admin dashboard for Kavaro Agency — and realized every metric on screen, from leads to booked calls, depends entirely on how the data underneath is modeled and queried.',
  },
  {
    tag: 'Client-Server · Flask',
    title: 'Software engineering is systems, not just syntax',
    body: 'A few weeks in, I assumed applications were mostly about the frontend. Then I learned client-server architecture, cookies and sessions, Big O notation, and started building a full Flask REST API. Every click turned out to be a conversation between two systems — understanding that changed how I think about every feature since.',
  },
  {
    tag: 'Python · Testing',
    title: 'Debugging taught me patience',
    body: 'Moving from scripts to full applications with OOP, file I/O, CLI tools, and Pytest, the hardest adjustment was object-oriented thinking — classes, inheritance, relationships. A missing colon or bad indentation could take down an entire program. Learning to read tracebacks and break problems into smaller pieces became one of the most valuable skills of the whole journey.',
  },
]

export default function BuildInPublic() {
  return (
    <section id="build-in-public" className="build-in-public">
      <Reveal className="section-head">
        <span className="section-eyebrow">06 / Build in Public</span>
        <h2 className="section-title">Lessons, documented as they happened.</h2>
      </Reveal>

      <div className="bip-list">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 80} className="bip-post">
            <p className="bip-tag">{post.tag}</p>
            <p className="bip-title">{post.title}</p>
            <p className="bip-body">{post.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={320}>
        <a
          className="bip-linkedin"
          href="https://www.linkedin.com/in/carolinenjogu"
          target="_blank"
          rel="noreferrer"
        >
          More on LinkedIn →
        </a>
      </Reveal>
    </section>
  )
}
