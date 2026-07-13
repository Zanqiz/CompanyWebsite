import "./Stylesheet/Footer.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaWhatsapp,
} from "react-icons/fa6";
import { services } from "../data/servicesData";

const SOCIAL_LINKS = [
  { Icon: FaInstagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
  { Icon: FaXTwitter, href: "https://twitter.com/yourhandle", label: "Twitter / X" },
  { Icon: FaFacebookF, href: "https://facebook.com/yourhandle", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourhandle", label: "LinkedIn" },
  { Icon: FaRedditAlien, href: "https://reddit.com/r/yourhandle", label: "Reddit" },
  { Icon: FaWhatsapp, href: "https://wa.me/yournumber", label: "WhatsApp" },
];

// Pull a few real services per category for the footer instead of hardcoding fake links
function servicesByCategory(category, limit) {
  return services.filter((s) => s.category === category).slice(0, limit);
}

const itServices = servicesByCategory("it-solutions", 4);
const publishingServices = servicesByCategory("publishing-accessibility", 5);
const businessServices = servicesByCategory("business-process", 5);

export default function Footer() {
  const socialItems = SOCIAL_LINKS.map((social) => {
    const SocialIcon = social.Icon;
    return (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="zq-footer-social-link"
      >
        <SocialIcon size={16} />
      </a>
    );
  });

  return (
    <footer className="zq-footer" id="contact">
      <div className="zq-footer-bottom">
        <div className="zq-footer-grid">
          <div className="zq-footer-brand">
            <Logo />
            <p>Engineering the future of enterprise intelligence with precision and clarity.</p>
          </div>

          <div className="zq-footer-col">
            <h5>IT Solutions</h5>
            {itServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="zq-footer-col">
            <h5>Publishing & Accessibility</h5>
            {publishingServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="zq-footer-col">
            <h5>Business Process</h5>
            {businessServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="zq-footer-col">
            <h5>Company</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">All Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="zq-footer-social">{socialItems}</div>

        <div className="zq-footer-legal">
          <span>© 2024 Zanqix Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
