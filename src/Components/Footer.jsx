import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { services } from "../Data/servicesData";
import { container } from "./ui";

const SOCIAL_LINKS = [
  { Icon: FaInstagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
  { Icon: FaXTwitter, href: "https://twitter.com/yourhandle", label: "Twitter / X" },
  { Icon: FaFacebookF, href: "https://facebook.com/yourhandle", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/zanqiz-technologies", label: "LinkedIn" },
  { Icon: FaRedditAlien, href: "https://reddit.com/r/yourhandle", label: "Reddit" },
  { Icon: FaWhatsapp, href: "https://wa.me/yournumber", label: "WhatsApp" },
];

const byCategory = (category, limit) => services.filter((s) => s.category === category).slice(0, limit);

const COLUMNS = [
  { title: "IT Solutions", items: byCategory("it-solutions", 4) },
  { title: "Publishing & Accessibility", items: byCategory("publishing-accessibility", 5) },
  { title: "Business Process", items: byCategory("business-process", 5) },
];

const linkCls = "text-sm text-white/60 transition hover:text-white";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute -top-48 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className={`${container} relative pb-6 pt-12`}>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Building reliable software, accessible digital content, and business solutions that
              help organizations innovate, grow, and succeed.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-bold text-navy transition hover:bg-accent-dark"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h5>
              <ul className="mt-3 space-y-1.5">
                {col.items.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className={linkCls}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h5>
            <ul className="mt-3 space-y-1.5">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About Us</Link></li>
              <li><Link to="/services" className={linkCls}>All Services</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row">
          <span className="text-sm text-white/50">© 2026 Zanqiz Technologies. All rights reserved.</span>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:border-brand-light hover:bg-brand hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
