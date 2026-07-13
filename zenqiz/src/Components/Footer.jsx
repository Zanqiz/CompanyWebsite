import "./Stylesheet/Footer.css";
import { Globe, AtSign, Rss } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="zq-footer" id="contact">
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
          <span>© 2024 Zanqix Technologies. All rights reserved.</span>
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
