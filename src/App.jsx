const experience = [
  {
    role: 'Senior AI Developer',
    company: 'Product & Platform teams',
    years: '2021 — Present',
    detail:
      'Design and ship LLM-powered features, retrieval pipelines, and evaluation loops used in production products.',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Applied ML',
    years: '2019 — 2021',
    detail:
      'Built model training workflows, monitoring, and inference services for search and recommendation use cases.',
  },
  {
    role: 'Software Engineer',
    company: 'Full-stack systems',
    years: '2018 — 2019',
    detail:
      'Delivered APIs and data services that later became the foundation for AI product work.',
  },
]

const skills = [
  'Python',
  'React',
  'LLM apps',
  'RAG systems',
  'MLOps',
  'Node.js',
  'Cloud deploy',
  'System design',
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=80"
            alt=""
          />
          <div className="hero-scrim" />
        </div>

        <div className="hero-content">
          <p className="brand">Gautam</p>
          <h1>AI Developer</h1>
          <p className="lede">
            Seven years of experience building intelligent products from idea to
            production.
          </p>
          <div className="cta-row">
            <a className="cta primary" href="mailto:gautam@example.com">
              Get in touch
            </a>
            <a className="cta secondary" href="#experience">
              View experience
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <h2>About</h2>
          <p>
            Gautam is an AI developer focused on practical machine learning —
            systems that are reliable, measurable, and useful for real users. He
            works across model integration, backend services, and product-facing
            interfaces.
          </p>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>
          <ul className="timeline">
            {experience.map((item) => (
              <li key={item.role}>
                <div className="meta">
                  <span className="years">{item.years}</span>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <p className="detail">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section contact" id="contact">
          <h2>Contact</h2>
          <p>
            Open to AI engineering roles, consulting, and collaboration on LLM
            product work.
          </p>
          <a className="cta primary" href="mailto:gautam@example.com">
            gautam@example.com
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gautam · AI Developer</p>
      </footer>
    </div>
  )
}
