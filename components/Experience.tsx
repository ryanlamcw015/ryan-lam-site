"use client";

import { useState } from "react";
import { leadership, type Lens, type Role } from "@/data/site";

const lenses: { id: Lens; label: string }[] = [
  { id: "all", label: "Full picture" },
  { id: "tech", label: "Engineering" },
  { id: "biz", label: "Business" },
];

export default function Experience({ roles }: { roles: Role[] }) {
  const [lens, setLens] = useState<Lens>("all");

  const cards = roles
    .map((r) => ({
      key: r.company,
      name: r.company,
      title: r.titles[lens],
      meta: `${r.dates}, ${r.place}`,
      items: r.bullets.filter((b) => lens === "all" || b.tag === "both" || b.tag === lens).slice(0, r.max).map((b) => b.text),
    }))
    .filter((c) => c.items.length > 0);
  cards.push({
    key: "hksa",
    name: leadership.org,
    title: leadership.role,
    meta: `${leadership.dates}, UW–Madison`,
    items: leadership.bullets,
  });

  const card = (c: (typeof cards)[number]) => (
    <article className="card role span-6" key={c.key}>
      <h3>{c.name}</h3>
      <p className="role__title">{c.title}</p>
      <p className="t-small muted">{c.meta}</p>
      <ul className="pts">
        {c.items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );

  return (
    <section className="section g2" id="experience" aria-labelledby="experience-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="experience-h">Internships and leadership.</h2>
            <p>Five internships and one student club. Switch the view to read the engineering or the business version of each role.</p>
          </div>
          <div className="tabs" role="tablist" aria-label="Experience view">
            {lenses.map((l) => (
              <button key={l.id} type="button" className="tab" role="tab" aria-selected={lens === l.id} onClick={() => setLens(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="grid role-grid">{cards.slice(0, 2).map(card)}</div>
        </div>
        <div className="grid role-grid">{cards.slice(2).map(card)}</div>
      </div>
    </section>
  );
}
