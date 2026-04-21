import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const topicLinks = [
  { label: "Pelayanan Kefarmasian", href: "/layanan/pelayanan-kefarmasian" },
  { label: "Manajemen Persediaan", href: "/layanan/manajemen-persediaan-obat" },
  { label: "Forecasting & Perencanaan", href: "/layanan/forecasting-kebutuhan" },
  { label: "Logistik Farmasi", href: "/layanan/logistik-farmasi" },
  { label: "Farmasi Klinik", href: "/layanan/farmasi-klinik" },
  { label: "Analisis Keuangan", href: "/layanan/laporan-keuangan" },
];

const navLinks = [
  { label: "Tentang Web", href: "/#tentang" },
  { label: "Materi", href: "/#layanan" },
  { label: "Modul Praktik", href: "/#akademik" },
];

export const Footer = () => {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border-2"
                style={{ borderColor: "#dc2626" }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#dc2626" }} />
              </span>
              <span
                className="text-base font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Manajemen<span style={{ color: "#dc2626" }}>Farmasi</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/30">
              Referensi komprehensif manajemen farmasi modern.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-white/20">
                Referensi
              </p>
              <p className="text-xs leading-relaxed text-white/25 italic">
                Prasetyawan, F., Serdiani, FISQua, Arief, I., Anggraini, R., Sarifudin, B. A., Suhery, D., Pratama, M. W., Yuniar, C. R., Ihsan, M., Madiati, N., Mayasari, S., Hasanah, R., Andika, M., & Syavardie, Y. (2024). Manajemen Farmasi. PT Pena Muda Media.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/20">
              Navigasi
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/30 transition-colors hover:text-white/70">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/20">
              Topik Materi
            </p>
            <ul className="space-y-3">
              {topicLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/30 transition-colors hover:text-white/70"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-end"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/20">
              © 2024 Manajemen Farmasi. Hak cipta dilindungi undang-undang.
            </p>
            <p className="text-xs text-white/20">
              Dilengkapi dengan 8 Modul Praktik Terapan
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/20">
              Follow Us On Instagram:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <a href="https://instagram.com/aspiran_23" target="_blank" rel="noreferrer" className="text-white/30 transition-colors hover:text-[#dc2626]">
                @aspiran_23
              </a>
              <a href="https://instagram.com/farmasi_ung" target="_blank" rel="noreferrer" className="text-white/30 transition-colors hover:text-[#dc2626]">
                @farmasi_ung
              </a>
              <a href="https://instagram.com/fok_ung" target="_blank" rel="noreferrer" className="text-white/30 transition-colors hover:text-[#dc2626]">
                @fok_ung
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
