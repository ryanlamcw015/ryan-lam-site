"use client";

import { useEffect } from "react";

const scripts = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

function load() {
  for (const src of scripts) {
    if (document.querySelector(`script[data-kit="${src}"]`)) continue;
    const s = document.createElement("script");
    s.type = "module";
    s.src = src;
    s.dataset.kit = src;
    document.body.appendChild(s);
  }
}

/**
 * The kit's scripts edit the markup (nav sheet, tabs, counters). They load once React has finished
 * hydrating (after the window load event plus a beat), so they never change DOM React still has to match.
 */
export default function Kit() {
  useEffect(() => {
    let t = 0;
    const start = () => { t = window.setTimeout(load, 500); };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => { window.clearTimeout(t); window.removeEventListener("load", start); };
  }, []);
  return null;
}
