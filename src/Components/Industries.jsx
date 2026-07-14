import React from "react";

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Finance",
  "E-Commerce",
  "Enterprises",
  "Publishers",
  "Government",
  "Real Estate",
  "Logistics",
  "Startups",
];

// Second row: same content, different order
const INDUSTRIES_ROW_2 = [
  "Startups",
  "Real Estate",
  "Finance",
  "Publishers",
  "Healthcare",
  "Logistics",
  "Enterprises",
  "Government",
  "E-Commerce",
  "Education",
];

export default function Industries() {
  const loopRow1 = [...INDUSTRIES, ...INDUSTRIES];
  const loopRow2 = [...INDUSTRIES_ROW_2, ...INDUSTRIES_ROW_2];

  return (
    <section className="zq-industries" id="industries">
      <span className="zq-eyebrow center">Industries we serve</span>
      <h2>Domain-specific work, not generic delivery.</h2>

      <div className="zq-marquee">
        <div className="zq-marquee-track">
          {loopRow1.map((name, i) => (
            <span className="zq-pill" key={`row1-${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="zq-marquee zq-marquee-row2">
        <div className="zq-marquee-track zq-marquee-track-reverse">
          {loopRow2.map((name, i) => (
            <span className="zq-pill" key={`row2-${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}