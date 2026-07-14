import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import process from "../Components/ProcessSteps"
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
            <Link to="/contact" className="zq-btn zq-btn-purple">
              Start a project
            </Link>
            <Link to="/#process" className="zq-btn zq-btn-ghost">
              View Process <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="zq-hero-art">
          <img src="/hero-image.jpg" alt="Hero illustration" className="zq-hero-image" />
        </div>
      </div>
    </section>
  );
}