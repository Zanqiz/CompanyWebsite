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
            Building Solutions
            <br />
            That Matter
          </h2>
          <span className="zq-underline" />
        </div>

        <div className="zq-mission-card">
          <span className="zq-mission-label">The Mission</span>
          <p>
            &ldquo;To empower businesses, educators, publishers, and
            organizations with reliable technology, accessible digital
            solutions, and efficient business services that drive sustainable
            growth and lasting value.&rdquo;
          </p>
        </div>
      </div>

      <p className="zq-story-body">
        At Zanqiz Technologies, we partner with businesses to solve real-world
        challenges through technology, accessibility, and operational
        excellence. From custom software and websites to accessible digital
        publishing, e-learning support, and business process services, we
        deliver practical solutions that help organizations grow with
        confidence. Our focus is not just on delivering projects—but on building
        long-term partnerships through quality, innovation, and trust.
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
