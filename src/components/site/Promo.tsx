import { ArrowRight } from "lucide-react";

export const Promo = () => {
  return (
    <>
      {/* ── CTA Section ── */}
      <section id="promo">
        <div
          className="mx-auto max-w-6xl px-6 py-6 pb-0"
        >
          <div
            className="relative overflow-hidden rounded-3xl px-10 py-16 md:px-16 md:py-20"
            style={{ background: "#080808" }}
          >
            {/* Green glow */}
            <div
              className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-0 h-60 w-60 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)" }}
            />

            <div className="relative max-w-2xl">
              <p className="pill-dark">Referensi Terlengkap</p>
              <h2
                className="mt-5 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
              >
                Satu website.
                <br />
                <span style={{ color: "#fca5a5" }}>Semua aspek.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/40">
                Dari pengkajian resep dan rekonsiliasi obat, analisis BEP,
                perhitungan WACC, penyusunan RAPB, pemilihan supplier AHP, hingga
                laporan keuangan apotek — semuanya dalam satu referensi.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#layanan"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all"
                  style={{ background: "#dc2626" }}
                >
                  Jelajahi Materi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#akademik"
                  className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/50 transition-all hover:border-white/25 hover:text-white"
                >
                  Modul Praktik
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-8 border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {[
                  { val: "14", label: "Bab Materi" },
                  { val: "8", label: "Modul Praktik" },
                  { val: "2024", label: "Tahun Rilis" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-4xl font-bold"
                      style={{ fontFamily: "'Syne', sans-serif", color: "#fca5a5", letterSpacing: "-0.04em" }}
                    >
                      {s.val}
                    </p>
                    <p className="mt-1 text-xs text-white/30 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
