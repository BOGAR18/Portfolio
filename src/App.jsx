import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {
  profile,
  experience,
  skills,
  projects,
  education,
  organization,
  contact,
  stats,
} from './data/portfolio'

const navItems = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['education', 'Education'],
]

function Tags({ list }) {
  return (
    <ul className="tags">
      {list.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Heading({ no, title }) {
  return (
    <div className="section-head reveal">
      <span>{no}</span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('')
  const [showTop, setShowTop] = useState(false)

  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            reveal.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((el) => spy.observe(el))

    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      reveal.disconnect()
      spy.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const contactLinks = [
    // ['Phone', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`],
    ['LinkedIn', contact.linkedin, contact.linkedin],
    ['GitHub', contact.github, contact.github],
  ].filter(([, value]) => value)

  return (
    <>
     <Navbar items={navItems} active={active} brand={initials} photo={profile.photo} name={profile.name} />
      <main id="top">
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div>
              <p className="status reveal">
                <i aria-hidden="true" /> Open to new opportunities
              </p>
              <h1 className="reveal">{profile.name}</h1>
              <p className="role reveal">{profile.role}</p>
              <p className="lead reveal">{profile.summary}</p>
              <div className="cta reveal">
                <a className="btn primary" href="#experience">View Experience</a>
                <a className="btn" href="#contact">Contact Me</a>
              </div>
            </div>

            <aside className="profile-card reveal" aria-label="Profile overview">
              <div className="avatar">
                {profile.photo ? (
                  <img src={profile.photo} alt={`Photo of ${profile.name}`} />
                ) : (
                  <span>{initials}</span>
                )}
              </div>
              <p className="loc">{profile.location}</p>
              <Tags list={profile.focus.split(' · ')} />
              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <Heading no="01" title="Highlights" />
            <ul className="highlights">
              {profile.highlights.map((h, i) => (
                <li key={h} className="reveal">
                  <b>0{i + 1}</b>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <Heading no="02" title="Career Journey" />
            <div className="timeline">
              {experience.map((job) => (
                <article key={job.id} className="job reveal">
                  <p className="meta">{job.period} · {job.location}</p>
                  <h3>{job.position}</h3>
                  <p className="company">{job.company}</p>
                  <p>{job.description}</p>
                  <details>
                    <summary>Responsibilities &amp; achievements</summary>
                    <h4>Responsibilities</h4>
                    <ul>{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
                    <h4>Achievements</h4>
                    <ul>{job.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
                  </details>
                  <Tags list={job.technologies} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <Heading no="03" title="Skills" />
            <div className="grid">
              {skills.map((s) => (
                <div key={s.group} className="card reveal">
                  <h3>{s.group}</h3>
                  <Tags list={s.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Heading no="04" title="Projects" />
            <div className="grid">
              {projects.map((p) => (
                <article key={p.title} className="card reveal">
                  <p className="meta">{p.year} · {p.role}</p>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <Tags list={p.technologies} />
                  {p.link && (
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">
                      View project →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <Heading no="05" title="Education & Organization" />
            <div className="grid">
              {education.map((e) => (
                <div key={e.school} className="card reveal">
                  <p className="meta">{e.period}</p>
                  <h3>{e.degree}</h3>
                  <p className="company">{e.school}</p>
                  <p>{e.note}</p>
                </div>
              ))}
              {organization.map((o) => (
                <div key={o.name} className="card reveal">
                  <p className="meta">{o.period}</p>
                  <h3>{o.role}</h3>
                  <p className="company">{o.name}</p>
                  <p>{o.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-box reveal">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s talk.</h2>
              <p className="lead">Open to discussing career opportunities and potential collaborations.</p>
              <a className="btn primary big" href={`mailto:${contact.email}`}>{contact.email}</a>
              <ul className="contact-links">
                {contactLinks.map(([label, value, href]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      <span>{label}</span>
                      {value.replace('https://', '').replace('www.', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>

      {showTop && (
        <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
          ↑
        </button>
      )}
    </>
  )
}

export default App