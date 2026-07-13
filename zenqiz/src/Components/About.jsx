import { Users, Target, Award, Zap } from "lucide-react";
import "./Stylesheet/About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-inner">
          <h1>About Zanqix</h1>
          <p>
            We're a team of engineers, designers, and QA specialists who build
            software you can trust — on time, on budget, and without surprises.
          </p>
        </div>
      </div>

      <div className="about-story">
        <div className="about-story-inner">
          <div className="about-story-media">
            <img src="/aboutme.jpg" alt="About Zanqix" />
          </div>
          <div className="about-story-copy">
            <span className="about-eyebrow">Our Story</span>
            <h2>A team built around one job: making software you can trust.</h2>
            <p>
              Zanqix Technologies started with a simple frustration — most
              software projects ship late, over budget, and full of surprises.
              We build differently. Every engagement follows the same seven-step
              process, every deliverable is tested before it reaches you, and
              every quote is fixed before work begins.
            </p>
            <p>
              We're a small team of engineers, designers, and QA specialists
              who'd rather under-promise and prove it than sell you a pitch
              deck. That's the whole company, really.
            </p>
          </div>
        </div>
      </div>

      <div className="about-values">
        <div className="about-values-inner">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>People First</h3>
              <p>
                We treat every project like it's our own reputation on the line.
                Your success is our success.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={32} />
              </div>
              <h3>Clear Communication</h3>
              <p>
                No jargon, no surprises. We explain everything in plain language
                and keep you informed at every step.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Quality Over Speed</h3>
              <p>
                We'd rather deliver right than deliver fast. Every line of code
                is tested before it reaches production.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Zap size={32} />
              </div>
              <h3>Continuous Improvement</h3>
              <p>
                We learn from every project and apply those lessons to make the
                next one even better.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-mission">
        <div className="about-mission-inner">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To transform how software is built — replacing uncertainty with
              clarity, surprises with predictability, and frustration with
              confidence. We believe every business deserves software that works
              as intended, delivered on time, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
