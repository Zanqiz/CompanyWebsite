import React from "react";

const INDUSTRIES = [
  "Publishers",
  "Government",
  "Real Estate",
  "Healthcare",
  "Education",
  "Finance",
  "Retail",
  "Logistics",
];

export default function Industries() {
  const loop = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="zq-industries" id="industries">
      <span className="zq-eyebrow center"> Industries we serve</span>
      <h2>Domain-specific work, not generic delivery.</h2>

      <div className="zq-marquee">
        <div className="zq-marquee-track">
          {loop.map((name, i) => (
            <span className="zq-pill" key={`${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
