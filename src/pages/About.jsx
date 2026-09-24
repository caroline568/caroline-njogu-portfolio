import TechList from '../components/TechList.jsx'
import { SITE } from '../data/site.js'
import { useTitle } from '../hooks.js'

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{children}</svg>
)

const INTERESTS = [
  {
    title: 'Reading Novels',
    text: 'Fiction is how I slow down, and it keeps me curious about how other people see the world.',
    icon: (
      <Svg>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z" />
        <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" />
      </Svg>
    ),
  },
  {
    title: 'UI/UX Designing',
    text: 'Shaping flows and interfaces in Figma, from first wireframe to interactive prototype.',
    icon: (
      <Svg>
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <path d="M3 9h18M9 9v11" />
      </Svg>
    ),
  },
  {
    title: 'Coding',
    text: 'Turning ideas into working software, from the first component to the deployed app.',
    icon: (
      <Svg>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </Svg>
    ),
  },
]

const PATH = [
  ['Design', 'UI/UX and Product Design training at Moringa School, 2025.'],
  ['Product thinking', 'User research, wireframing and prototyping, centered on real users.'],
  ['Software engineering', 'Full-stack training at Moringa School, 2026.'],
  ['Full-stack development', 'Building and deploying products end to end, from interface to database.'],
]

const EDUCATION = [
  {
    when: 'Feb 2026 – Sep 2026',
    note: 'Coursework completed Sep 4, 2026',
    title: 'Software Engineering Program (Full-Stack)',
    where: 'Moringa School, Nairobi',
    desc: 'Intensive full-stack training with emphasis on production-ready development, Agile practices, and real-world project delivery. Graduation and certificate expected late 2026.',
  },
  { when: 'Mar 2026', title: 'Generative AI Tools', where: 'Certification, Moringa School' },
  {
    when: 'Apr 2025 – Nov 2025',
    title: 'Product Design (UI/UX Design)',
    where: 'Moringa School, Nairobi',
    desc: 'Hands-on training in user research, UX strategy, wireframing, prototyping, interaction design, usability testing, and user-centered product design.',
  },
]

const SKILLS = [
  ['Full-Stack Development', 'React, Next.js, Flask, Node.js'],
  ['Front-End Development', 'Component-driven interfaces with Tailwind CSS'],
  ['Back-End Development', 'Python/Flask and Node.js/Express services'],
  ['REST API Development', 'Design, integration and testing'],
  ['Database Design', 'PostgreSQL, SQLAlchemy, Supabase'],
  ['Authentication', 'JWT and NextAuth'],
  ['Responsive Development', 'Layouts that hold from phone to desktop'],
  ['UI/UX Design', 'Figma, wireframing, prototyping, user research'],
  ['Product Design', 'From user research to usable interfaces'],
  ['AI Integration', 'Generative AI features inside products'],
  ['Automated Testing', 'pytest'],
  ['Deployment', 'Vercel and Render'],
]

export default function About() {
  useTitle(`About — ${SITE.name}`)
  return (
    <>
      <header className="page-head wrap">
        <h1>About Me</h1>
      </header>

      <section className="wrap section" style={{ paddingTop: 0 }} aria-labelledby="summary-title">
        <div className="summary-grid">
          <div>
            <h2 className="section-title" id="summary-title">Professional Summary</h2>
            <p className="summary-lead">
              I'm a full-stack developer who builds digital products with a strong understanding of how they should look, feel, and work.
            </p>
            <p className="summary-body">
              My path started in design. Training in UI/UX and product design at Moringa School taught me to begin with people and their problems, through research, wireframes and prototypes. That thinking led me into software engineering, and now I carry a product from idea and user experience through the front end, back end, APIs, databases and deployment.
            </p>
            <p className="summary-body">
              I work mostly with React, Next.js, Flask, Node.js and PostgreSQL, and I bring generative AI into products where it earns its place. I founded Kavaro Agency, a digital product studio, to put all of it into practice.
            </p>
          </div>

          <aside className="facts" aria-labelledby="facts-title">
            <h2 id="facts-title">FAST FACTS</h2>
            <dl>
              <div>
                <dt>Education</dt>
                <dd>
                  <strong>Software Engineering (Full-Stack)</strong>
                  <br />
                  Moringa School, Nairobi. Coursework completed Sep 2026.
                </dd>
                <dd style={{ marginTop: '.6rem' }}>
                  <strong>Product Design (UI/UX)</strong>
                  <br />
                  Moringa School, Nairobi. 2025.
                </dd>
              </div>
              <div>
                <dt>Frameworks</dt>
                <dd><TechList keys={['react', 'nextjs', 'flask', 'nodejs']} variant="inline" /></dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English (professional), Swahili (native)</dd>
              </div>
            </dl>
          </aside>
        </div>

        <ol className="path" aria-label="How I got here">
          {PATH.map(([title, text]) => (
            <li className="path-step" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="interests-title">
        <div className="wrap">
          <h2 className="section-title" id="interests-title">Personal Interests</h2>
          <div className="interests">
            {INTERESTS.map((i) => (
              <div className="interest" key={i.title}>
                {i.icon}
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="wrap">
          <h2 className="section-title" id="edu-title">Education</h2>
          <div className="timeline">
            {EDUCATION.map((e) => (
              <div className="timeline-row" key={e.title}>
                <div className="timeline-when">
                  {e.when}
                  {e.note && <small>{e.note}</small>}
                </div>
                <div className="timeline-what">
                  <h3>{e.title}</h3>
                  <p className="where">{e.where}</p>
                  {e.desc && <p className="desc">{e.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tech-title">
        <div className="wrap">
          <h2 className="section-title" id="tech-title">Technical Experience</h2>

          <div className="tech-group">
            <h3>Frameworks &amp; Libraries</h3>
            <TechList keys={['react', 'nextjs', 'flask', 'nodejs', 'express', 'tailwind', 'vite', 'sqlalchemy', 'marshmallow']} />
          </div>

          <div className="tech-group">
            <h3>Skills &amp; Expertise</h3>
            <ul className="skills">
              {SKILLS.map(([name, detail]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-group">
            <h3>Tools &amp; Technologies</h3>
            <TechList
              variant="tools"
              keys={['javascript', 'python', 'html5', 'css3', 'postgresql', 'supabase', 'jwt', 'git', 'github', 'figma', 'vercel', 'render', 'postman', 'pytest', 'vscode']}
            />
          </div>
        </div>
      </section>
    </>
  )
}
