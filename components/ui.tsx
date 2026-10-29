"use client";

import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Reveal({ children, delay = 0, y = 28, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Glass card whose glow follows the cursor. */
export function Spot({ children, className = "", ...rest }: { children: ReactNode; className?: string } & Record<string, unknown>) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`glass spot ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </div>
  );
}

/** Subtle 3D tilt toward the cursor. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 140, damping: 16 });
  const sy = useSpring(ry, { stiffness: 140, damping: 16 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div
      className={className}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
  useEffect(() => {
    if (inView) {
      const c = animate(mv, value, { duration: 1.8, ease: "easeOut" });
      return () => c.stop();
    }
  }, [inView, mv, value]);
  return (
    <span ref={ref}>
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
}

/** Types out each phrase, pauses, deletes, moves on. */
export function Typer({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(w.slice(0, txt.length + 1));
          if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setTxt(w.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
        }
      },
      del ? 28 : txt.length === 0 ? 350 : 62,
    );
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return (
    <>
      <b>{txt}</b>
      <span className="caret" aria-hidden />
    </>
  );
}

export const Arrow = ({ d = "right" }: { d?: "right" | "up" }) => (
  <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d === "right" ? <path d="M3 8h10M9 4l4 4-4 4" /> : <path d="M5 11l6-6M5.5 5H11v5.5" />}
  </svg>
);

export const Icon = ({ name }: { name: "mail" | "linkedin" | "github" | "download" | "sun" | "moon" | "cap" | "pin" | "mountain" | "spark" }) => {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>;
    case "linkedin": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.5 1-2 2-2s2 .8 2 2.3V16" /></svg>;
    case "github": return <svg {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
    case "download": return <svg {...p}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>;
    case "sun": return <svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" /></svg>;
    case "moon": return <svg {...p}><path d="M20 14.500A8 8 0 0 1 9.500 4 8 8 0 1 0 20 14.500z" /></svg>;
    case "cap": return <svg {...p}><path d="M2 9l10-5 10 5-10 5L2 9zM6 11.500V16c0 1.500 3 3 6 3s6-1.500 6-3v-4.500" /></svg>;
    case "pin": return <svg {...p}><path d="M12 21s7-6.100 7-11a7 7 0 0 0-14 0c0 4.900 7 11 7 11z" /><circle cx="12" cy="10" r="2.500" /></svg>;
    case "mountain": return <svg {...p}><path d="M3 19l6-11 3.500 6 2-3L21 19H3z" /></svg>;
    case "spark": return <svg {...p}><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" /></svg>;
  }
};
