import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";   // ✅ import Link
import Logo from "./Logo";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#services" },
  { label: "Industries", path: "/#industries" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/contact" }   // ✅ unified route
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`zq-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="zq-nav-inner">
        <Logo />
        <nav className="zq-nav-links">
          {LINKS.map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="zq-btn zq-btn-orange zq-nav-cta">
          Start a project
        </Link>
        <button
          className="zq-nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="zq-nav-mobile">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contactfull" className="zq-btn zq-btn-orange">
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
