import type { Metadata } from "next";
import "./globals.css";
import Kit from "@/components/Kit";
import Fx from "@/components/Fx";

const title = "Ryan Lam: tech and business student at UW–Madison";
const description =
  "Data Science and Computer Science student at UW–Madison working across AI, data, product, consulting, sales and finance. Open to internships and roles.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", images: ["/share.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  other: { "site-kind": "other", "page-type": "service", "theme-color": "#07131c" },
};

const root = `:root{--p-bg:#07131c;--p-surface:#0f2431;--p-ink:#eaf6f7;--p-muted:#9db7bf;--p-accent:#38e0d1;--p-accent-ink:#032a2d;--p-action:#38e0d1;--p-action-ink:#032a2d;--p-inv-bg:#07131c;--p-inv-surface:#0f2431;--p-inv-ink:#eaf6f7;--p-inv-muted:#9db7bf;--p-inv-accent:#38e0d1;--p-inv-accent-ink:#032a2d;--p-inv-action:#38e0d1;--p-inv-action-ink:#032a2d;--font-display:"Instrument Sans",system-ui,sans-serif;--font-text:"Instrument Sans",system-ui,sans-serif;--display-weight:400;--display-tracking:-0.028em;--display-tracking-xl:-0.036em;--display-stretch:96%;--ly-scale:1.04}`;

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
      </head>
      <body>
        {children}
        <Fx />
        <Kit />
      </body>
    </html>
  );
}
