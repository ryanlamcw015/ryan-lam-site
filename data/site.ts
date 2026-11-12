// Single source of truth for the site. Edit here; components just render it.

export type Lens = "all" | "tech" | "biz";
type Tag = "tech" | "biz" | "both";

export const profile = {
  name: "Ryan Lam",
  email: "ryanlamcw015@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryancwlam",
  github: "https://github.com/ryanlamcw015",
  cruxRepo: "https://github.com/ryanlamcw015/crux",
  action: "Email Ryan",
};

export const hero = {
  h1: "Ryan Lam, software engineer",
  lead: "Data Science and Computer Science student at UW–Madison, class of 2027, with a 3.8 GPA. I build AI agents, data pipelines and apps for finance and sales teams.",
  facts: [
    { k: "School", v: "UW–Madison, class of 2027" },
    { k: "GPA", v: "3.8 out of 4.0" },
    { k: "Now", v: "Colleague AI, Prague" },
    { k: "Building", v: "Crux, a climbing app" },
  ],
};

export const about = {
  title: "Software for business teams.",
  sub: "Built across finance, sales and sports data.",
  paragraphs: [
    "I like writing the code, and I like knowing why the work matters to the finance lead, the sales team or the climber checking conditions on a Friday night.",
    "This year that meant enterprise AI agents on Azure and Copilot Studio, an agentic sales-discovery engine in Python, and a geospatial conditions score for rock climbers.",
    "Outside work I compete on UW's USAC climbing team and co-lead the Hong Kong Student Association.",
  ],
};

export type Role = {
  company: string;
  place: string;
  dates: string;
  titles: Record<Lens, string>;
  max: number;
  bullets: { tag: Tag; text: string }[];
};

export const experience: Role[] = [
  {
    company: "Colleague AI",
    place: "Prague, Czech Republic",
    dates: "Sep 2026 – present",
    titles: {
      all: "Software Engineering & Project Management Intern",
      tech: "Software Engineering Intern",
      biz: "Project Management Intern, AI & Finance Automation",
    },
    max: 4,
    bullets: [
      { tag: "tech", text: "Engineered 3+ finance AI agents in Copilot Studio with Power Automate, REST APIs and Dataverse, cutting task time ~40%." },
      { tag: "both", text: "Designed a reusable LLM architecture on Azure AI (RAG, API pipelines, RBAC) that cut new-agent build time ~35% and enforces segregation of duties." },
      { tag: "biz", text: "Defined business logic and ERP/general-ledger integrations for accounts payable, reconciliation, invoice approvals and variance analysis." },
      { tag: "tech", text: "Built a Python/JSON test harness running 30+ end-to-end cases per agent, catching 20+ defects pre-release through GitHub PRs." },
      { tag: "biz", text: "Authored risk controls and test cases for audit compliance; presented live demos to finance stakeholders." },
      { tag: "both", text: "Led 5+ live demos and deployment guides in Agile sprints (Jira), driving adoption across 3 teams." },
    ],
  },
  {
    company: "Equinix",
    place: "Hong Kong",
    dates: "Jun – Aug 2026",
    titles: {
      all: "Technical Sales & Market Strategy Intern",
      tech: "Technical Sales Intern",
      biz: "Sales Development Intern, Market Strategy & Analytics",
    },
    max: 4,
    bullets: [
      { tag: "both", text: "Built an Agentic Opportunity Discovery Engine in Python with 4 LLM agents, surfacing 150+ qualified pipeline opportunities." },
      { tag: "both", text: "Enriched Salesforce with 2,700+ IT leads across 1,000+ APAC firms via ZoomInfo and 6sense, de-duplicating with Pandas (95% match rate)." },
      { tag: "biz", text: "Led bilingual outreach to 400+ AI targets across Japan, South Korea, Mainland China, HK and Singapore, including Hanson Robotics' CEO." },
      { tag: "both", text: "Benchmarked 5 acquisition platforms and 6 verticals with SQL and Excel, cutting SDR lead-research time ~30%." },
    ],
  },
  {
    company: "The Hong Kong Jockey Club",
    place: "Hong Kong",
    dates: "Jul – Aug 2025",
    titles: {
      all: "Data Analytics & External Affairs Intern",
      tech: "Sports Data Analytics Intern",
      biz: "External Affairs Intern, Policy & Data Analytics",
    },
    max: 3,
    bullets: [
      { tag: "tech", text: "Built Python (Pandas, NumPy) and SQL pipelines processing 50K+ records for CARE and Sports Development analyses." },
      { tag: "biz", text: "Supported the 2025 Basketball Betting Bill with policy and regulatory research; prototyped NLP analysis of problem-gambling trends." },
      { tag: "both", text: "Presented insights to NBA representatives and district sports organisations, informing 3 program recommendations." },
      { tag: "tech", text: "Automated recurring reports with Matplotlib dashboards, cutting preparation time ~50%." },
    ],
  },
  {
    company: "FCC Analytics",
    place: "Hong Kong",
    dates: "May – Jun 2025",
    titles: {
      all: "Quality Assurance Intern, Fraud & AML",
      tech: "Quality Assurance Summer Intern",
      biz: "Quality Assurance Intern, Fraud & AML Compliance",
    },
    max: 3,
    bullets: [
      { tag: "tech", text: "Ran 200+ functional and regression tests on a pre-launch fraud platform, validating data with SQL." },
      { tag: "biz", text: "Gained hands-on exposure to RegTech fraud detection and Anti-Money Laundering (AML) compliance workflows." },
      { tag: "tech", text: "Documented 40+ defects, including critical backend bugs, with fixes shipped within 48 hours." },
      { tag: "tech", text: "Redesigned the platform UI in HTML/CSS/JavaScript, streamlining 5 core workflows." },
    ],
  },
  {
    company: "Money Smart HK",
    place: "Hong Kong",
    dates: "Jun – Jul 2024",
    titles: {
      all: "Business Analytics Summer Intern",
      tech: "Business Analytics Summer Intern",
      biz: "Business Analytics Summer Intern",
    },
    max: 3,
    bullets: [
      { tag: "biz", text: "Analysed digital loyalty programs in the Hong Kong market to find key trends and competitive margins." },
      { tag: "biz", text: "Built Excel financial models to support core operations and executive briefings." },
      { tag: "biz", text: "Turned market research into data insights that helped optimise digital marketing campaigns." },
    ],
  },
];

export const leadership = {
  org: "Hong Kong Student Association",
  role: "External Co-President",
  dates: "May 2024 – present",
  bullets: [
    "Managed 5 major events with cultural clubs and International Student Services; led formal external partnerships.",
    "Set organisational standards, ran executive meetings and delegated workstreams.",
    "Promoted Hong Kong culture to 500+ students, growing membership ~30%.",
  ],
};

export type Project = {
  slug: string;
  kind: string;
  title: string;
  context: string;
  blurb: string;
  metrics: { v: string; l: string }[];
  stack: string[];
  points?: string[];
};

export const projects: Project[] = [
  {
    slug: "crux",
    kind: "Full-stack, geospatial, data",
    title: "Crux",
    context: "Personal project, Sep 2026",
    blurb:
      "A social climbing and conditions app: see who is climbing at indoor gyms and outdoor crags, find partners, log sends and know when the rock is in condition.",
    metrics: [
      { v: "0–100", l: "Conditions Score" },
      { v: "24–48 h", l: "sandstone lockout rule" },
    ],
    points: [
      "Conditions Score pipeline built from Open-Meteo weather, sun and shade, and rock-type rules for every crag.",
      "FastAPI backend with PostGIS geospatial queries, JWT auth and OpenBeta route ingestion.",
      "React and TypeScript Leaflet map with a progression dashboard; pytest suite, Dockerised.",
      "Next: friends, an activity feed and a partner finder matching climbers by grade, location and availability.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL/PostGIS", "React", "TypeScript", "Docker", "Leaflet"],
  },
  {
    slug: "finance-agents",
    kind: "Enterprise AI",
    title: "Finance AI agents",
    context: "Colleague AI",
    blurb: "Agents for accounts payable, reconciliation and cash-flow reporting, on a reusable LLM architecture with role-based access and audit trails.",
    metrics: [
      { v: "~40%", l: "less task time" },
      { v: "~35%", l: "faster agent builds" },
    ],
    stack: ["Copilot Studio", "Azure AI", "RAG", "Power Automate", "Dataverse"],
  },
  {
    slug: "discovery-engine",
    kind: "Agentic AI, sales analytics",
    title: "Opportunity discovery engine",
    context: "Equinix",
    blurb: "Four cooperating LLM agents that automate pipeline generation and surface whitespace across APAC and AMER accounts.",
    metrics: [
      { v: "150+", l: "qualified opportunities" },
      { v: "95%", l: "dedupe match rate" },
    ],
    stack: ["Python", "LLM agents", "Pandas", "Salesforce", "ZoomInfo"],
  },
  {
    slug: "sports-pipeline",
    kind: "Data pipelines, reporting",
    title: "Sports data pipelines",
    context: "The Hong Kong Jockey Club",
    blurb: "Python and SQL pipelines over 50K+ records, with automated dashboards that fed program recommendations to NBA representatives.",
    metrics: [
      { v: "50K+", l: "records processed" },
      { v: "~50%", l: "faster reporting" },
    ],
    stack: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"],
  },
];

export const toolIcons = [
  { file: "python", name: "Python" },
  { file: "typescript", name: "TypeScript" },
  { file: "javascript", name: "JavaScript" },
  { file: "java", name: "Java" },
  { file: "react", name: "React" },
  { file: "fastapi", name: "FastAPI" },
  { file: "docker", name: "Docker" },
  { file: "azure", name: "Azure" },
  { file: "aws", name: "AWS" },
  { file: "google-cloud", name: "Google Cloud" },
  { file: "git", name: "Git" },
  { file: "github", name: "GitHub" },
  { file: "salesforce", name: "Salesforce" },
  { file: "jira", name: "Jira" },
];

export const skills = [
  { group: "Coding languages", items: "Python, TypeScript, JavaScript, Java, SQL, R, HTML/CSS" },
  { group: "Frameworks and data", items: "FastAPI, React, REST APIs, Pandas, NumPy, Matplotlib, OpenCV, pytest" },
  { group: "Cloud and tooling", items: "Azure AI, AWS, Google Cloud, Docker, PostgreSQL/PostGIS, Git/GitHub, Linux, Jira, Power Platform" },
  { group: "Business and analytics", items: "Financial modeling (Excel), variance analysis, business analytics, market research, Salesforce, ZoomInfo, 6sense, Sales Navigator" },
  { group: "Spoken languages", items: "English, Cantonese and Mandarin, all native" },
];

export const education = {
  school: "University of Wisconsin–Madison",
  degree: "B.S. Data Science & Computer Science, minor in Consulting",
  gpa: "3.8 / 4.0",
  grad: "May 2027",
  courses: [
    "Algorithms", "Data Structures", "Databases", "Operating Systems", "Object-Oriented Programming",
    "Software Engineering (Git)", "Intro to AI", "Data Visualization & Modeling",
    "Management Consulting", "Project Management",
  ],
  extras: ["Student athlete on the UW Competitive USAC Climbing Team", "Google AI Professional Certificate"],
};

export const photos = {
  hero: { base: "photo-f96656755", alt: "Bascom Hall on the UW–Madison campus at night, lit under a clear sky" },
  about: { src: "photo-f150461869-960.jpg", alt: "The columns and stone front of Bascom Hall at UW–Madison" },
  education: { src: "photo-f84641022-960.jpg", alt: "Sunset over Lake Mendota with people on the pier near the UW–Madison campus" },
  hill: { src: "photo-f31890655-500.jpg", alt: "Bascom Hill and the campus under fresh snow" },
};
