"use client";

import { useEffect, useRef } from "react";

type Bubble = { x: number; y: number; z: number; r: number; vy: number; ph: number; hue: number };

/** Glassy bubbles floating in 3 depth layers over the page, with mouse parallax. */
function Bubbles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5, scrollY = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let bubbles: Bubble[] = [];

    const resize = () => {
      w = innerWidth; h = innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      c.style.width = w + "px"; c.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 640 ? 16 : 34;
      bubbles = Array.from({ length: n }, () => {
        const z = 0.25 + Math.random() * 0.75;
        return { x: Math.random() * w, y: Math.random() * h, z, r: (14 + Math.random() * 56) * (0.5 + z), vy: (0.12 + Math.random() * 0.35) * z, ph: Math.random() * 6.28, hue: [172, 190, 205, 160][Math.floor(Math.random() * 4)] };
      });
    };
    const onMove = (e: PointerEvent) => { tx = e.clientX / w; ty = e.clientY / h; };
    const onScroll = () => { scrollY = window.scrollY; };

    const draw = (t: number) => {
      mx += (tx - mx) * 0.06; my += (ty - my) * 0.06;
      ctx.clearRect(0, 0, w, h);
      for (const b of bubbles) {
        if (!reduced) { b.y -= b.vy; b.ph += 0.012; }
        if (b.y < -b.r * 2) { b.y = h + b.r * 2; b.x = Math.random() * w; }
        const px = b.x + Math.sin(b.ph + t / 2200) * 22 * b.z + (mx - 0.5) * -90 * b.z;
        const py = b.y + (my - 0.5) * -60 * b.z - scrollY * 0.08 * b.z;
        const yy = ((py % (h + b.r * 4)) + (h + b.r * 4)) % (h + b.r * 4) - b.r * 2;
        const r = b.r;
        const g = ctx.createRadialGradient(px - r * 0.35, yy - r * 0.35, r * 0.1, px, yy, r);
        g.addColorStop(0, `hsla(${b.hue},90%,85%,${0.20 * b.z + 0.05})`);
        g.addColorStop(0.7, `hsla(${b.hue},80%,60%,${0.05 * b.z})`);
        g.addColorStop(1, `hsla(${b.hue},90%,75%,${0.22 * b.z})`);
        ctx.beginPath(); ctx.arc(px, yy, r, 0, 6.2832); ctx.fillStyle = g; ctx.fill();
        ctx.lineWidth = 1; ctx.strokeStyle = `hsla(${b.hue},95%,88%,${0.28 * b.z})`; ctx.stroke();
        ctx.beginPath(); ctx.ellipse(px - r * 0.32, yy - r * 0.38, r * 0.22, r * 0.11, -0.6, 0, 6.2832);
        ctx.fillStyle = `rgba(255,255,255,${0.5 * b.z})`; ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    resize(); draw(0);
    addEventListener("resize", resize); addEventListener("pointermove", onMove); addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", onMove); removeEventListener("scroll", onScroll); };
  }, []);
  return <canvas ref={ref} className="fx-bubbles" aria-hidden="true" />;
}

/** 3D tilt on cards and frames, and a scroll reveal, both after hydration. */
export default function Fx() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const sel = ".card, .develop, .frame--photo, .menu-card .panel, .ic-tile";
    const tilt = (e: PointerEvent) => {
      const el = (e.target as Element).closest(sel) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * 9).toFixed(2)}deg) rotateY(${(px * 11).toFixed(2)}deg) translateZ(14px)`;
      el.style.setProperty("--gx", `${(px + 0.5) * 100}%`); el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
    };
    const reset = (e: PointerEvent) => {
      const el = (e.target as Element).closest?.(sel) as HTMLElement | null;
      if (el && !el.contains(e.relatedTarget as Node)) el.style.transform = "";
    };
    if (fine && !reduced) { document.addEventListener("pointermove", tilt); document.addEventListener("pointerout", reset); }

    let io: IntersectionObserver | undefined;
    const mark = () => {
      const els = document.querySelectorAll<HTMLElement>("main .section-head, main .card, main .rows > li, main .develop, main .frame--photo, main .tools, main .pills");
      io ??= new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("fx-in"); io!.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((el) => { if (!el.classList.contains("fx-in") && !el.classList.contains("fx-reveal")) { el.classList.add("fx-reveal"); io!.observe(el); } });
    };
    if (!reduced) { const t = setTimeout(mark, 700); const mo = new MutationObserver(() => mark()); mo.observe(document.querySelector("main")!, { childList: true, subtree: true }); return () => { clearTimeout(t); mo.disconnect(); io?.disconnect(); document.removeEventListener("pointermove", tilt); document.removeEventListener("pointerout", reset); }; }
    return () => { document.removeEventListener("pointermove", tilt); document.removeEventListener("pointerout", reset); };
  }, []);
  return (
    <>
      <div className="fx-mesh" aria-hidden="true"><i /><i /><i /></div>
      <Bubbles />
    </>
  );
}
