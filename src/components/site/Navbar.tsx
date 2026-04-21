import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Materi", href: "/#layanan" },
  { label: "Topik Ekstra", href: "/#akademik" },
];

interface NavbarProps {
  variant?: "home" | "detail";
}

export const Navbar = ({ variant = "home" }: NavbarProps) => {
  const isDetail = variant === "detail";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors group-hover:border-[#dc2626]"
            style={{ borderColor: "#dc2626" }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#dc2626" }} />
          </span>
          <span
            className="font-display text-[15px] font-bold tracking-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Manajemen<span style={{ color: "#dc2626" }}>Farmasi</span>
          </span>
        </Link>

        {/* Desktop nav */}
        {!isDetail && (
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-white/50 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          {isDetail ? (
            <Link
              to="/"
              className="rounded-full border border-white/10 px-4 py-1.5 text-[13px] font-medium text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              ← Kembali
            </Link>
          ) : (
            <>
              <a
                href="/#akademik"
                className="hidden rounded-full px-5 py-2 text-[13px] font-semibold text-white transition-all hover:opacity-90 md:block"
                style={{ background: "#dc2626" }}
              >
                Eksplorasi Modul
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && !isDetail && (
        <div className="border-t border-white/5 bg-black/95 px-6 py-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/50 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
