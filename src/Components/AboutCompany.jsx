import { Check } from "lucide-react";
import { Reveal, Eyebrow, container } from "./ui";

const POINTS = ["Secure, scalable and accessible by default", "Software, publishing and process support under one roof", "Fixed scope and clear handover on every project"];

export default function AboutCompany() {
  return (
    <section id="company" className="bg-white py-24 sm:py-32">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <Reveal className="relative">
          <div className="absolute -bottom-5 -left-5 size-full rounded-[2rem] bg-linear-to-br from-brand to-accent opacity-90" />
          <img
            src="/aboutme.jpg"
            alt="The Zanqiz team at work"
            className="relative h-[26rem] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[32rem]"
          />
          <div className="absolute -right-3 bottom-8 rounded-2xl border border-ink/10 bg-white px-5 py-4 shadow-xl sm:-right-6">
            <div className="font-display text-3xl font-bold text-brand">7-step</div>
            <div className="text-xs text-slate">delivery process</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>About Zanqiz</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] text-balance text-ink sm:text-4xl lg:text-5xl">
            A team built around one job: making software you can trust.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Success in today&rsquo;s digital world requires more than technology, it requires the
            right partner. Zanqiz Technologies combines software engineering, accessibility
            expertise, digital publishing, and business process solutions to help organizations
            overcome challenges and embrace new opportunities.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            Our team is committed to building secure, scalable, and accessible solutions that
            improve efficiency, strengthen digital experiences, and support long-term business growth.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 font-medium text-ink">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
