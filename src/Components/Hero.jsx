import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Accessibility,
  BookOpen,
  Boxes,
  Code2,
  Database,
  PenTool,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";
import { services } from "../Data/servicesData";
import { Reveal, container, btnPrimary, btnGhostDark } from "./ui";

const STATS = [
  { value: "7", label: "step delivery process" },
  { value: String(services.length), label: "specialised services" },
  { value: "<24h", label: "response time" },
];

const MARQUEE = [
  "WCAG",
  "PDF/UA",
  "Section 508",
  "EPUB 3",
  "XML",
  "ERP",
  "React",
  "Node.js",
  "Figma",
  "MySQL",
  "REST APIs",
  "OCR",
  "Design Systems",
];

/* Services orbiting the Zanqiz core */
const INNER = [
  {
    Icon: Code2,
    label: "Software",
    a: 0,
    to: "/services/web-application-development",
  },
  { Icon: Boxes, label: "ERP", a: 120, to: "/services/erp-solutions" },
  { Icon: PenTool, label: "UI / UX", a: 240, to: "/services/ui-ux-design" },
];
const OUTER = [
  {
    Icon: Accessibility,
    label: "Accessibility",
    a: 45,
    to: "/services/pdf-accessibility-remediation",
  },
  {
    Icon: BookOpen,
    label: "Publishing",
    a: 135,
    to: "/services/epub-production",
  },
  {
    Icon: ShoppingCart,
    label: "E-Commerce",
    a: 225,
    to: "/services/ecommerce-solutions",
  },
  {
    Icon: Database,
    label: "Data",
    a: 315,
    to: "/services/data-entry-processing",
  },
];
const DOTS = [
  { a: 20, r: "22cqw", rev: false, c: "bg-accent" },
  { a: 200, r: "22cqw", rev: false, c: "bg-brand-light" },
  { a: 90, r: "38cqw", rev: true, c: "bg-brand-light" },
  { a: 270, r: "38cqw", rev: true, c: "bg-accent" },
];

const place = (a, r) => ({
  "--a": `${a}deg`,
  "--r": r,
  transform: `rotate(${a}deg) translateX(${r}) rotate(${-a}deg)`,
});

function OrbitNode({ Icon, label, a, to, r, rev, duration }) {
  return (
    <Link
      to={to}
      aria-label={label}
      style={{ ...place(a, r), animationDuration: duration }}
      className={`group/node absolute left-1/2 top-1/2 -ml-12 -mt-7 flex w-24 flex-col items-center gap-1.5 ${
        rev
          ? "animate-[orbit-rev_linear_infinite]"
          : "animate-[orbit_linear_infinite]"
      } group-hover/orb:[animation-play-state:paused] motion-reduce:animate-none`}
    >
      <span className="grid size-14 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 group-hover/node:scale-110 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-navy">
        <Icon size={24} />
      </span>
      <span className="whitespace-nowrap rounded-full bg-[#12093f]/70 px-2.5 py-0.5 text-[11px] font-semibold text-white/80">
        {label}
      </span>
    </Link>
  );
}

/* Hero-only colour scheme: vivid violet gradient + dot pattern + warm glows */
function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#12093f] via-[#2d1b96] to-[#5b3df0]" />
      <div className="absolute -right-32 -top-32 -z-10 size-[34rem] rounded-full bg-accent/40 blur-[130px] animate-pulse-glow motion-reduce:animate-none" />
      <div className="absolute -bottom-40 -left-24 -z-10 size-[30rem] rounded-full bg-pink-500/30 blur-[130px] animate-pulse-glow motion-reduce:animate-none" />
      <div className="absolute right-1/4 top-1/3 -z-10 size-[26rem] rounded-full bg-cyan-400/15 blur-[120px]" />
      <div
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />
    </>
  );
}

function OrbitVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="group/orb relative aspect-square w-full [container-type:inline-size]">
        {/* glow behind everything */}
        <div className="absolute inset-[12%] rounded-full bg-linear-to-tr from-white/15 to-accent/30 blur-3xl" />

        {/* orbit rings */}
        <div className="absolute left-1/2 top-1/2 size-[44cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
        <div className="absolute left-1/2 top-1/2 size-[76cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 size-[98cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

        {/* core with ripples */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 1.3}s` }}
              className="absolute inset-0 rounded-full border border-white/40 animate-ripple motion-reduce:animate-none"
            />
          ))}
          <div className="relative size-24 rounded-full bg-linear-to-br from-accent to-pink-500 p-1.5 shadow-[0_0_70px_12px_rgba(255,150,80,0.5)] ring-8 ring-white/20 sm:size-32">
            <div className="grid size-full place-items-center rounded-full bg-gray-200">
              <img
                src="/logo.png"
                alt="Zanqiz"
                className="h-5/5 w-5/5 object-contain"
              />
            </div>
          </div>
        </div>

        {/* glowing particles */}
        {DOTS.map((d, i) => (
          <span
            key={i}
            style={{
              ...place(d.a, d.r),
              animationDuration: d.rev ? "60s" : "36s",
            }}
            className={`absolute left-1/2 top-1/2 -ml-1 -mt-1 size-2 rounded-full ${
              d.c
            } shadow-[0_0_14px_4px_rgba(255,167,38,0.55)] ${
              d.rev
                ? "animate-[orbit-rev_linear_infinite]"
                : "animate-[orbit_linear_infinite]"
            } motion-reduce:animate-none`}
          />
        ))}

        {/* service nodes */}
        {INNER.map((n) => (
          <OrbitNode key={n.label} {...n} r="22cqw" duration="36s" />
        ))}
        {OUTER.map((n) => (
          <OrbitNode key={n.label} {...n} r="38cqw" rev duration="60s" />
        ))}
      </div>

      <div className="absolute -right-1 top-2 animate-float rounded-2xl border border-white/25 bg-white/15 px-4 py-2.5 shadow-xl backdrop-blur-xl motion-reduce:animate-none sm:right-0">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <CheckCircle2 size={16} className="text-emerald-400" /> ZANQIZ
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const loop = [...MARQUEE, ...MARQUEE];

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative isolate flex min-h-screen flex-col overflow-hidden text-white"
    >
      <HeroBackground />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx,30%) var(--my,30%), rgba(255,255,255,0.12), transparent 60%)",
        }}
      />

      <div className="flex flex-1 items-center">
        <div
          className={`${container} grid items-center gap-12 pb-14 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-28`}
        >
          <Reveal>
            <Link
              to="/services/erp-solutions"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-navy">
                NEW
              </span>
              Introducing our ERP product
              <ArrowUpRight
                size={15}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <h1 className="mt-7 text-5xl font-bold leading-[1.02] sm:text-6xl xl:text-7xl">
              We Design, Build &amp;{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-white via-[#ffe2b0] to-accent bg-clip-text text-transparent">
                  Automate
                </span>
                <svg
                  viewBox="0 0 300 14"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10 C 60 2, 140 2, 298 8"
                    fill="none"
                    stroke="#ffa726"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              So You Don&rsquo;t Have To.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Custom software, ERP, accessible digital content and business
              process support, built for businesses, publishers, institutions
              and enterprises that want technology that lasts.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>
                Start a project
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link to="/services" className={btnGhostDark}>
                Explore services
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6">
              {STATS.map((s, i) => (
                <div key={s.label} className={i === 0 ? "pr-5" : "px-5"}>
                  <dt className="font-display text-3xl font-bold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-white/50">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <OrbitVisual />
          </Reveal>
        </div>
      </div>

      {/* Standards & stack marquee */}
      <div className="border-y border-white/15 bg-black/15 py-5 backdrop-blur">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {loop.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="mr-12 flex items-center gap-12 font-display text-lg font-semibold text-white/55"
              >
                {item}
                <span className="size-1.5 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
