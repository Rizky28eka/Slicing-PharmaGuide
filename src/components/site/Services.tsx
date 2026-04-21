import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const Services = () => {
  return (
    <section id="layanan" className="py-24" style={{ background: "#080808" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="pill-dark">Materi Web</p>
            <h2
              className="mt-3 text-5xl font-bold text-white md:text-6xl"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
            >
              6 Topik
              <br />
              <span style={{ color: "#dc2626" }}>Utama.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            Empat belas bab dirangkum menjadi enam topik besar. Teori, metode terapan, dan contoh implementasi nyata di apotek dan rumah sakit Indonesia.
          </p>
        </div>

        {/* Numbered service list */}
        <div className="space-y-0">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/layanan/${s.slug}`}
              className="group grid items-center gap-6 border-t py-8 transition-all duration-300 hover:pl-2 md:grid-cols-12"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  className="num-badge"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#dc2626", fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Category chip */}
              <div className="md:col-span-2">
                <span className="chip-outline">{s.chip}</span>
              </div>

              {/* Title + desc */}
              <div className="md:col-span-6">
                <h3
                  className="text-2xl font-bold text-white transition-colors group-hover:text-[#fca5a5] md:text-3xl"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/30 transition-colors group-hover:text-white/50">
                  {s.desc}
                </p>
              </div>

              {/* Thumbnail */}
              <div className="hidden overflow-hidden rounded-xl md:col-span-2 md:block">
                <img
                  src={s.cardImage}
                  alt={s.title}
                  className="h-20 w-full object-cover opacity-40 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Arrow */}
              <div className="flex justify-end md:col-span-1">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all group-hover:border-[#dc2626] group-hover:text-[#dc2626]"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}

          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>
    </section>
  );
};
