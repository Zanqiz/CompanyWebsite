import { useEffect, useRef, useState } from "react";

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

/* Fade + slide up when scrolled into view */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest ${
        dark
          ? "border-white/15 bg-white/5 text-white/80"
          : "border-brand/20 bg-brand/5 text-brand"
      }`}
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, sub, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-3xl font-bold leading-[1.1] text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/65" : "text-slate"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* Shared dark glowing background used by heroes */
export function GlowBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-navy-deep" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand/40 blur-[120px] animate-pulse-glow motion-reduce:animate-none" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 size-[24rem] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow motion-reduce:animate-none" />
    </>
  );
}

export function PageHero({ eyebrow, title, sub, children }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 text-white sm:pb-24 sm:pt-44">
      <GlowBackground />
      <div className={`${container} text-center`}>
        <Reveal>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] text-balance sm:text-6xl">
            {title}
          </h1>
          {sub && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              {sub}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-navy shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-accent/40";
export const btnBrand =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40";
