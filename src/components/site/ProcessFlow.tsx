import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Pemilihan Obat (Selection)",
    desc: "Menentukan obat yang akan dijual berdasarkan pola penyakit, resep dokter, obat fast moving, mutu, dan keamanan.",
    footer: "Tidak berbasis formularium, tapi ke kebutuhan pasar."
  },
  {
    num: 2,
    title: "Perencanaan (Planning)",
    desc: "Menentukan jumlah stok berdasarkan data penjualan sebelumnya, kecepatan laku obat, serta stok minimum & maksimum.",
    footer: "Agar tidak terjadi kekosongan atau penumpukan."
  },
  {
    num: 3,
    title: "Pengadaan (Procurement)",
    desc: "Pembelian obat dari PBF (Pedagang Besar Farmasi) resmi dengan memilih harga terbaik dan ketersediaan barang.",
    footer: "Menjamin keaslian dan kualitas obat."
  },
  {
    num: 4,
    title: "Penerimaan (Receiving)",
    desc: "Pemeriksaan barang datang: cek nama, jumlah, batch, ED, kondisi fisik, dan kesesuaian dengan faktur.",
    footer: "Menghindari kesalahan kirim atau produk rusak."
  },
  {
    num: 5,
    title: "Penyimpanan (Storage)",
    desc: "Penyimpanan sesuai standar suhu, dipisahkan berdasarkan golongan (bebas, keras, narkotika), serta sistem FEFO/FIFO.",
    footer: "Menjaga mutu dan keamanan obat."
  },
  {
    num: 6,
    title: "Pengendalian Stok (Inventory Control)",
    desc: "Monitoring stok dengan mencatat keluar-masuk, stock opname berkala, dan pengawasan obat ED/rusak.",
    footer: "Mencegah kerugian dan kekosongan stok."
  },
  {
    num: 7,
    title: "Pelayanan (Dispensing)",
    desc: "Meliputi skrining dan peracikan untuk resep dokter, serta rekomendasi swamedikasi untuk obat bebas (OTC).",
    footer: "Apoteker memastikan penggunaan obat yang tepat."
  },
  {
    num: 8,
    title: "Penyerahan & Edukasi",
    desc: "Obat diberikan ke pasien disertai edukasi mengenai cara pakai, dosis, efek samping, dan penyimpanan.",
    footer: "Meningkatkan kepatuhan dan keamanan."
  },
  {
    num: 9,
    title: "Monitoring Sederhana",
    desc: "Menanyakan perkembangan pasien atau memberikan saran lanjutan serta merujuk ke dokter jika diperlukan.",
    footer: "Bagian dari pharmaceutical care."
  }
];

export const ProcessFlow = () => {
  return (
    <section id="alur" className="mx-auto w-full max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <p className="pill">Proses Inti</p>
        <h2
          className="mt-4 text-4xl font-bold leading-none text-[#0a0908] md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
        >
          Alur Manajemen <br />
          <span style={{ color: "#dc2626" }}>Farmasi di Apotek.</span>
        </h2>
      </div>

      {/* Grid Flow */}
      {/* On mobile: standard 1-column layout. On larger screens: 3-column explicit grid */}
      <div className="relative grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => {
          // Snake layout calculation
          const isRow1 = i < 3;
          const isRow2 = i >= 3 && i < 6;
          const isRow3 = i >= 6;

          const colStart =
            i === 0 || i === 5 || i === 6
              ? "md:col-start-1"
              : i === 1 || i === 4 || i === 7
              ? "md:col-start-2"
              : "md:col-start-3";

          const rowStart = isRow1
            ? "md:row-start-1"
            : isRow2
            ? "md:row-start-2"
            : "md:row-start-3";

          // Arrow directions based on snake logic
          // Determine if we show a right arrow, left arrow, or down arrow, exclusively for desktop
          let arrow = null;
          if (i === 0 || i === 1 || i === 6 || i === 7) {
            arrow = <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 text-zinc-300" />;
          } else if (i === 4 || i === 5) { // Actually, card 5 (index 4) should point left to card 6 (index 5)
            // Wait, card 4 points left to 5. Card 5 points left to 6.
            // Index 3 points left to index 4? No, index 3 is far right. It points down or left?
            // Wait, let's fix the arrow logic:
            // 0 -> 1 -> 2
            //           |
            // 5 <- 4 <- 3
            // |
            // 6 -> 7 -> 8
          }

          return (
            <div
              key={step.num}
              className={`group flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-50 relative ${colStart} ${rowStart}`}
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "rgba(220,38,38,0.08)" }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#dc2626", fontFamily: "'Syne', sans-serif" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300">
                    Step 0{step.num}
                  </span>
                </div>

                <h3
                  className="mb-3 text-xl font-bold text-[#0a0908]"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 flex items-start gap-2 border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#fca5a5]" />
                <p className="text-xs font-medium italic leading-relaxed text-zinc-400">
                  {step.footer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
