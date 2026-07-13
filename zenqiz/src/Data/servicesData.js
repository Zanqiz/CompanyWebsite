import {
  Code2,
  LayoutDashboard,
  Brain,
  Repeat,
  Accessibility,
  FileText,
  BookOpen,
  FileCode,
  Server,
  ShieldCheck,
  Lock,
  Database,
} from "lucide-react";

export const services = [
  {
    slug: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built systems instead of forcing off-the-shelf tools into unique workflows.",
    category: "software-ai",
    images: [
      "/images/services/custom-software-1.jpg",
      "/images/services/custom-software-2.jpg",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    overview:
      "We design and build software around how your team actually works, not around a template. That means fewer workarounds, less duplicate data entry, and tools your staff will actually want to use.",
    points: [
      "Requirements mapped directly from your existing workflows",
      "Modular architecture so features can be added later without a rebuild",
      "Role-based access control built in from day one",
      "Documented handover so your team isn't locked to us",
    ],
    process: [
      { step: "Discovery", detail: "We shadow your current process and map every handoff and bottleneck." },
      { step: "Prototype", detail: "A clickable prototype validates the workflow before a line of production code is written." },
      { step: "Build", detail: "Two-week sprints with a working demo at the end of each one." },
      { step: "Handover", detail: "Full documentation and a walkthrough session with your team." },
    ],
  },
  {
    slug: "web-application-development",
    icon: LayoutDashboard,
    title: "Web Application Development",
    description:
      "Dashboards and portals designed for high-density information and real-world usage.",
    category: "software-ai",
    images: [
      "/images/services/web-app-1.jpg",
      "/images/services/web-app-2.jpg",
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind", "MySQL"],
    overview:
      "Internal tools and customer-facing portals both need to hold up under real daily use — fast page loads, sane information density, and no surprises when the data set gets large.",
    points: [
      "Built to stay responsive with thousands of records on screen",
      "Consistent component library so new pages ship faster over time",
      "Accessible by default: keyboard navigation and screen reader support",
      "Analytics hooks included so you can see what's actually being used",
    ],
    process: [
      { step: "Audit", detail: "We review your current tools and flag what's slowing your team down." },
      { step: "Design", detail: "Wireframes and a component system tailored to your data." },
      { step: "Build", detail: "Iterative development with staging environments for feedback." },
      { step: "Launch", detail: "Phased rollout with monitoring in place from day one." },
    ],
  },
  {
    slug: "ai-automation",
    icon: Brain,
    title: "AI Automation",
    description:
      "Intelligent workflows that remove manual, repeatable work through LLM integration.",
    category: "software-ai",
    images: [
      "/images/services/ai-automation-1.jpg",
      "/images/services/ai-automation-2.jpg",
    ],
    stack: ["Python", "LangChain", "OpenAI/Claude API", "FastAPI", "Redis"],
    overview:
      "We find the repetitive, judgment-light tasks eating your team's time and hand them to an automated pipeline — with a human checkpoint wherever the stakes call for one.",
    points: [
      "Every automation includes a review step before anything goes live",
      "Prompts and logic version-controlled like the rest of your codebase",
      "Fallback paths defined for anything the model can't confidently handle",
      "Usage and error logging so you can see exactly what's automated",
    ],
    process: [
      { step: "Identify", detail: "We map which tasks are repetitive enough to automate safely." },
      { step: "Pilot", detail: "A single workflow is automated and run in parallel with the manual process." },
      { step: "Refine", detail: "Edge cases are handled based on real pilot data, not guesses." },
      { step: "Scale", detail: "Once accuracy is proven, we extend the same pipeline to related tasks." },
    ],
  },
  {
    slug: "api-integration",
    icon: Repeat,
    title: "API Integration",
    description:
      "Robust systems connected seamlessly without brittle scripts or fragile bridges.",
    category: "software-ai",
    images: [
      "/images/services/api-integration-1.jpg",
      "/images/services/api-integration-2.jpg",
    ],
    stack: ["Node.js", "REST/GraphQL", "Webhooks", "RabbitMQ", "Postman"],
    overview:
      "When two systems need to talk to each other, we build the connection to survive rate limits, downtime, and schema changes — not just to work in the demo.",
    points: [
      "Retry and backoff logic on every external call",
      "Contract tests so a third-party API change fails loudly, not silently",
      "Centralized logging across every integration point",
      "Rate-limit-aware queuing to avoid getting throttled or banned",
    ],
    process: [
      { step: "Map", detail: "We document every system that needs to connect and how data should flow." },
      { step: "Build", detail: "Integrations are built one connection at a time, each independently testable." },
      { step: "Harden", detail: "Failure scenarios are simulated before launch, not discovered after." },
      { step: "Monitor", detail: "Alerting is set up so a broken integration is caught within minutes." },
    ],
  },
  {
    slug: "wcag-compliance",
    icon: Accessibility,
    title: "WCAG Compliance",
    description: "Accessibility audits with documented pass/fail reports and remediation.",
    category: "publishing-accessibility",
    images: [
      "/images/services/wcag-1.jpg",
      "/images/services/wcag-2.jpg",
    ],
    stack: ["axe-core", "NVDA/JAWS", "WAVE", "Lighthouse"],
    overview:
      "We test your site the way people using assistive technology actually experience it, then give you a prioritized list of fixes — not just a score.",
    points: [
      "Manual screen-reader testing, not just automated scans",
      "Every issue mapped to the specific WCAG success criterion it fails",
      "Fixes prioritized by user impact, not alphabetical order",
      "Re-audit included after remediation to confirm the fix worked",
    ],
    process: [
      { step: "Scan", detail: "Automated tools catch the low-hanging issues across every page." },
      { step: "Test manually", detail: "Real screen readers and keyboard-only navigation catch what tools miss." },
      { step: "Report", detail: "You get a clear, prioritized list — what's broken and how to fix it." },
      { step: "Verify", detail: "We re-test after your team ships fixes to confirm compliance." },
    ],
  },
  {
    slug: "pdf-remediation",
    icon: FileText,
    title: "PDF Remediation",
    description: "Existing PDF assets brought up to global PDF/UA standards for screen readers.",
    category: "publishing-accessibility",
    images: [
      "/images/services/pdf-1.jpg",
      "/images/services/pdf-2.jpg",
    ],
    stack: ["Adobe Acrobat Pro", "PAC 2024", "CommonLook"],
    overview:
      "A PDF that looks fine can still be unreadable to a screen reader. We rebuild the underlying tag structure so the reading order, headings, and alt text all make sense.",
    points: [
      "Reading order corrected so screen readers follow the visual layout",
      "Tables and forms tagged so their structure is announced correctly",
      "Alt text written for every meaningful image, not auto-generated filler",
      "PAC-validated for PDF/UA before delivery",
    ],
    process: [
      { step: "Inventory", detail: "Every document is checked against PDF/UA and WCAG requirements." },
      { step: "Tag", detail: "Heading structure, reading order, and alt text are rebuilt by hand." },
      { step: "Validate", detail: "Each file is run through PAC to confirm compliance." },
      { step: "Deliver", detail: "You get validated files plus a summary report per document." },
    ],
  },
  {
    slug: "epub-production",
    icon: BookOpen,
    title: "EPUB Production",
    description: "Publisher-ready digital books validated across devices before final delivery.",
    category: "publishing-accessibility",
    images: [
      "/images/services/epub-1.jpg",
      "/images/services/epub-2.jpg",
    ],
    stack: ["EPUB 3", "Calibre", "Ace by DAISY", "XHTML/CSS"],
    overview:
      "We convert manuscripts into EPUB 2 and 3 files that render correctly across Kindle, Apple Books, and every major e-reader — not just the one you tested on.",
    points: [
      "Cross-device testing before anything is marked done",
      "Semantic markup so table of contents and navigation work correctly",
      "Accessibility metadata included for EPUB 3 deliverables",
      "Font embedding and reflow tested at every text size",
    ],
    process: [
      { step: "Convert", detail: "Manuscript content is structured into semantic EPUB markup." },
      { step: "Style", detail: "Typography and layout are tuned for reflowable reading." },
      { step: "Test", detail: "Files are checked across major e-reader platforms." },
      { step: "Validate", detail: "Final files pass EPUBCheck before delivery." },
    ],
  },
  {
    slug: "xml-tagging",
    icon: FileCode,
    title: "XML Tagging",
    description: "Structured markup architecture that keeps your valuable content portable.",
    category: "publishing-accessibility",
    images: [
      "/images/services/xml-1.jpg",
      "/images/services/xml-2.jpg",
    ],
    stack: ["XML", "DTD/XSD Schemas", "XSLT", "oXygen"],
    overview:
      "Content locked inside one proprietary format is a liability. We tag it in structured XML so it can move between systems, formats, and publishers without starting over.",
    points: [
      "Tagged against industry-standard schemas (DTD/XSD)",
      "Content separated cleanly from presentation",
      "Validated against your target schema before delivery",
      "Documentation included so your team can maintain it going forward",
    ],
    process: [
      { step: "Analyze", detail: "We review your content and pick or confirm the right schema." },
      { step: "Tag", detail: "Content is marked up structurally, not just visually." },
      { step: "Validate", detail: "Every file is schema-validated before it's considered done." },
      { step: "Handover", detail: "You receive tagged files plus a short maintenance guide." },
    ],
  },
  {
    slug: "infrastructure-optimization",
    icon: Server,
    title: "Infrastructure Optimization",
    description: "Cloud environment audits to reduce latency and improve operational overhead.",
    category: "business-process",
    images: [
      "/images/services/infra-1.jpg",
      "/images/services/infra-2.jpg",
    ],
    stack: ["AWS", "Terraform", "Docker", "CloudWatch", "Nginx"],
    overview:
      "We audit your existing cloud setup for the things quietly costing you money and speed — oversized instances, redundant services, and unmonitored bottlenecks.",
    points: [
      "Cost breakdown showing exactly where spend is going",
      "Latency measured at each layer, not just total page load",
      "Infrastructure-as-code so changes are reviewable and reversible",
      "Monitoring and alerting set up before we hand things back",
    ],
    process: [
      { step: "Audit", detail: "We map your current infrastructure and flag inefficiencies." },
      { step: "Plan", detail: "Changes are prioritized by cost savings and risk." },
      { step: "Implement", detail: "Changes are rolled out incrementally, never all at once." },
      { step: "Monitor", detail: "Dashboards are set up so gains are visible, not just assumed." },
    ],
  },
  {
    slug: "qa-automated-testing",
    icon: ShieldCheck,
    title: "QA Automated Testing",
    description: "Continuous integration pipelines that catch regressions before production.",
    category: "business-process",
    images: [
      "/images/services/qa-1.jpg",
      "/images/services/qa-2.jpg",
    ],
    stack: ["Selenium", "Cypress", "Jest", "GitHub Actions"],
    overview:
      "We build a test suite that runs automatically on every change, so regressions are caught in minutes, not after a customer reports them.",
    points: [
      "Critical user flows covered first, not tested by coverage percentage alone",
      "Tests run automatically on every pull request",
      "Flaky tests actively tracked and fixed, not just ignored",
      "Clear failure reports that point straight to the broken change",
    ],
    process: [
      { step: "Prioritize", detail: "We identify the flows that would hurt most if they broke." },
      { step: "Automate", detail: "Tests are written for those flows first, then expanded outward." },
      { step: "Integrate", detail: "Tests are wired into your CI pipeline to run on every push." },
      { step: "Maintain", detail: "We keep the suite healthy so it stays trustworthy over time." },
    ],
  },
  {
    slug: "security-auditing",
    icon: Lock,
    title: "Security Auditing",
    description: "Deep penetration testing and vulnerability assessments for enterprise apps.",
    category: "business-process",
    images: [
      "/images/services/security-1.jpg",
      "/images/services/security-2.jpg",
    ],
    stack: ["OWASP ZAP", "Burp Suite", "Nmap", "Metasploit"],
    overview:
      "We test your application the way an attacker would — probing for the vulnerabilities that scanners miss and giving you a clear, prioritized remediation path.",
    points: [
      "Manual penetration testing, not just automated vulnerability scans",
      "Findings ranked by real-world exploitability, not just severity score",
      "Clear reproduction steps for every issue found",
      "Re-test included after fixes are deployed",
    ],
    process: [
      { step: "Scope", detail: "We agree on what's in bounds and what the priorities are." },
      { step: "Test", detail: "Manual and automated testing probe for real exploit paths." },
      { step: "Report", detail: "Findings are delivered with reproduction steps and fix guidance." },
      { step: "Re-test", detail: "We confirm each fix actually closes the vulnerability." },
    ],
  },
  {
    slug: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    description: "ETL pipelines that transform raw data into actionable business intelligence.",
    category: "business-process",
    images: [
      "/images/services/data-eng-1.jpg",
      "/images/services/data-eng-2.jpg",
    ],
    stack: ["Python", "Airflow", "PostgreSQL", "dbt", "Power BI"],
    overview:
      "We build pipelines that pull data from wherever it lives, clean it, and land it somewhere your team can actually query — reliably, on a schedule.",
    points: [
      "Pipelines built to fail loudly and recover cleanly, not fail silently",
      "Data quality checks run at every transformation step",
      "Documented lineage so you know where every number came from",
      "Dashboards built on top once the pipeline is stable",
    ],
    process: [
      { step: "Source", detail: "We identify and connect to every relevant data source." },
      { step: "Transform", detail: "Raw data is cleaned and modeled into a usable structure." },
      { step: "Schedule", detail: "Pipelines are automated to run on a reliable cadence." },
      { step: "Visualize", detail: "Dashboards are built so the data is actually usable day to day." },
    ],
  },
];

export const filters = [
  { key: "all", label: "All" },
  { key: "software-ai", label: "Software & AI" },
  { key: "publishing-accessibility", label: "Publishing & Accessibility" },
  { key: "business-process", label: "Business Process" },
].map((f) => ({
  ...f,
  count: f.key === "all" ? services.length : services.filter((s) => s.category === f.key).length,
}));