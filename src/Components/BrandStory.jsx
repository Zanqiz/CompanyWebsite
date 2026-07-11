import React from "react";
import { Eye, UserCog, Users } from "lucide-react";

function ValueCard({ Icon, title, body }) {
  return (
    <div className="zq-value-card">
      <span className="zq-value-icon">
        <Icon size={22} strokeWidth={2} />
      </span>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default function BrandStory() {
  return (
    <section className="zq-story" id="about">
      <div className="zq-story-top">
        <div className="zq-story-heading">
          <span className="zq-eyebrow">Our brand story</span>
          <h2>
            Bridging Intelligence
            <br />
            &amp; Precision
          </h2>
          <span className="zq-underline" />
        </div>

        <div className="zq-mission-card">
          <span className="zq-mission-label">The Mission</span>
          <p>
            &ldquo;To empower organizations by bridging human intuition with
            technical precision, transforming complex operational challenges
            into seamless, automated realities.&rdquo;
          </p>
        </div>
      </div>

      <p className="zq-story-body">
        At Zenqiz Technologies, we don&rsquo;t just build software; we
        engineer peace of mind. Our approach is rooted in the belief that
        technology should serve humanity, not the other way around. By
        integrating AI-powered automation with human-centric design, we
        create solutions that are as intuitive as they are powerful.
      </p>

      <hr className="zq-hr" />

      <div className="zq-values-grid">
        <ValueCard
          Icon={Eye}
          title="Radical Transparency"
          body="We believe in open communication and verifiable results. Every line of code and every process is documented and accessible to our partners."
        />
        <ValueCard
          Icon={UserCog}
          title="Engineering Excellence"
          body="Precision is our standard. We apply rigorous testing and enterprise-grade architecture to every project, regardless of scale."
        />
        <ValueCard
          Icon={Users}
          title="Human-Centric Automation"
          body="Automation shouldn't replace the human touch—it should amplify it. We design systems that free your team to focus on what they do best."
        />
      </div>
    </section>
  );
}
