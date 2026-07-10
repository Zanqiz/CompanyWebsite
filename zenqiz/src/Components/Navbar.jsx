import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = ["Home", "Services", "Industries", "About", "Contact"];

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
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </nav>
        <button className="zq-btn zq-btn-orange zq-nav-cta">Start a project</button>
        <button className="zq-nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="zq-nav-mobile">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button className="zq-btn zq-btn-orange">Start a project</button>
        </div>
      )}
    </header>
  );
}
