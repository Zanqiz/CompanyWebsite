import React, { useState } from "react";
import {
  ClipboardList,
  Search,
  Headphones,
  PenTool,
  Code2,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

const STEPS = [
  {
    Icon: Search,
    title: "Discover",
    body: "We learn about your business, goals, challenges, and project requirements.",
  },
  {
    Icon: ClipboardList,
    title: "Plan",
    body: "Scope, timeline, and team are locked before code starts.",
  },
  {
    Icon: PenTool,
    title: "Design",
    body: "UX flows and content structure get shaped and reviewed.",
  },
  {
    Icon: Code2,
    title: "Execute",
    body: "Build software, remediate PDFs, convert EPUB/XML.",
  },
  {
    Icon: ShieldCheck,
    title: "Test",
    body: "QA, accessibility audits, and validation against spec.",
  },
  {
    Icon: UploadCloud,
    title: "Deploy",
    body: "Shipped to production with a documented handover.",
  },
  {
    Icon: Headphones,
    title: "Support",
    body: "Provide maintenance, updates, or ongoing assistance.",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(4);

  return (
    <section className="zq-process" id="services">
      <div className="zq-process-inner">
        <h2>Seven steps, in this order, every time.</h2>
        <p className="zq-process-sub">
          Every successful project begins with a clear strategy. Our
          step-by-step approach ensures transparency, quality, and reliable
          delivery—from planning to post-launch support.
        </p>

        <div className="zq-steps-row">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              className={`zq-step ${active === i ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <s.Icon size={26} strokeWidth={1.6} />
              <h5>{s.title}</h5>
              <p>{s.body}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
