import { ArrowRight } from "lucide-react";

const stats = [
  { value: "14", label: "Bab\nMateri" },
  { value: "8", label: "Modul\nPraktik" },
  { value: "2024", label: "Tahun\nTerbit" },
  { value: "6", label: "Topik\nUtama" },
];

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-herbs.png"
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.85) 50%, rgba(8,8,8,0.5) 100%)",
          }}
        />
        {/* Green accent glow */}
        <div
          className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 pb-16 pt-36">
        {/* Main headline */}
        <div className="max-w-3xl">


          <h1
            className="text-7xl font-bold leading-none text-white md:text-8xl lg:text-[9rem]"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            Manajemen
            <br />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #dc2626, #fca5a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Farmasi.
            </em>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-white/50">
            Referensi komprehensif yang memadukan aspek <span className="text-white/80">manajerial</span>{" "}
            dan <span className="text-white/80">klinis</span> farmasi — dari perencanaan
            kebutuhan obat hingga analisis keuangan apotek dalam satu website terpadu.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#layanan"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#dc2626" }}
            >
              Eksplorasi Materi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/60 transition-all hover:border-white/25 hover:text-white"
            >
              Tentang Web
            </a>
          </div>
        </div>

        {/* Stats row at bottom */}
        <div className="mt-16 grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/5 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-1 px-7 py-6"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <span
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
              >
                {s.value}
              </span>
              <span className="whitespace-pre-line text-xs font-medium text-white/30 uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-[11px] font-medium text-white/25">
        <div className="h-px w-8" style={{ background: "#dc2626" }} />
        Scroll untuk eksplorasi
      </div>
    </section>
  );
};
