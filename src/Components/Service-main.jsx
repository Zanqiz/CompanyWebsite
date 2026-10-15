import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, filters } from "../Data/servicesData";
import { PageHero, Reveal, container } from "./ui";
import CTA from "./CTA";

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? services : services.filter((s) => s.category === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Expertise that scales with your ambition."
        sub="We bridge the gap between high-level vision and granular operational reality. Our specialized teams deliver precision-engineered solutions for complex technical landscapes."
      />

      <section className="bg-mist py-16 sm:py-24">
        <div className={container}>
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter services">
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={activeFilter === f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  activeFilter === f.key
                    ? "border-brand bg-brand text-white shadow-lg shadow-brand/25"
                    : "border-ink/10 bg-white text-ink/70 hover:border-brand/40 hover:text-brand"
                }`}
              >
                {f.label} <span className="opacity-60">({f.count})</span>
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      View details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
