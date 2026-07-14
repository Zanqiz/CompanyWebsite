import {
  Eye,
  UserCog,
  Users,
  Lightbulb,
  Accessibility,
  BadgeCheck,
} from "lucide-react";

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
            That Matter Create Lasting Value
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
        Technology should simplify business—not complicate it. At Zanqiz
        Technologies, we combine technical expertise with industry knowledge to
        deliver software solutions, accessibility services, digital publishing,
        and business process support that solve real-world challenges.
      </p>

      <hr className="zq-hr" />

      <div className="zq-values-grid">
        <ValueCard
          Icon={Lightbulb}
          title="Innovation"
          body="Modern technology that solves business problems."
        />
        <ValueCard
          Icon={Accessibility}
          title="Accessibility"
          body="Digital content designed for everyone."
        />
        <ValueCard
          Icon={BadgeCheck}
          title="Quality"
          body="Reliable solutions with attention to detail."
        />
      </div>
    </section>
  );
}
