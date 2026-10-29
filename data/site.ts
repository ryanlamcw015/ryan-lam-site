// Single source of truth for the site. Edit here; components just render it.

export type Lens = "all" | "tech" | "biz";
type Tag = "tech" | "biz" | "both";

export const profile = {
  name: "Ryan Lam",
  email: "ryanlamcw015@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryancwlam",
  github: "", // add your GitHub URL, e.g. "https://github.com/yourname" (hidden while empty)
  cruxRepo: "", // add the Crux repo / live URL when ready
  roles: [
    "Software engineer",
    "AI & automation builder",
    "Data-driven problem solver",
    "Business-minded technologist",
  ],
  tagline:
    "I'm a Data Science & Computer Science student at UW–Madison who builds software people in business actually use, from finance AI agents to data pipelines to full-stack apps.",
};

export const now = [
  { label: "Building", value: "AI agents for finance teams at Colleague AI" },
  { label: "Shipping", value: "Crux, a social climbing & conditions app" },
  { label: "Studying", value: "B.S. Data Science & CS, minor in Consulting" },
];

export const stats = [
  { value: 3.8, decimals: 1, suffix: "/4.0", label: "GPA at UW–Madison" },
  { value: 2700, suffix: "+", label: "IT leads enriched in Salesforce" },
  { value: 50, suffix: "K+", label: "records analysed in Python & SQL" },
  { value: 3, suffix: "", label: "languages, all native" },
];

export const about = [
  "I sit at the intersection of engineering and business. I like writing the code, and I like understanding why the work matters to the finance lead, the sales team, or the climber checking conditions on a Friday night.",
  "This year that's meant building enterprise AI agents on Azure and Copilot Studio, prototyping an agentic sales-discovery engine in Python, and designing a geospatial conditions-scoring model for rock climbers.",
  "Outside work I compete on UW's USAC climbing team and co-lead the Hong Kong Student Association, where I plan events and partnerships for 500+ students.",
];

export type Role = {
  company: string;
  place: string;
  dates: string;
  titles: Record<Lens, string>;
  bullets: { tag: Tag; text: string }[];
};

export const experience: Role[] = [
  {
    company: "Colleague AI",
    place: "Prague, Czech Republic",
    dates: "Sep 2026 – Present",
    titles: {
      all: "Software Engineering & Project Management Intern",
      tech: "Software Engineering Intern",
      biz: "Project Management Intern · AI & Finance Automation",
    },
    bullets: [
      { tag: "tech", text: "Engineered 3+ finance AI agents in Copilot Studio with Power Automate, REST APIs and Dataverse, cutting task time ~40%." },
      { tag: "both", text: "Designed a reusable LLM architecture on Azure AI (RAG, API pipelines, RBAC) that cut new-agent build time ~35% and enforces segregation of duties and data-access controls." },
      { tag: "biz", text: "Defined business logic and ERP/general-ledger integrations for accounts payable, reconciliation, cash-flow reporting, invoice approvals and variance analysis, with audit trails." },
      { tag: "tech", text: "Built a Python/JSON test harness running 30+ end-to-end cases per agent, catching 20+ defects pre-release through GitHub PRs." },
      { tag: "biz", text: "Authored risk controls and test cases for audit compliance and presented live demos to finance stakeholders." },
      { tag: "both", text: "Led 5+ live demos and deployment guides in Agile sprints (Jira), driving Azure AI and Copilot Studio adoption across 3 teams." },
    ],
  },
  {
    company: "Equinix",
    place: "Hong Kong",
    dates: "Jun – Aug 2026",
    titles: {
      all: "Technical Sales & Market Strategy Intern",
      tech: "Technical Sales Intern",
      biz: "Sales Development Intern · Market Strategy & Analytics",
    },
    bullets: [
      { tag: "both", text: "Built an Agentic Opportunity Discovery Engine in Python with 4 LLM agents, surfacing 150+ qualified pipeline opportunities and uncovering whitespace." },
      { tag: "both", text: "Enriched Salesforce with 2,700+ IT leads across 1,000+ APAC firms via ZoomInfo and 6sense, de-duplicating with Pandas (95% match rate)." },
      { tag: "biz", text: "Led bilingual outreach to 400+ AI targets across Japan, South Korea, Mainland China, HK & Singapore, including a meeting with Hanson Robotics' CEO." },
      { tag: "both", text: "Benchmarked 5 acquisition platforms and 6 verticals with SQL and Excel to size APAC–AMER growth, cutting SDR lead-research time ~30%." },
    ],
  },
  {
    company: "The Hong Kong Jockey Club",
    place: "Hong Kong",
    dates: "Jul – Aug 2025",
    titles: {
      all: "Data Analytics & External Affairs Intern",
      tech: "Sports Data Analytics Intern",
      biz: "External Affairs Intern · Policy & Data Analytics",
    },
    bullets: [
      { tag: "tech", text: "Built Python (Pandas, NumPy) and SQL pipelines processing 50K+ records for year-end CARE and Sports Development analyses." },
      { tag: "both", text: "Presented insights to NBA representatives and district sports organisations, informing 3 program recommendations." },
      { tag: "tech", text: "Automated recurring reports with Matplotlib dashboards, cutting preparation time ~50%." },
      { tag: "biz", text: "Supported the 2025 Basketball Betting Bill through policy and regulatory research and responsible-gambling strategy; prototyped NLP analysis of problem-gambling trends." },
    ],
  },
  {
    company: "FCC Analytics",
    place: "Hong Kong",
    dates: "May – Jun 2025",
    titles: {
      all: "Quality Assurance Intern · Fraud & AML",
      tech: "Quality Assurance Summer Intern",
      biz: "Quality Assurance Intern · Fraud & AML Compliance",
    },
    bullets: [
      { tag: "tech", text: "Executed 200+ functional and regression tests on a pre-launch fraud platform, validating data with SQL." },
      { tag: "tech", text: "Isolated and documented 40+ defects, including critical backend bugs, with fixes shipped within 48 hours." },
      { tag: "tech", text: "Redesigned the platform UI in HTML/CSS/JavaScript, streamlining 5 core workflows for compliance analysts." },
      { tag: "biz", text: "Gained hands-on exposure to RegTech fraud detection and Anti-Money Laundering (AML) compliance workflows." },
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
    bullets: [
      { tag: "biz", text: "Analysed digital loyalty programs in the Hong Kong market to identify key trends and competitive margins." },
      { tag: "biz", text: "Built Excel financial models to support core operations and deliver executive briefings." },
      { tag: "biz", text: "Turned market research into data insights that helped optimise digital marketing campaigns." },
    ],
  },
];

export const leadership = {
  org: "Hong Kong Student Association",
  role: "External Co-President",
  dates: "May 2024 – Present",
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
  lens: Lens;
  featured?: boolean;
  points?: string[];
};

export const projects: Project[] = [
  {
    slug: "crux",
    kind: "Full-stack · Geospatial · Data",
    title: "Crux",
    context: "Personal project · Sep 2026 – Present",
    blurb:
      "A social climbing and conditions app: see who's climbing at indoor gyms and outdoor crags, find partners, log sends, and know when the rock is actually in condition.",
    metrics: [
      { v: "0–100", l: "Conditions Score" },
      { v: "24–48h", l: "sandstone lockout rule" },
    ],
    points: [
      "Conditions Score pipeline combining Open-Meteo weather, sun/shade and rock-type rules for every crag.",
      "FastAPI REST backend with PostGIS geospatial queries, JWT auth and OpenBeta route ingestion.",
      "React + TypeScript Leaflet map and progression dashboard (grade pyramid, send trends); pytest suite, Dockerised.",
      "Next up: friends, activity feed and a partner finder matching climbers by grade, location and availability.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL/PostGIS", "React", "TypeScript", "Docker", "Leaflet"],
    lens: "all",
    featured: true,
  },
  {
    slug: "finance-agents",
    kind: "Enterprise AI · Automation",
    title: "Finance AI Agents",
    context: "Colleague AI",
    blurb:
      "Production agents for accounts payable, reconciliation and cash-flow reporting, on a reusable LLM architecture with role-based access and audit trails.",
    metrics: [
      { v: "~40%", l: "less task time" },
      { v: "~35%", l: "faster agent builds" },
    ],
    stack: ["Copilot Studio", "Azure AI", "RAG", "Power Automate", "Dataverse"],
    lens: "all",
  },
  {
    slug: "discovery-engine",
    kind: "Agentic AI · Sales analytics",
    title: "Agentic Opportunity Discovery Engine",
    context: "Equinix",
    blurb:
      "Four cooperating LLM agents that automate pipeline generation and surface whitespace across APAC and AMER accounts.",
    metrics: [
      { v: "150+", l: "qualified opportunities" },
      { v: "95%", l: "dedupe match rate" },
    ],
    stack: ["Python", "LLM agents", "Pandas", "Salesforce", "ZoomInfo"],
    lens: "all",
  },
  {
    slug: "sports-pipeline",
    kind: "Data pipelines · Reporting",
    title: "Sports Data Pipelines",
    context: "The Hong Kong Jockey Club",
    blurb:
      "Python and SQL pipelines over 50K+ records, with automated Matplotlib dashboards that fed program recommendations to NBA representatives.",
    metrics: [
      { v: "50K+", l: "records processed" },
      { v: "~50%", l: "faster reporting" },
    ],
    stack: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"],
    lens: "all",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "R", "HTML/CSS"] },
  { group: "Frameworks & Data", items: ["FastAPI", "React", "REST APIs", "Pandas", "NumPy", "Matplotlib", "OpenCV", "pytest"] },
  { group: "Cloud & Tooling", items: ["Azure AI", "AWS", "Google Cloud", "Docker", "PostgreSQL/PostGIS", "Git/GitHub", "Linux", "Jira", "Power Platform"] },
  { group: "Business & Analytics", items: ["Financial Modeling (Excel)", "Variance Analysis", "Business Analytics", "Market Research", "Salesforce", "ZoomInfo", "6sense", "Sales Navigator"] },
  { group: "Spoken", items: ["English (Native)", "Cantonese (Native)", "Mandarin (Native)"] },
];

export const education = {
  school: "University of Wisconsin–Madison",
  degree: "B.S. Data Science & Computer Science",
  minor: "Minor in Consulting",
  gpa: "3.8 / 4.0",
  grad: "Expected May 2027",
  courses: [
    "Algorithms", "Data Structures", "Databases", "Operating Systems", "Object-Oriented Programming",
    "Software Engineering (Git)", "Intro to AI", "Data Visualization & Modeling",
    "Management Consulting", "Project Management",
  ],
  activity: "Student athlete · UW Competitive USAC Climbing Team",
  cert: "Google AI Professional Certificate",
};
