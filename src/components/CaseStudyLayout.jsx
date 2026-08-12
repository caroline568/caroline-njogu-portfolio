import { Link } from 'react-router-dom'

export default function CaseStudyLayout({ title, subtitle, image, meta, gallery, sections }) {
  return (
    <div className="page case-study">
      <header className="cs-nav">
        <Link to="/" className="cs-back">
          ← Back to portfolio
        </Link>
        <Link to="/" className="nav-mark">
          CN<span className="cursor">_</span>
        </Link>
      </header>

      <section className="cs-hero">
        <p className="section-eyebrow">Case Study</p>
        <h1 className="cs-title">{title}</h1>
        <p className="cs-subtitle">{subtitle}</p>
        {meta && meta.length > 0 && (
          <ul className="cs-meta">
            {meta.map((item) => (
              <li key={item.label}>
                <span className="cs-meta-label">{item.label}</span>
                <span className="cs-meta-value">{item.value}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {image && (
        <div className="cs-image-wrap">
          <img src={image} alt={`${title} preview`} className="cs-image" />
        </div>
      )}

      <div className="cs-sections">
        {sections.map((section) => (
          <section className="cs-section" key={section.heading}>
            <h2 className="cs-section-heading">{section.heading}</h2>
            {section.body && <p className="cs-section-body">{section.body}</p>}
            {section.list && (
              <ul className="cs-section-list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.products && (
              <div className="cs-products">
                {section.products.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="cs-product-card"
                  >
                    <span className="cs-product-name">{p.name}</span>
                    <span className="cs-product-desc">{p.desc}</span>
                    <span className="cs-product-link">Live demo →</span>
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {gallery && gallery.length > 0 && (
        <div className="cs-gallery">
          {gallery.map((item) => (
            <figure className="cs-gallery-item" key={item.src}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <footer className="footer cs-footer">
        <p>Caroline Njogu — Nairobi, Kenya</p>
        <Link to="/#projects" className="inline-link">
          View more projects
        </Link>
      </footer>
    </div>
  )
}