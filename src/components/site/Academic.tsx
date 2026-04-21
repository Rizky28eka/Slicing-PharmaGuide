import { BookOpen, Stethoscope, Calculator, Truck, FileText, Activity, ShieldCheck, HeartPulse } from "lucide-react";

const modules = [
  { title: "Evaluasi Resep", subtitle: "Kajian Klinis", category: "Pengkajian", icon: FileText },
  { title: "Manajemen Stok", subtitle: "Metode ABC/VEN", category: "Logistik", icon: Truck },
  { title: "Analisis Finansial", subtitle: "BEP & ROI", category: "Keuangan", icon: Calculator },
  { title: "Edukasi Pasien", subtitle: "Komunikasi Efektif", category: "Klinikal", icon: HeartPulse },
  { title: "Rekonsiliasi", subtitle: "Transisi Perawatan", category: "Farmasi", icon: Stethoscope },
  { title: "Pemantauan (PTO)", subtitle: "Evaluasi Terapi", category: "Klinikal", icon: Activity },
  { title: "Keselamatan (MESO)", subtitle: "Monitoring Efek", category: "Keamanan", icon: ShieldCheck },
  { title: "Regulasi", subtitle: "Aspek Hukum & Etika", category: "Hukum", icon: BookOpen },
];

export const Academic = () => {
  return (
    <section id="akademik" className="mx-auto w-full max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="pill">Pengayaan</p>
          <h2
            className="mt-3 text-5xl font-bold text-[#0a0908] md:text-6xl"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            Materi Tambahan
            <br />
            <span style={{ color: "#dc2626" }}>Komprehensif.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
          Modul pengayaan di luar topik utama untuk melengkapi pengetahuan praktis Anda di lapangan.
        </p>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "rgba(0,0,0,0.06)", background: "#fdfdfc" }}
            >
              <div className="flex h-32 items-center justify-center bg-zinc-50 transition-colors group-hover:bg-[#fef2f2]">
                <Icon className="h-10 w-10 text-zinc-300 transition-colors group-hover:text-[#dc2626]" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <p
                  className="text-sm font-bold leading-snug text-[#0a0908]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {m.title}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  {m.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
