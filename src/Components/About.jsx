import { Heart, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { PageHero, Reveal, Eyebrow, container } from "./ui";
import CTA from "./CTA";

const VALUES = [
  { Icon: Heart, title: "People First", body: "We treat every project like it's our own reputation on the line. Your success is our success." },
  { Icon: MessageCircle, title: "Clear Communication", body: "No jargon, no surprises. We explain everything in plain language and keep you informed at every step." },
  { Icon: ShieldCheck, title: "Quality Over Speed", body: "We'd rather deliver right than deliver fast. Every line of code is tested before it reaches production." },
  { Icon: TrendingUp, title: "Continuous Improvement", body: "We learn from every project and apply those lessons to make the next one even better." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Zanqiz"
        sub="We're a team of engineers, designers, and QA specialists who build software you can trust: on time, on budget, and without surprises."
      />

      <section className="bg-white py-24 sm:py-28">
        <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          <Reveal className="relative">
            <div className="absolute -bottom-5 -right-5 size-full rounded-[2rem] bg-linear-to-br from-brand to-accent opacity-90" />
            <img src="/aboutme.jpg" alt="The Zanqiz team" className="relative h-96 w-full rounded-[2rem] object-cover shadow-2xl sm:h-[30rem]" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
              A team built around one job: making software you can trust.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Zanqiz Technologies started with a simple frustration: most software projects ship
              late, over budget, and full of surprises. We build differently. Every engagement
              follows the same seven-step process, every deliverable is tested before it reaches
              you, and every quote is fixed before work begins.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              We're a small team of engineers, designers, and QA specialists who'd rather
              under-promise and prove it than sell you a pitch deck. That's the whole company, really.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className={container}>
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-5xl">Our values</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand to-brand-light text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className={`${container} max-w-4xl`}>
          <Reveal>
            <blockquote className="text-center font-display text-3xl font-bold leading-snug text-balance sm:text-5xl">
              <span className="text-gradient">&ldquo;First, solve the problem. Then, write the code.&rdquo;</span>
              <footer className="mt-6 font-sans text-base font-medium text-slate">John Johnson</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-8">
        <div className={container}>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand to-[#2a1a8f] p-10 text-white sm:p-16">
              <div className="absolute -right-16 -top-16 size-72 rounded-full bg-accent/30 blur-3xl" />
              <h2 className="relative text-3xl font-bold sm:text-4xl">Our mission</h2>
              <p className="relative mt-5 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
                To transform how software is built, replacing uncertainty with clarity, surprises
                with predictability, and frustration with confidence. We believe every business
                deserves software that works as intended, delivered on time, and built to last.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
