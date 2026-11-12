import type { Metadata } from "next";
import "./globals.css";
import Kit from "@/components/Kit";

const title = "Ryan Lam: software engineer and business analyst at UW–Madison";
const description =
  "Data Science and Computer Science student at UW–Madison. I build AI agents, data pipelines and apps for finance and sales teams. Open to internships and roles.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", images: ["/share.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  other: { "site-kind": "other", "page-type": "service", "theme-color": "#f7f9fa" },
};

const root = `:root{--p-bg:#f7f9fa;--p-surface:#ecf0f2;--p-ink:#1f3038;--p-muted:#5d6b72;--p-accent:#0d7480;--p-accent-ink:#ffffff;--p-action:#0d7480;--p-action-ink:#ffffff;--p-inv-bg:#1f3038;--p-inv-surface:#2c3c44;--p-inv-ink:#f7f9fa;--p-inv-muted:#9ea7ab;--p-inv-accent:#f7f9fa;--p-inv-accent-ink:#1f3038;--p-inv-action:#f7f9fa;--p-inv-action-ink:#1f3038;--font-display:"Instrument Sans",system-ui,sans-serif;--font-text:"Instrument Sans",system-ui,sans-serif;--display-weight:400;--display-tracking:-0.028em;--display-tracking-xl:-0.036em;--display-stretch:96%;--ly-scale:1.04}`;

const enter = `document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wdth,wght@75..100,400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: root }} />
        <script dangerouslySetInnerHTML={{ __html: enter }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/picture-develops/moment.js" />
      </head>
      <body>
        {children}
        <Kit />
      </body>
    </html>
  );
}
