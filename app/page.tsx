import type { CSSProperties } from "react";
import Experience from "@/components/Experience";
import { about, education, experience, hero, photos, profile, projects, skills, toolIcons } from "@/data/site";

const mailto = `mailto:${profile.email}`;
const img = (f: string) => `/assets/img/${f}`;

const Arrow = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const Mark = () => <span className="mark" data-mark="ring" aria-hidden="true" />;

export default function Home() {
  const [crux, ...cases] = projects;
  return (
    <>
      <header className="nav">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Skip to content</a>
          <a className="nav__logo" href="#top"><Mark />Ryan Lam</a>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item"><a className="nav__link" href="#about">About</a></div>
            <div className="nav__item"><a className="nav__link" href="#experience">Experience</a></div>
            <div className="nav__item">
              <a className="nav__link" href="#projects">
                Projects{" "}
                <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <div className="nav__menu">
                <div className="wrap grid">
                  <div className="menu-col span-3">
                    <p className="t-label">Personal</p>
                    <a href="#projects">Crux<span>Climbing and conditions app</span></a>
                  </div>
                  <div className="menu-col span-4">
                    <p className="t-label">At work</p>
                    <a href="#projects">Finance AI agents<span>Colleague AI</span></a>
                    <a href="#projects">Opportunity discovery engine<span>Equinix</span></a>
                    <a href="#projects">Sports data pipelines<span>Hong Kong Jockey Club</span></a>
                  </div>
                  <a className="menu-card span-3 start-10" href="#education">
                    <span className="t-card">Education</span>
                    <span className="t-small muted">UW–Madison, class of 2027</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav__item"><a className="nav__link" href="#skills">Skills</a></div>
            <div className="nav__item"><a className="nav__link" href="#education">Education</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href={mailto}>{profile.action}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--photo" data-enter data-box="none" data-tone="dark" data-calm="top" aria-labelledby="hero-h">
          <img
            className="hero__bg"
            src={img(`${photos.hero.base}.jpg`)}
            srcSet={`${img(`${photos.hero.base}-500.jpg`)} 500w, ${img(`${photos.hero.base}-960.jpg`)} 960w, ${img(`${photos.hero.base}-1280.jpg`)} 1280w, ${img(`${photos.hero.base}.jpg`)} 1920w`}
            sizes="100vw"
            width="1920"
            height="1272"
            alt={photos.hero.alt}
            fetchPriority="high"
            decoding="async"
            data-source="stand-in"
            data-subject="campus"
            style={{ "--ly-pos": "50% 0%", "--ly-pos-phone": "50% 40%" } as CSSProperties}
          />
          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text">
                <h1 id="hero-h">{hero.h1}</h1>
                <p className="hero__lead">{hero.lead}</p>
                <div className="btn-row">
                  <a className="btn btn--primary" href={mailto}>{profile.action}<Arrow /></a>
                  <a className="btn btn--secondary" href="#projects">See my projects</a>
                </div>
                <div className="pills hero-links">
                  <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="pill" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="pill" href="/resume/Ryan_Lam_Resume_Engineering.pdf" target="_blank" rel="noreferrer">Engineering resume</a>
                    <a className="pill" href="/resume/Ryan_Lam_Resume_Business.pdf" target="_blank" rel="noreferrer">Business resume</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="about-h">{about.title} <span className="muted">{about.sub}</span></h2>
            </div>
            <div className="grid grid--top">
              <div className="span-6 stack-5">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "t-lead" : undefined}>{p}</p>
                ))}
              </div>
              <div className="card about-card span-6 start-7">
                <ul className="rows">
                  <li><span className="rows__name">Study</span><span className="rows__value">Data Science & CS, minor Consulting</span></li>
                  <li><span className="rows__name">Languages</span><span className="rows__value">English, Cantonese, Mandarin</span></li>
                  <li><span className="rows__name">Outside work</span><span className="rows__value">UW USAC Climbing Team</span></li>
                </ul>
                <h3 className="about-card__h">Find me and my resumes</h3>
                <div className="pills">
                    <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="pill" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="pill" href="/resume/Ryan_Lam_Resume_Engineering.pdf" target="_blank" rel="noreferrer">Engineering resume</a>
                    <a className="pill" href="/resume/Ryan_Lam_Resume_Business.pdf" target="_blank" rel="noreferrer">Business resume</a>
                    <a className="pill" href={mailto}>Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience roles={experience} />

        <section className="section g2" id="projects" aria-labelledby="projects-h">
          <div className="wrap">
            <div className="group">
              <div className="section-head">
                <h2 id="projects-h">Projects and case studies.</h2>
                <p>One full-stack project of my own, and three systems I shipped during internships.</p>
              </div>
              <article className="card crux">
                <div className="crux__main">
                  <p className="t-label muted">{crux.kind}</p>
                  <h3>{crux.title}</h3>
                  <p className="t-small muted">{crux.context}</p>
                  <p>{crux.blurb}</p>
                  <ul className="pts">{crux.points?.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div className="crux__side">
                  <div className="metrics">
                    {crux.metrics.map((m) => <div key={m.l}><b>{m.v}</b><span>{m.l}</span></div>)}
                  </div>
                  <div className="pills">{crux.stack.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
                  <a className="link" href={profile.cruxRepo} target="_blank" rel="noreferrer">See Crux on GitHub</a>
                </div>
              </article>
            </div>
            <div className="grid">
              {cases.map((p) => (
                <article className="card case span-4" key={p.slug}>
                  <p className="t-label muted">{p.kind}</p>
                  <h3>{p.title}</h3>
                  <p className="t-small muted">{p.context}</p>
                  <p>{p.blurb}</p>
                  <div className="metrics">
                    {p.metrics.map((m) => <div key={m.l}><b>{m.v}</b><span>{m.l}</span></div>)}
                  </div>
                  <div className="pills">{p.stack.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="skills-h">Tools I work with. <span className="muted">Technical depth, plus the business software that gets it adopted.</span></h2>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-7">
                {skills.map((s) => (
                  <li key={s.group}><span className="rows__name">{s.group}</span><p>{s.items}</p></li>
                ))}
              </ul>
              <div className="tools span-5">
                {toolIcons.map((t) => (
                  <span className="ic-tile ic-tile--72" key={t.file}>
                    <img className="ic ic-40" src={`/assets/icons/${t.file}.svg`} alt={t.name} width="40" height="40" loading="lazy" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="education-h">{education.school}. <span className="muted">{education.degree}.</span></h2>
            </div>
            <div className="grid grid--top fill">
              <div className="span-6 stack-5">
                <ul className="rows">
                  <li><span className="rows__name">GPA</span><span className="rows__value">{education.gpa}</span></li>
                  <li><span className="rows__name">Graduation</span><span className="rows__value">{education.grad}</span></li>
                  {education.extras.map((e) => (
                    <li key={e}><span className="rows__name">{e}</span></li>
                  ))}
                </ul>
              </div>
              <div className="card span-6 start-7">
                <h3>Relevant coursework</h3>
                <div className="pills">{education.courses.map((c) => <span className="pill" key={c}>{c}</span>)}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Open to internships and new roles.</h2>
              <p>Email is the fastest way to reach me: {profile.email}</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href={mailto}>{profile.action}<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top"><Mark />Ryan Lam</a>
                <p className="footer__lede">Data Science and Computer Science student at UW–Madison, building software for business teams.</p>
              </div>
              <div className="span-2 start-7 footer__col">
                <h3>Pages</h3>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#education">Education</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Elsewhere</h3>
                <ul>
                  <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
                  <li><a href={profile.cruxRepo} target="_blank" rel="noreferrer">Crux</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Resume</h3>
                <ul>
                  <li><a href="/resume/Ryan_Lam_Resume_Engineering.pdf" target="_blank" rel="noreferrer">Engineering</a></li>
                  <li><a href="/resume/Ryan_Lam_Resume_Business.pdf" target="_blank" rel="noreferrer">Business</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Ryan Lam</span>
              <details className="credits">
                <summary>Photographs via Wikimedia Commons</summary>
                <p>
                  Night view of Bascom Hall by Richard Hurd (CC BY 2.0). Product names and logos are trademarks of their owners.
                </p>
              </details>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
