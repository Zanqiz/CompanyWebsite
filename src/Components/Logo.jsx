import React from "react";

export default function Logo({ light }) {
  return (
    <div className="zq-logo">
      <img src="/logo.png" alt="Zanqiz" className="zq-logo-img" />
      <span className={`zq-logo-text ${light ? "light" : ""}`}>Zanqiz</span>
    </div>
  );
}
