import { HeartPulse, GraduationCap, Wallet, ShoppingBag, Building2, BookOpen, Landmark, Home, Truck, Rocket } from "lucide-react";
import { Reveal, SectionHeading, container } from "./ui";

const ROW_1 = [
  { name: "Healthcare", Icon: HeartPulse },
  { name: "Education", Icon: GraduationCap },
  { name: "Finance", Icon: Wallet },
  { name: "E-Commerce", Icon: ShoppingBag },
  { name: "Enterprises", Icon: Building2 },
  { name: "Publishers", Icon: BookOpen },
  { name: "Government", Icon: Landmark },
  { name: "Real Estate", Icon: Home },
  { name: "Logistics", Icon: Truck },
  { name: "Startups", Icon: Rocket },
];
const ROW_2 = [...ROW_1].reverse();

function Row({ items, reverse = false }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} motion-reduce:animate-none hover:[animation-play-state:paused]`}>
        {loop.map(({ name, Icon }, i) => (
          <span
            key={`${name}-${i}`}
            className="mr-4 inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-ink/10 bg-white px-7 py-4 font-semibold text-ink shadow-sm transition hover:border-brand/40 hover:text-brand"
          >
            <Icon size={20} className="text-brand" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="bg-mist py-24 sm:py-32">
      <div className={container}>
        <Reveal>
          <SectionHeading center eyebrow="Industries we serve" title="Domain-specific work, not generic delivery." />
        </Reveal>
      </div>
      <div className="mt-14 space-y-4">
        <Row items={ROW_1} />
        <Row items={ROW_2} reverse />
      </div>
    </section>
  );
}
