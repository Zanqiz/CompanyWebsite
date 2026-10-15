import { Link } from "react-router-dom";
import { Boxes, Code2, PenTool, ShoppingCart, FileText, BookOpen, Braces, Keyboard, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading, container } from "./ui";

const FEATURED = [
  { key: "erp", Icon: Boxes, title: "ERP Product", body: "One connected platform for finance, inventory, sales, HR and reporting, so your whole operation runs from a single source of truth.", to: "/services/erp-solutions", feature: true },
  { key: "custom", Icon: Code2, title: "Custom Software Development", body: "Purpose-built software designed around your business workflows.", to: "/services/web-application-development" },
  { key: "ui-ux", Icon: PenTool, title: "UI / UX Design", body: "Beautiful interfaces that deliver intuitive user experiences.", to: "/services/ui-ux-design" },
  { key: "ecommerce", Icon: ShoppingCart, title: "E-Commerce Solutions", body: "Online stores optimized for performance, sales, and growth.", to: "/services/ecommerce-solutions" },
  { key: "pdf", Icon: FileText, title: "PDF Accessibility", body: "Accessible PDFs compliant with WCAG and PDF/UA standards.", to: "/services/pdf-accessibility-remediation" },
  { key: "epub", Icon: BookOpen, title: "EPUB Production", body: "Professional EPUB 2 & EPUB 3 conversion for digital publishing.", to: "/services/epub-production" },
  { key: "xml", Icon: Braces, title: "XML Conversion", body: "Accurate XML tagging and structured content conversion.", to: "/services/xml-conversion-tagging" },
  { key: "data", Icon: Keyboard, title: "Data Processing", body: "Reliable data entry and processing with quality assurance.", to: "/services/data-entry-processing" },
];

function FeatureCard({ s }) {
  return (
    <Link
      to={s.to}
      className="group relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-brand via-brand to-[#2a1a8f] p-8 text-white shadow-2xl shadow-brand/25 transition duration-300 hover:-translate-y-1"
    >
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-accent/30 blur-3xl transition duration-500 group-hover:scale-125" />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(135deg,transparent,black)]" />
      <span className="relative grid size-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
        <s.Icon size={28} />
      </span>
      <div className="relative mt-10">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">New product</span>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{s.title}</h3>
        <p className="mt-3 max-w-md text-white/75">{s.body}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
          Learn more <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}

function ServiceCard({ s }) {
  return (
    <Link
      to={s.to}
      className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
        <s.Icon size={22} />
      </span>
      <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-mist py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className={`${container} relative`}>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Our services"
            title="Solutions built around your business"
            sub="From software development and accessibility compliance to digital publishing and business process support, Zanqiz delivers reliable, scalable solutions that help organizations reach their digital goals."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((s, i) => (
            <Reveal key={s.key} delay={(i % 3) * 90} className={s.feature ? "sm:col-span-2" : ""}>
              {s.feature ? <FeatureCard s={s} /> : <ServiceCard s={s} />}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand"
          >
            View all services
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
