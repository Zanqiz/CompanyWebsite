import { Link } from "react-router-dom";
import "./Stylesheet/Footer.css";
import { ArrowRight, Globe, AtSign, Rss } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="zq-footer" id="contact">
    <div className="zq-cta">
  <h2>Ready to see how we&rsquo;d run your project?</h2>
  <p>
    One conversation, no obligation — we&rsquo;ll map scope before you commit to
    anything.
  </p>
  <div className="zq-cta-actions">
   <Link to="/contact" className="zq-btn zq-btn-orange">
  Start a project <ArrowRight size={18} />
</Link>
<Link to="/contact" className="zq-btn zq-btn-outline-light">
  Book a free call
</Link>
  </div>
</div>

      <div className="zq-footer-bottom">
        <div className="zq-footer-grid">
          <div className="zq-footer-brand">
            <Logo />
            <p>Engineering the future of enterprise intelligence with precision and clarity.</p>
          </div>

          <div className="zq-footer-col">
            <h5>Product</h5>
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
          </div>

          <div className="zq-footer-col">
            <h5>Company</h5>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="zq-footer-col">
            <h5>Resources</h5>
            <a href="#docs">Documentation</a>
            <a href="#status">System Status</a>
            <a href="#notes">Release Notes</a>
          </div>
        </div>

        <div className="zq-footer-legal">
          <span>© 2024 Zenqiz Technologies. All rights reserved.</span>
          <div className="zq-footer-social">
            <Globe size={18} />
            <AtSign size={18} />
            <Rss size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
