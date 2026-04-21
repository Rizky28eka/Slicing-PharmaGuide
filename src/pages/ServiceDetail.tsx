import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getServiceBySlug, services } from "@/data/services";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (service) {
      document.title = `${service.title} — Manajemen Farmasi`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", service.intro.slice(0, 155));
    }
  }, [service]);

  if (!service) return <NotFound />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="detail" />

      {/* ── Full-screen dark hero ── */}
      <section
        className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden px-6 pb-16 pt-28"
        style={{ background: "#080808" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={service.cardImage}
            alt=""
            className="h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,8,8,1) 30%, rgba(8,8,8,0.5) 100%)" }}
          />
        </div>

        {/* Breadcrumb */}
        <div className="relative mx-auto w-full max-w-6xl">
          <nav className="mb-8 flex items-center gap-2" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/#layanan" className="hover:text-white transition-colors">Materi Buku</Link>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: "#fca5a5" }}>{service.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: "#dc2626" }}
            >
              <Icon className="h-4 w-4 text-white" />
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
            >
              {service.chip}
            </span>
          </div>

          <h1
            className="text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em", lineHeight: 1.08 }}
          >
            {service.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/40">
            {service.subIntro}
          </p>
        </div>
      </section>

      {/* ── Split content ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Main text */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "#dc2626" }}
              >
                Ringkasan
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {service.intro}
              </p>
            </div>

            <div
              className="h-px w-full"
              style={{ background: "rgba(0,0,0,0.06)" }}
            />

            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "#dc2626" }}
              >
                Pembahasan Mendalam
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">{service.desc}</p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">{service.longDesc}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Meta card */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(0,0,0,0.06)", background: "#fdfdfc" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "#dc2626" }}
              >
                Info Materi
              </p>
              <dl className="mt-5 space-y-4">
                {[
                  ["Kategori", service.chip],
                  ["Sumber", "Buku Manajemen Farmasi"],
                  ["Penerbit", "PT Penamuda Media"],
                  ["Tahun", "2024 · Edisi Pertama"],
                ].map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className="text-[11px] text-zinc-400 uppercase tracking-wider">{dt}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-zinc-800">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* More topics */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(0,0,0,0.06)", background: "#fdfdfc" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "#dc2626" }}
              >
                Topik Lain
              </p>
              <ul className="mt-4 space-y-1">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/layanan/${s.slug}`}
                        className="group flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition-all hover:bg-zinc-50 hover:text-zinc-900"
                      >
                        <s.icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#dc2626" }} />
                        {s.title}
                        <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related dark section ── */}
      <section className="py-20" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="pill-dark mb-3">Materi Terkait</p>
          <h2
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            Eksplorasi Topik Lainnya
          </h2>

          <div className="mt-12 space-y-0">
            {related.map((s, i) => (
              <Link
                key={s.slug}
                to={`/layanan/${s.slug}`}
                className="group grid items-center gap-6 border-t py-7 transition-all hover:pl-2 md:grid-cols-12"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="md:col-span-1">
                  <span style={{ color: "#dc2626", fontFamily: "'Syne', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <span
                    className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
                  >
                    {s.chip}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3
                    className="text-2xl font-bold text-white transition-colors group-hover:text-[#fca5a5]"
                    style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/30">{s.desc}</p>
                </div>
                <div className="flex justify-end md:col-span-2">
                  <img
                    src={s.cardImage}
                    alt=""
                    className="h-16 w-24 rounded-lg object-cover opacity-35 transition-opacity group-hover:opacity-70"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
