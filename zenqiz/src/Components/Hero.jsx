import React from "react";
import { ArrowRight } from "lucide-react";
import { COLORS } from "../lib/tokens";

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 460" className="zq-hero-illustration" role="img" aria-label="Illustration of a person working on a laptop">
      <circle cx="120" cy="90" r="46" fill="#FFFFFF" />
      <path d="M100 60 L108 82 M112 55 L118 80 M128 58 L124 82" stroke={COLORS.navy} strokeWidth="4" strokeLinecap="round" />
      <rect x="94" y="112" width="52" height="34" rx="6" fill={COLORS.purple} />
      <circle cx="120" cy="129" r="10" fill="#FFFFFF" />
      <path d="M120 122 L120 136 M113 129 L127 129" stroke={COLORS.purple} strokeWidth="4" strokeLinecap="round" />

      <path
        d="M330 60 C 380 60 400 110 375 150 C 355 180 390 210 360 240 C 330 268 300 230 270 250 C 245 266 240 300 210 300"
        fill="none"
        stroke="#BFD9FB"
        strokeWidth="26"
        strokeLinecap="round"
      />

      <circle cx="255" cy="180" r="70" fill="#FFFFFF" />
      <path
        d="M205 250 C 205 210 230 178 260 178 C 300 178 320 215 315 250 L 340 300 L 175 300 Z"
        fill="#EAF0FB"
      />
      <circle cx="260" cy="160" r="46" fill="#F3D9C4" />
      <path d="M222 150 C 222 118 296 116 298 150 C 298 130 240 122 234 148 Z" fill={COLORS.ink} />

      <rect x="150" y="300" width="220" height="14" rx="4" fill={COLORS.navy} />
      <rect x="175" y="240" width="95" height="66" rx="4" fill="#EFF4FD" stroke={COLORS.navy} strokeWidth="4" />
      <circle cx="222" cy="268" r="16" fill={COLORS.purple} />
      <path d="M222 252 A16 16 0 0 1 238 268 L222 268 Z" fill={COLORS.orange} />

      <rect x="300" y="180" width="18" height="130" rx="6" fill={COLORS.purple} transform="rotate(18 300 180)" />
      <circle cx="330" cy="120" r="18" fill={COLORS.navy} />

      <path d="M150 330 L 130 400 L 160 400 L 175 340 Z" fill={COLORS.purple} />
      <path d="M260 330 L 300 400 L 265 400 L 235 340 Z" fill={COLORS.navy} />
      <path d="M120 400 L 100 420 M120 400 L 108 425 M120 400 L 132 425" stroke={COLORS.navy} strokeWidth="4" strokeLinecap="round" />
      <path d="M300 400 L 320 420 M300 400 L 330 415 M300 400 L 312 425" stroke={COLORS.navy} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="zq-hero" id="home">
      <div className="zq-hero-inner">
        <div className="zq-hero-copy">
          <h1>
            We Design, Build &amp;
            <br />
            <span className="zq-accent">Automate</span> So You Don&rsquo;t Have
            <br />
            To.
          </h1>
          <p className="zq-hero-sub">
            We build software and accessible content the same way carefully
            and with proof you can check.
          </p>
          <div className="zq-hero-actions">
            <button className="zq-btn zq-btn-purple">Start a project</button>
            <button className="zq-btn zq-btn-ghost">
              View Case Studies <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="zq-hero-art">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
