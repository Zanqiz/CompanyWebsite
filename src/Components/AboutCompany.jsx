import React from "react";
export default function AboutCompany() {
  return (
    <section className="zq-about" id="company">
      <div className="zq-about-inner">
        <div className="zq-about-media">
          <img
            src="/aboutme.jpg"
            alt="About Zenqiz"
          />
        </div>

        <div className="zq-about-copy">
          <span className="zq-eyebrow">About Zenqiz</span>
          <h2>A team built around one job: making software you can trust.</h2>
          <p>
            Zenqiz Technologies started with a simple frustration — most
            software projects ship late, over budget, and full of
            surprises. We build differently. Every engagement follows the
            same seven-step process, every deliverable is tested before it
            reaches you, and every quote is fixed before work begins.
            We're a small team of engineers, designers, and QA specialists
            who'd rather under-promise and prove it than sell you a
            pitch deck. That's the whole company, really.
          </p>
        </div>
      </div>
    </section>
  );
}
