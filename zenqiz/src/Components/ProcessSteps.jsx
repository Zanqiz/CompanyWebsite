import React, { useState } from "react";
import {
  ClipboardList,
  Headphones,
  PenTool,
  Code2,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

const STEPS = [
  { Icon: ClipboardList, title: "Discover", body: "We map your goals, constraints, and existing systems." },
  { Icon: Headphones, title: "Plan", body: "Scope, timeline, and team are locked before code starts." },
  { Icon: PenTool, title: "Design", body: "UX flows and content structure get shaped and reviewed." },
  { Icon: Code2, title: "Develop", body: "Engineers and content teams build in parallel sprints." },
  { Icon: ShieldCheck, title: "Test", body: "QA, accessibility audits, and validation against spec." },
  { Icon: UploadCloud, title: "Deploy", body: "Shipped to production with a documented handover." },
  { Icon: Headphones, title: "Support", body: "Ongoing maintenance and a direct line to the team." },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(4);

  return (
    <section className="zq-process" id="services">
      <div className="zq-process-inner">
        <h2>Seven steps, in this order, every time.</h2>
        <p className="zq-process-sub">
          Not a suggestion — this is the sequence that keeps engineering,
          content, and operations work in sync across every engagement.
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
