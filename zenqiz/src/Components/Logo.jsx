import React from "react";

export default function Logo({ light }) {
  return (
    <div className="zq-logo">
      <span className="zq-logo-mark">
        <span className="zq-logo-mark-inner" />
      </span>
      <span className={`zq-logo-text ${light ? "light" : ""}`}>Zanqiz</span>
    </div>
  );
}
