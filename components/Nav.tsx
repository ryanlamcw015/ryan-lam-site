"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "./ui";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Ambient() {
  return (
    <div className="ambient" aria-hidden>
      <div className="blob a" />
      <div className="blob b" />
      <div className="blob c" />
      <div className="grain" />
    </div>
  );
}

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <motion.header className="nav" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}>
        <nav className="nav-inner" aria-label="Primary">
          <a href="#top" className="logo">Ryan<span>.</span>Lam</a>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={`${active === l.id ? "on" : ""} ${l.id === "contact" ? "keep" : ""}`}>
                {active === l.id && <motion.span layoutId="pill" className="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                {l.label}
              </a>
            ))}
          </div>
          <button className="icon-btn" onClick={toggle} aria-label="Toggle colour theme">
            <Icon name={dark ? "sun" : "moon"} />
          </button>
        </nav>
      </motion.header>
    </>
  );
}
