import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Reveal, container, btnPrimary, btnGhostDark } from "./ui";

export default function CTA() {
  return (
    <section className="bg-white px-0 py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-16 text-center text-white shadow-2xl sm:px-12 sm:py-20">
            <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
            <div className="absolute -left-20 -top-20 -z-10 size-96 rounded-full bg-brand/60 blur-[110px]" />
            <div className="absolute -bottom-24 -right-16 -z-10 size-96 rounded-full bg-accent/35 blur-[110px]" />

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] text-balance sm:text-5xl">
              Ready to see how we&rsquo;d run your project?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              One conversation, no obligation. We&rsquo;ll map scope before you commit to anything.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className={btnPrimary}>
                Start a project <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className={btnGhostDark}>
                <CalendarCheck size={18} /> Book a free call
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
