import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services } from "../Data/servicesData";
import { GlowBackground, Reveal, container, btnPrimary } from "./ui";

/* Hides itself if the image file is missing, so no broken-image icons */
function Shot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-64 w-full rounded-3xl border border-ink/10 object-cover shadow-lg sm:h-80"
    />
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      <section className="relative isolate overflow-hidden pb-20 pt-40 text-white sm:pt-44">
        <GlowBackground />
        <div className={container}>
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white">
              <ArrowLeft size={16} /> Back to services
            </Link>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-accent to-accent-dark text-navy shadow-lg shadow-accent/30">
                <Icon size={30} />
              </span>
              <div>
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-balance sm:text-5xl">{service.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{service.overview}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className={container}>
          {service.images?.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              {service.images.slice(0, 2).map((src, i) => (
                <Shot key={src} src={src} alt={`${service.title} example ${i + 1}`} />
              ))}
            </div>
          )}

          {service.modules?.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold sm:text-3xl">Modules</h2>
              <p className="mt-2 max-w-2xl text-slate">Pick the modules you need today and add more as your business grows.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.modules.map((m, i) => (
                  <div key={m.title} className="rounded-3xl border border-ink/10 bg-mist p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-xl hover:shadow-brand/10">
                    <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-lg font-bold">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">What&rsquo;s included</h2>
              <ul className="mt-6 grid gap-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-mist p-4">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-ink/90">{point}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-2xl font-bold sm:text-3xl">How we work on it</h2>
              <div className="mt-6 space-y-4">
                {service.process.map((p, i) => (
                  <div key={p.step} className="flex gap-5 rounded-3xl border border-ink/10 bg-white p-6 transition hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                    <span className="font-display text-3xl font-bold text-brand/30">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg font-bold">{p.step}</h3>
                      <p className="mt-1 text-slate">{p.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-navy-deep p-7 text-white shadow-2xl">
                <h3 className="text-lg font-bold">Stack we use</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white/85">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className={`${btnPrimary} mt-8 w-full`}>
                  Start a project <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
