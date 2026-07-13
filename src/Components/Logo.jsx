import React from "react";

export default function Logo({ light }) {
  return (
    <div className="zq-logo">
      <img src="/logo.png" alt="Zanqix" className="zq-logo-img" />
      <span className={`zq-logo-text ${light ? "light" : ""}`}>Zanqix</span>
    </div>
  );
}
