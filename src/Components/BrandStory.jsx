import { Lightbulb, Accessibility, BadgeCheck, Quote } from "lucide-react";
import { Reveal, SectionHeading, container } from "./ui";

const VALUES = [
  { Icon: Lightbulb, title: "Innovation", body: "Modern technology that solves business problems.", tint: "from-brand to-brand-light" },
  { Icon: Accessibility, title: "Accessibility", body: "Digital content designed for everyone.", tint: "from-accent to-accent-dark" },
  { Icon: BadgeCheck, title: "Quality", body: "Reliable solutions with attention to detail.", tint: "from-emerald-500 to-emerald-400" },
];

export default function BrandStory() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className={container}>
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our brand story"
              title="Building solutions that matter, creating lasting value."
              sub="Technology should simplify business, not complicate it. At Zanqiz Technologies we combine technical expertise with industry knowledge to deliver software, accessibility services, digital publishing, and business process support that solve real-world challenges."
            />
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand to-[#2a1a8f] p-8 text-white shadow-2xl shadow-brand/25 sm:p-10">
              <div className="absolute -right-10 -top-10 size-44 rounded-full bg-accent/30 blur-3xl" />
              <Quote className="relative text-white/30" size={40} />
              <figcaption className="relative mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                The mission
              </figcaption>
              <blockquote className="relative mt-3 text-lg leading-relaxed text-white/90 sm:text-xl">
                To empower businesses, educators, publishers, and organizations with reliable
                technology, accessible digital solutions, and efficient business services that
                drive sustainable growth and lasting value.
              </blockquote>
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {VALUES.map(({ Icon, title, body, tint }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-ink/10 bg-mist p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-brand/10">
                <span className={`grid size-12 place-items-center rounded-2xl bg-linear-to-br ${tint} text-white shadow-lg`}>
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-slate">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
