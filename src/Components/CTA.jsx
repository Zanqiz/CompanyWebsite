import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Stylesheet/CTA.css";

export default function CTA() {
  return (
    <div className="zq-cta">
      <h2>Ready to see how we&rsquo;d run your project?</h2>
      <p>
        One conversation, no obligation — we&rsquo;ll map scope before you
        commit to anything.
      </p>
      <div className="zq-cta-actions">
        <Link to="/contact" className="zq-btn zq-btn-orange" onClick={() => window.scrollTo(0, 0)}>
          Start a project <ArrowRight size={18} />
        </Link>
        <Link to="/contact" className="zq-btn zq-btn-outline-light" onClick={() => window.scrollTo(0, 0)}>
          Book a free call
        </Link>
      </div>
    </div>
  );
}
