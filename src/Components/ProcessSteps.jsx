import { useEffect, useState } from "react";
import { ClipboardList, Search, Headphones, PenTool, Code2, ShieldCheck, UploadCloud } from "lucide-react";
import { GlowBackground, Reveal, SectionHeading, container } from "./ui";

const STEPS = [
  { Icon: Search, title: "Discover", body: "We learn about your business, goals, challenges, and project requirements." },
  { Icon: ClipboardList, title: "Plan", body: "Scope, timeline, and team are locked before code starts." },
  { Icon: PenTool, title: "Design", body: "UX flows and content structure get shaped and reviewed." },
  { Icon: Code2, title: "Execute", body: "Build software, remediate PDFs, convert EPUB/XML." },
  { Icon: ShieldCheck, title: "Test", body: "QA, accessibility audits, and validation against spec." },
  { Icon: UploadCloud, title: "Deploy", body: "Shipped to production with a documented handover." },
  { Icon: Headphones, title: "Support", body: "Provide maintenance, updates, or ongoing assistance." },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const Current = STEPS[active];

  return (
    <section id="process" className="relative isolate overflow-hidden py-24 text-white sm:py-32">
      <GlowBackground />
      <div className={container}>
        <Reveal>
          <SectionHeading
            dark
            eyebrow="How we work"
            title="Seven steps, in this order, every time."
            sub="Every successful project begins with a clear strategy. Our step-by-step approach ensures transparency, quality, and reliable delivery from planning to post-launch support."
          />
        </Reveal>

        <div
          className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                  active === i
                    ? "border-brand-light/60 bg-brand/25 shadow-lg shadow-brand/20"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                }`}
              >
                <span className={`font-display text-sm font-bold ${active === i ? "text-accent" : "text-white/35"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-semibold">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-10">
            <div className="absolute -right-10 -top-10 size-56 rounded-full bg-brand/40 blur-3xl" />
            <span className="relative font-display text-8xl font-bold text-white/[0.07] sm:text-9xl">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div key={active} className="relative">
              <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-accent to-accent-dark text-navy">
                <Current.Icon size={26} />
              </span>
              <h3 className="mt-6 text-3xl font-bold">{Current.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-white/70">{Current.body}</p>
            </div>
            <div className="relative mt-8 flex gap-1.5">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all ${i <= active ? "bg-accent" : "bg-white/15"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
