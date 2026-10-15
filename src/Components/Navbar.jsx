import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/#industries" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  const isActive = (path) => {
    if (path === "/") return pathname === "/" && hash !== "#industries";
    if (path === "/#industries") return pathname === "/" && hash === "#industries";
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8">
      <div
        className={`mx-auto max-w-7xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-white/85 shadow-xl shadow-ink/10"
            : "border-white/30 bg-white/95 shadow-lg shadow-ink/5"
        } ${open ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className="flex items-center justify-between gap-4 py-1.5 pl-5 pr-2">
          <Link to="/" aria-label="Zanqiz home">
            <Logo large />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(l.path)
                    ? "bg-brand/10 text-brand"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand sm:inline-flex"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
            <button
              className="grid size-11 place-items-center rounded-full text-ink hover:bg-ink/5 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-ink/10 p-3 md:hidden">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className={`rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive(l.path) ? "bg-brand/10 text-brand" : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3.5 font-bold text-navy"
            >
              Start a project <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
