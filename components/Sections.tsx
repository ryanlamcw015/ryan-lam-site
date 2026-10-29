"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { about, education, experience, leadership, now, profile, projects, skills, stats, type Lens } from "@/data/site";
import { Arrow, CountUp, Icon, Reveal, Spot, Tilt, Typer } from "./ui";

const ease = [0.2, 0.8, 0.2, 1] as const;

function Head({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal className="sec-head">
      <div className="kicker">{kicker}</div>
      <h2 className="serif">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </Reveal>
  );
}

export function Hero() {
  const words = ["Hi, I'm", "Ryan", "Lam."];
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <span className="pulse" /> Data Science & CS · UW–Madison · Class of 2027
          </motion.div>
          <h1 className="serif" aria-label="Hi, I'm Ryan Lam.">
            {words.map((w, i) => (
              <span className="word" key={w} aria-hidden>
                <motion.span
                  className={i === 1 ? "grad" : undefined}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div className="role-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <span>I'm a</span> <Typer words={profile.roles} />
          </motion.div>
          <motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
            {profile.tagline}
          </motion.p>
          <motion.div className="cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.7 }}>
            <a className="btn primary" href="#projects">See my work <Arrow /></a>
            <a className="btn" href="#contact">Get in touch</a>
          </motion.div>
          <motion.div className="socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            {profile.github && <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>}
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.9, duration: 0.9, ease }}>
          <Tilt>
            <div className="glass now">
              <h3><span className="pulse" /> Right now</h3>
              <ul>
                {now.map((n) => (
                  <li key={n.label}>
                    <small>{n.label}</small>
                    <span>{n.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
        </motion.div>
      </div>
      <div className="scroll-hint" aria-hidden />
    </section>
  );
}

export function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        <Reveal>
          <div className="glass stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b className="serif"><CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} /></b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function About() {
  const facts = [
    { icon: "cap" as const, t: "University of Wisconsin–Madison", s: "B.S. Data Science & CS · Minor in Consulting" },
    { icon: "spark" as const, t: "Engineering × business", s: "AI agents, data pipelines, finance & sales ops" },
    { icon: "mountain" as const, t: "UW USAC Climbing Team", s: "Competitive student athlete" },
    { icon: "pin" as const, t: "Hong Kong · Prague · Madison", s: "Worked across three continents' time zones" },
  ];
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <Head kicker="About" title="Engineer's hands, operator's head." />
          <div className="about-copy">
            {about.map((p, i) => <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>)}
          </div>
        </div>
        <div className="facts">
          {facts.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <Spot className="fact">
                <span className="ic"><Icon name={f.icon} /></span>
                <div><b>{f.t}</b><small>{f.s}</small></div>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const lenses: { id: Lens; label: string }[] = [
  { id: "all", label: "Full picture" },
  { id: "tech", label: "Engineering" },
  { id: "biz", label: "Business" },
];

export function Experience() {
  const [lens, setLens] = useState<Lens>("all");
  const roles = experience
    .map((r) => ({ ...r, shown: r.bullets.filter((b) => lens === "all" || b.tag === "both" || b.tag === lens) }))
    .filter((r) => r.shown.length > 0);

  return (
    <section id="experience">
      <div className="wrap">
        <Head kicker="Experience" title="Where the work happened." sub="Same roles, two lenses. Flip the switch to see the engineering story or the business story." />
        <Reveal>
          <div className="lens" role="tablist" aria-label="Resume lens">
            {lenses.map((l) => (
              <button key={l.id} role="tab" aria-selected={lens === l.id} className={lens === l.id ? "on" : ""} onClick={() => setLens(l.id)}>
                {lens === l.id && <motion.span layoutId="lens" className="slider" style={{ inset: 0 }} transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span style={{ position: "relative" }}>{l.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <LayoutGroup>
          <div className="timeline" style={{ marginTop: 36 }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {roles.map((r) => (
                <motion.div key={r.company} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5, ease }}>
                  <Spot className="role">
                    <div className="role-top">
                      <div>
                        <h3 className="serif">{r.company}</h3>
                        <div className="title">{r.titles[lens]}</div>
                      </div>
                      <div className="meta">{r.dates}<br />{r.place}</div>
                    </div>
                    <ul>
                      <AnimatePresence initial={false} mode="popLayout">
                        {r.shown.map((b) => (
                          <motion.li key={b.text} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                            {b.text}
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                  </Spot>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        <Reveal>
          <Spot className="role" style={{ marginTop: 22 } as never}>
            <div className="role-top">
              <div>
                <h3 className="serif">{leadership.org}</h3>
                <div className="title">{leadership.role}</div>
              </div>
              <div className="meta">{leadership.dates}<br />UW–Madison</div>
            </div>
            <ul>{leadership.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </Spot>
        </Reveal>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Head kicker="Projects & case studies" title="Things I've built." sub="A personal full-stack project, plus the systems I shipped during internships." />
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08} className={p.featured ? "feature-wrap" : ""}>
              <Spot className={`proj ${p.featured ? "feature" : ""}`} {...({ style: { height: "100%" } } as object)}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div className="kind">{p.kind}</div>
                  <h3 className="serif">{p.title}</h3>
                  <div className="ctx">{p.context}</div>
                  <p>{p.blurb}</p>
                  {p.points && <ul className="pts">{p.points.map((t) => <li key={t}>{t}</li>)}</ul>}
                </div>
                <div className={p.featured ? "proj-side" : undefined} style={p.featured ? undefined : { display: "contents" }}>
                  <div className="metrics">
                    {p.metrics.map((m) => <div key={m.l}><b className="serif">{m.v}</b><span>{m.l}</span></div>)}
                  </div>
                  <div className="chips">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                  {p.featured && profile.cruxRepo && (
                    <a className="link" href={profile.cruxRepo} target="_blank" rel="noreferrer">View project <Arrow d="up" /></a>
                  )}
                </div>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const [tab, setTab] = useState(skills[0].group);
  const current = skills.find((s) => s.group === tab)!;
  return (
    <section id="skills">
      <div className="wrap">
        <Head kicker="Skills" title="What I work with." sub="Technical depth plus the business tooling that gets it adopted." />
        <Reveal>
          <div className="skill-tabs" role="tablist">
            {skills.map((s) => (
              <button key={s.group} role="tab" aria-selected={tab === s.group} className={`tab ${tab === s.group ? "on" : ""}`} onClick={() => setTab(s.group)}>{s.group}</button>
            ))}
          </div>
          <div className="glass skills-panel">
            <AnimatePresence mode="wait">
              <motion.div key={tab} className="chips" initial="h" animate="s" exit="h" variants={{ s: { transition: { staggerChildren: 0.04 } }, h: { transition: { staggerChildren: 0.02 } } }}>
                {current.items.map((it) => (
                  <motion.span key={it} className="chip" variants={{ h: { opacity: 0, y: 10, scale: 0.95 }, s: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: 0.3 }}>
                    {it}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Head kicker="Education" title="Where I'm studying." />
        <div className="edu">
          <Reveal>
            <Spot className="card" {...({ style: { height: "100%" } } as object)}>
              <h3 className="serif">{education.school}</h3>
              <div className="deg">{education.degree} · {education.minor}</div>
              <div className="row">
                <div><b className="serif">{education.gpa}</b><span>GPA</span></div>
                <div><b className="serif">{education.grad.replace("Expected ", "")}</b><span>Expected graduation</span></div>
              </div>
              <div className="chips">{education.courses.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
            </Spot>
          </Reveal>
          <Reveal delay={0.1}>
            <Spot className="card lead" {...({ style: { height: "100%" } } as object)}>
              <h4 className="serif">Beyond the classroom</h4>
              <ul>
                <li>{education.activity}</li>
                <li>{education.cert}</li>
                <li>Bilingual outreach in English, Cantonese and Mandarin</li>
              </ul>
            </Spot>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <Spot className="contact">
            <div className="kicker">Contact</div>
            <h2 className="serif">Let's build something useful.</h2>
            <p>Looking for internships and roles where engineering meets business. Email is the fastest way to reach me.</p>
            <a className="mail serif" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}><Icon name="mail" /> Email me</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              {profile.github && <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>}
              <a className="btn" href="/resume/Ryan_Lam_Resume_Engineering.pdf" target="_blank"><Icon name="download" /> Resume · Engineering</a>
              <a className="btn" href="/resume/Ryan_Lam_Resume_Business.pdf" target="_blank"><Icon name="download" /> Resume · Business</a>
            </div>
          </Spot>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer><div className="wrap">© {new Date().getFullYear()} Ryan Lam · Built with Next.js</div></footer>;
}
