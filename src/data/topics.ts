export type Tool = "eoq" | "itr" | "bep";

export type Topic = {
  slug: string;
  title: string;
  /** Satu kalimat untuk daftar topik. */
  summary: string;
  intro: string;
  /** Kalimat pembuka halaman topik. */
  lede: string;
  /** Uraian panjang (dipecah menjadi paragraf saat ditampilkan). */
  body: string;
  chapters: string;
  /** Istilah atau rumus paling khas untuk topik ini. */
  keyTerm: string;
  points: string[];
  tools: Tool[];
};

export const topics: Topic[] = [
  {
    slug: "pelayanan-kefarmasian",
    title: "Pelayanan Kefarmasian",
    summary: "Paradigma pelayanan kefarmasian kini bergeser dari sekadar pengelolaan obat menjadi layanan berpusat pada pasien — mencakup skrining resep, konseling, hingga pemantauan efek samping.",
    intro: "Pelayanan kefarmasian kontemporer mengedepankan konsep Pharmaceutical Care — apoteker tidak lagi hanya menyiapkan dan menyerahkan obat, tetapi turut memastikan setiap pasien mendapatkan terapi yang tepat, aman, dan efektif. Cakupannya meliputi pengkajian resep (administratif, farmasetik, klinis), dispensing, pemberian informasi obat (PIO), konseling, visite bersama tim medis, rekonsiliasi obat, serta pemantauan terapi obat (PTO).",
    lede: "Pelayanan yang terstandar, terdokumentasi, dan berfokus pada keselamatan pasien.",
    body: "Menurut Bab 1 buku Manajemen Farmasi, pelayanan kefarmasian mencakup dua dimensi utama: pelayanan produk farmasi dan pelayanan farmasi klinis. Pada dimensi produk, apoteker memastikan setiap resep melewati tiga tahap skrining — administrasi (kelengkapan identitas), farmasetik (stabilitas, inkompatibilitas), dan klinis (indikasi, dosis, interaksi). Pada dimensi klinis, apoteker terlibat aktif dalam tim interprofesi untuk melakukan visite pasien, menelaah riwayat penggunaan obat, serta melaporkan efek samping melalui formulir MESO (Monitoring Efek Samping Obat) kepada Badan POM. Desain fisik apotek (Bab 2) — baik layout tradisional, semi-modern, maupun modern — turut dirancang untuk mendukung alur pelayanan yang efisien, dari area penerimaan resep hingga zona penyerahan dan konseling.",
    chapters: "Bab 1–2",
    keyTerm: "Skrining resep: administratif, farmasetik, klinis",
    points: [
      "Pelayanan mencakup dua sisi: produk farmasi dan farmasi klinis.",
      "Setiap resep melewati tiga tahap skrining: administrasi, farmasetik, dan klinis.",
      "Efek samping obat dilaporkan lewat formulir MESO kepada Badan POM.",
      "Tata letak apotek (tradisional, semi-modern, modern) menentukan kelancaran alur dari penerimaan resep sampai konseling.",
    ],
    tools: [],
  },
  {
    slug: "manajemen-persediaan-obat",
    title: "Manajemen Persediaan Obat",
    summary: "Ketersediaan obat yang optimal dicapai melalui kombinasi metode ABC, VEN, EOQ, dan sistem FIFO/FEFO — menjaga stok tetap cukup tanpa menimbulkan pemborosan akibat obat kedaluwarsa.",
    intro: "Pengelolaan persediaan obat yang baik bukan sekadar menghitung stok — melainkan menyeimbangkan ketersediaan dengan efisiensi investasi. Analisis ABC mengklasifikasikan obat berdasarkan nilai konsumsinya: kelompok A (10–20% item mencakup 70–80% nilai anggaran), kelompok B (menengah), dan kelompok C (item mayoritas, nilai terkecil). Analisis VEN menilai vitalitas obat: Vital (wajib ada), Esensial (perlu ada), dan Non-esensial.",
    lede: "Stok selalu optimal — tidak kurang, tidak berlebih, tidak kedaluwarsa.",
    body: "Bab 5 buku Manajemen Farmasi menguraikan bahwa pengendalian persediaan membutuhkan pendekatan multi-metode. Economic Order Quantity (EOQ) dihitung dengan rumus EOQ = √(2DS/H), di mana D adalah permintaan tahunan, S biaya pemesanan, dan H biaya penyimpanan per unit — menghasilkan jumlah pesan optimal yang meminimalkan total biaya. Sistem FIFO (First In First Out) dan FEFO (First Expired First Out) memastikan obat dengan tanggal kedaluwarsa terdekat digunakan lebih dahulu. Indikator kinerja persediaan yang perlu dipantau secara berkala antara lain: Inventory Turnover Ratio (ITR) — idealnya 8–12 kali per tahun, tingkat ketersediaan obat (target >95%), persentase kesesuaian fisik dengan kartu stok, serta persentase obat kedaluwarsa terhadap total nilai persediaan.",
    chapters: "Bab 5",
    keyTerm: "EOQ = √(2DS/H)",
    points: [
      "Analisis ABC: kelompok A adalah 10–20% item yang menyerap 70–80% nilai anggaran.",
      "Analisis VEN menilai vitalitas obat: Vital, Esensial, Non-esensial.",
      "EOQ menghasilkan jumlah pesan yang meminimalkan total biaya.",
      "FIFO dan FEFO: obat yang lebih dulu masuk atau lebih dulu kedaluwarsa keluar lebih dulu.",
      "Target kinerja: Inventory Turnover 8–12 kali per tahun dan ketersediaan obat di atas 95%.",
    ],
    tools: ["eoq", "itr"],
  },
  {
    slug: "forecasting-kebutuhan",
    title: "Forecasting & Perencanaan",
    summary: "Prediksi kebutuhan obat berbasis data historis pemakaian menggunakan metode konsumsi dan epidemiologi — menghindari kekosongan stok sekaligus mencegah overstock yang merugikan.",
    intro: "Peramalan kebutuhan obat adalah fondasi dari seluruh siklus pengadaan di apotek dan rumah sakit. Tanpa prediksi yang akurat, fasilitas farmasi berisiko mengalami stockout (kehabisan stok) yang mengancam keselamatan pasien, atau overstocking yang membekukan modal dan meningkatkan risiko obat kedaluwarsa. Dua metode utama digunakan: metode konsumsi (historis pemakaian) dan metode morbiditas (pola penyakit setempat).",
    lede: "Data historis diubah menjadi rencana pengadaan yang akurat dan hemat biaya.",
    body: "Bab 3 buku Manajemen Farmasi menjelaskan bahwa metode konsumsi menghitung rata-rata penggunaan obat pada periode lampau, dengan penyesuaian untuk pertumbuhan pasien dan perubahan pola penyakit. Metode epidemiologi menggunakan data prevalensi penyakit, jumlah kasus per diagnosis, dan standar dosis pengobatan (standar terapi) untuk menghitung total kebutuhan obat per periode. Teknik kuantitatif seperti Moving Average, Weighted Moving Average, dan Exponential Smoothing membantu memperhalus fluktuasi data historis. Bab 12 melengkapi pembahasan dengan panduan penyusunan Business Plan apotek — termasuk proyeksi omzet, analisis pasar, dan studi kelayakan finansial — sebagai kerangka perencanaan strategis jangka panjang.",
    chapters: "Bab 3 dan 12",
    keyTerm: "Metode konsumsi dan epidemiologi",
    points: [
      "Metode konsumsi: rata-rata pemakaian masa lalu, disesuaikan dengan pertumbuhan pasien dan pola penyakit.",
      "Metode epidemiologi: prevalensi penyakit, jumlah kasus per diagnosis, dan standar terapi.",
      "Moving Average, Weighted Moving Average, dan Exponential Smoothing menghaluskan fluktuasi data.",
      "Salah ramal berakibat stockout yang membahayakan pasien, atau overstock yang membekukan modal.",
    ],
    tools: [],
  },
  {
    slug: "logistik-farmasi",
    title: "Logistik & Distribusi Farmasi",
    summary: "Pengelolaan rantai pasok farmasi secara end-to-end — pengadaan dari PBF, penerimaan, penyimpanan berstandar, hingga distribusi ke unit pelayanan menggunakan sistem Floor Stock, IP, atau Unit Dose.",
    intro: "Logistik farmasi bukan sekadar proses pengiriman obat — melainkan sistem terintegrasi yang memastikan obat yang tepat, dalam jumlah tepat, tiba di tempat yang tepat, pada waktu yang tepat, dan dengan kondisi mutu yang terjaga. Rantai ini dimulai dari seleksi pemasok (PBF — Pedagang Besar Farmasi), proses pemesanan, penerimaan dan verifikasi, penyimpanan sesuai persyaratan (suhu, kelembaban, cahaya), hingga distribusi internal.",
    lede: "Setiap pergerakan obat terlacak — dari gudang PBF hingga ke tangan pasien.",
    body: "Bab 4 dan 13 buku Manajemen Farmasi menguraikan bahwa instalasi farmasi rumah sakit mengenal tiga sistem distribusi obat: (1) Floor Stock — obat tersedia di setiap ruang perawatan untuk kebutuhan segera tanpa menunggu resep individual; (2) Individual Prescription — setiap obat disiapkan berdasarkan resep per pasien untuk periode tertentu; dan (3) Unit Dose Dispensing (UDD) — obat disiapkan dalam dosis tunggal siap pakai per pemberian, meminimalkan kesalahan pemberian obat dan pemborosan. Bab 14 membahas manajemen supplier menggunakan Analytical Hierarchy Process (AHP) — metode pengambilan keputusan multi-kriteria yang mengevaluasi vendor berdasarkan bobot prioritas: kualitas produk, harga kompetitif, ketepatan pengiriman, kelengkapan dokumen, dan layanan purna jual.",
    chapters: "Bab 4, 13, dan 14",
    keyTerm: "Floor Stock, IP, Unit Dose",
    points: [
      "Rantai logistik: seleksi PBF, pemesanan, penerimaan, penyimpanan (suhu, kelembaban, cahaya), distribusi.",
      "Tiga sistem distribusi di rumah sakit: Floor Stock, Individual Prescription, dan Unit Dose.",
      "AHP menilai pemasok dengan bobot: kualitas, harga, ketepatan kirim, kelengkapan dokumen, layanan purna jual.",
    ],
    tools: [],
  },
  {
    slug: "farmasi-klinik",
    title: "Farmasi Klinik",
    summary: "Apoteker klinis hadir di samping pasien — melakukan monitoring terapi, mengidentifikasi Drug Related Problems (DRP), melaksanakan rekonsiliasi obat, dan berkolaborasi aktif dalam tim medis.",
    intro: "Farmasi klinik menempatkan apoteker bukan di balik meja dispensing, melainkan aktif di ruang perawatan bersama pasien dan tim dokter. Fokus utamanya adalah memastikan setiap keputusan terapi obat aman dan efektif bagi pasien secara individual — dengan mempertimbangkan kondisi klinis, fungsi organ, riwayat alergi, dan interaksi antar obat yang digunakan secara bersamaan.",
    lede: "Dari resep ke hasil terapi — apoteker memastikan setiap langkah aman bagi pasien.",
    body: "Bab 11 buku Manajemen Farmasi merinci delapan kegiatan inti farmasi klinik: (1) Pengkajian dan Pelayanan Resep; (2) Penelusuran Riwayat Penggunaan Obat — memeriksa seluruh obat yang digunakan pasien termasuk swamedikasi; (3) Rekonsiliasi Obat — membandingkan daftar obat sebelum masuk RS dengan yang diresepkan untuk mencegah duplikasi atau penghentian tiba-tiba; (4) Pelayanan Informasi Obat (PIO); (5) Konseling — edukasi penggunaan obat yang benar kepada pasien dan keluarga; (6) Visite bersama dokter; (7) Pemantauan Terapi Obat (PTO) — mendeteksi efek samping, toksisitas, dan kegagalan terapi; serta (8) Monitoring Efek Samping Obat (MESO). Evaluasi Penggunaan Obat (EPO) dilakukan berkala baik secara kuantitatif (DDD — Defined Daily Dose) maupun kualitatif (kesesuaian dengan formularium) untuk mendorong rasionalitas terapi.",
    chapters: "Bab 11",
    keyTerm: "DRP, rekonsiliasi, PTO",
    points: [
      "Delapan kegiatan inti: pengkajian resep, riwayat penggunaan obat, rekonsiliasi, PIO, konseling, visite, PTO, MESO.",
      "Rekonsiliasi membandingkan daftar obat sebelum masuk rumah sakit dengan yang diresepkan.",
      "EPO dilakukan secara kuantitatif (DDD) dan kualitatif (kesesuaian formularium).",
    ],
    tools: [],
  },
  {
    slug: "laporan-keuangan",
    title: "Analisis Keuangan & Anggaran",
    summary: "Kesehatan finansial apotek diukur melalui analisis BEP, perhitungan WACC, penyusunan RAPB, dan pelaporan Neraca-Laba Rugi-Arus Kas yang memberikan gambaran komprehensif kinerja operasional.",
    intro: "Pengelolaan keuangan apotek yang profesional jauh melampaui pencatatan transaksi harian. Ia mencakup perencanaan anggaran yang matang, pengukuran titik impas usaha, analisis struktur modal, serta kemampuan membaca laporan keuangan untuk mendeteksi tren dan mengambil keputusan strategis yang tepat waktu.",
    lede: "Dari perencanaan anggaran hingga analisis laporan — keputusan finansial berbasis data.",
    body: "Bab 6 membahas analisis Break Even Point (BEP) — titik di mana total pendapatan sama dengan total biaya — menggunakan rumus BEP (unit) = Biaya Tetap / (Harga - Biaya Variabel per unit), penting untuk menilai kelayakan lokasi dan skala bisnis apotek. Bab 7 mengulas strategi penetapan harga jasa kefarmasian dan harga jual obat resep. Bab 8 membahas analisis modal: Weighted Average Cost of Capital (WACC) menghitung biaya rata-rata dari seluruh sumber pendanaan (utang bank, modal sendiri) dengan bobot proporsional — menjadi tolok ukur minimum tingkat pengembalian investasi. Bab 9 memandu penyusunan Rencana Anggaran Pendapatan dan Biaya (RAPB) tahunan, mencakup proyeksi penjualan, estimasi biaya tetap (sewa, gaji, utilitas) dan variabel (HPP obat, kemasan). Bab 10 menjabarkan analisis tiga laporan keuangan utama: Neraca (posisi aset-liabilitas-ekuitas), Laporan Laba Rugi (kinerja pendapatan dan beban), serta Laporan Arus Kas (likuiditas operasional, investasi, pendanaan).",
    chapters: "Bab 6–10",
    keyTerm: "BEP = BT / (P − BV)",
    points: [
      "BEP (unit) = Biaya Tetap / (Harga − Biaya Variabel per unit).",
      "WACC adalah biaya rata-rata seluruh sumber dana, dan menjadi batas minimum tingkat pengembalian.",
      "RAPB tahunan memuat proyeksi penjualan, biaya tetap (sewa, gaji, utilitas), dan biaya variabel (HPP, kemasan).",
      "Tiga laporan utama: Neraca, Laba Rugi, dan Arus Kas.",
    ],
    tools: ["bep"],
  },
];

export const getTopic = (slug?: string) => topics.find((t) => t.slug === slug);
