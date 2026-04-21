import { BookOpen, Users, Microscope, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    number: "14",
    unit: "Bab",
    title: "Komprehensif & Terpadu",
    desc: "Dari desain tata ruang apotek, siklus logistik, metode ABC/VEN/EOQ, farmasi klinik, hingga laporan keuangan. Satu website, semua aspek.",
  },
  {
    icon: Users,
    number: "8",
    unit: "Modul",
    title: "Praktik Terapan",
    desc: "Delapan modul praktik dan simulasi kasus dari situasi dunia nyata untuk memperdalam pemahaman.",
  },
  {
    icon: Microscope,
    number: "",
    unit: "Klinis",
    title: "Pharmaceutical Care",
    desc: "Pendekatan patient-oriented: pengkajian resep, rekonsiliasi obat, visite, pemantauan terapi, dan MESO.",
  },
  {
    icon: TrendingUp,
    number: "",
    unit: "Analitik",
    title: "Berbasis Data",
    desc: "Metode EOQ, Moving Average, AHP, BEP, WACC — tersaji dengan formula, contoh hitung, dan kasus nyata.",
  },
];

export const About = () => {
  return (
    <section id="tentang" className="mx-auto w-full max-w-6xl px-6 py-24">

      {/* ── 1. Section Header — 2 column ── */}
      <div className="grid items-end gap-10 border-b pb-16 md:grid-cols-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div>
          <p className="pill">Tentang Web</p>
          <h2
            className="mt-4 text-5xl font-bold leading-none text-[#0a0908] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            Lebih dari
            <br />
            <span style={{ color: "#dc2626" }}>textbook.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-4">
          <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
            Referensi yang menjembatani akademisi dan praktisi farmasi di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* ── 2. Feature Strip — 4 cards ── */}
      <div className="mt-0 grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group flex flex-col gap-5 p-8 transition-colors hover:bg-[#fff5f5]"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.06)",
                borderRight: i < 3 ? undefined : "none",
              }}
            >
              {/* Icon + number */}
              <div className="flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "rgba(220,38,38,0.08)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#dc2626" }} />
                </div>
                {f.number && (
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "'Syne', sans-serif", color: "#dc2626", letterSpacing: "-0.04em" }}
                  >
                    {f.number}
                  </span>
                )}
                {!f.number && (
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}
                  >
                    {f.unit}
                  </span>
                )}
              </div>

              {/* Text */}
              <div>
                {f.number && (
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">{f.unit}</p>
                )}
                <h3
                  className="mt-1 text-lg font-bold text-[#0a0908]"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── 3. Mission — full width alternating layout ── */}
      <div
        className="mt-12 grid overflow-hidden rounded-3xl lg:grid-cols-5"
        style={{ background: "#0a0908" }}
      >
        {/* Left: text */}
        <div className="flex flex-col justify-between gap-8 p-10 lg:col-span-3 lg:p-14">
          <div>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
            >
              Mission
            </span>
            <h3
              className="mt-6 text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
            >
              Mengapa Web Ini
              <br />
              <span style={{ color: "#fca5a5" }}>Ditulis?</span>
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              Web{" "}
              <span className="font-medium text-white/80">Manajemen Farmasi</span>{" "}
              lahir dari kesenjangan antara teori akademik dan tuntutan lapangan.
              Platform ini menjawab dua pertanyaan kritis:
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Bagaimana farmasi dapat dikelola secara efisien tanpa mengorbankan kualitas layanan?",
              "Bagaimana pelayanan tetap berpusat pada keselamatan pasien di tengah tekanan operasional nyata?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                  style={{ background: "#dc2626", color: "#fff" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/60">{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[260px] lg:col-span-2">
          <img
            src="/mission-team.png"
            alt="Tim penulis berdiskusi"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0a0908 0%, rgba(10,9,8,0) 60%)",
            }}
          />
        </div>
      </div>

    </section>
  );
};
