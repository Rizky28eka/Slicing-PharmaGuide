import {
  Pill,
  Package,
  TrendingUp,
  Truck,
  HeartPulse,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  chip: string;
  title: string;
  desc: string;
  image: string;
  cardImage: string;
  intro: string;
  subIntro: string;
  longDesc: string;
};

export const services: ServiceItem[] = [
  {
    slug: "pelayanan-kefarmasian",
    icon: Pill,
    chip: "Pelayanan",
    title: "Pelayanan Kefarmasian",
    desc: "Paradigma pelayanan kefarmasian kini bergeser dari sekadar pengelolaan obat menjadi layanan berpusat pada pasien — mencakup skrining resep, konseling, hingga pemantauan efek samping.",
    image: "https://manajemenfarmasi.vercel.app/services/pelayanan-kefarmasian.svg",
    cardImage: "/service-01.png",
    intro:
      "Pelayanan kefarmasian kontemporer mengedepankan konsep Pharmaceutical Care — apoteker tidak lagi hanya menyiapkan dan menyerahkan obat, tetapi turut memastikan setiap pasien mendapatkan terapi yang tepat, aman, dan efektif. Cakupannya meliputi pengkajian resep (administratif, farmasetik, klinis), dispensing, pemberian informasi obat (PIO), konseling, visite bersama tim medis, rekonsiliasi obat, serta pemantauan terapi obat (PTO).",
    subIntro: "Pelayanan yang terstandar, terdokumentasi, dan berfokus pada keselamatan pasien.",
    longDesc:
      "Menurut Bab 1 buku Manajemen Farmasi, pelayanan kefarmasian mencakup dua dimensi utama: pelayanan produk farmasi dan pelayanan farmasi klinis. Pada dimensi produk, apoteker memastikan setiap resep melewati tiga tahap skrining — administrasi (kelengkapan identitas), farmasetik (stabilitas, inkompatibilitas), dan klinis (indikasi, dosis, interaksi). Pada dimensi klinis, apoteker terlibat aktif dalam tim interprofesi untuk melakukan visite pasien, menelaah riwayat penggunaan obat, serta melaporkan efek samping melalui formulir MESO (Monitoring Efek Samping Obat) kepada Badan POM. Desain fisik apotek (Bab 2) — baik layout tradisional, semi-modern, maupun modern — turut dirancang untuk mendukung alur pelayanan yang efisien, dari area penerimaan resep hingga zona penyerahan dan konseling.",
  },
  {
    slug: "manajemen-persediaan-obat",
    icon: Package,
    chip: "Persediaan",
    title: "Manajemen Persediaan Obat",
    desc: "Ketersediaan obat yang optimal dicapai melalui kombinasi metode ABC, VEN, EOQ, dan sistem FIFO/FEFO — menjaga stok tetap cukup tanpa menimbulkan pemborosan akibat obat kedaluwarsa.",
    image: "https://manajemenfarmasi.vercel.app/services/manajemen-persediaan-obat.svg",
    cardImage: "/service-02.png",
    intro:
      "Pengelolaan persediaan obat yang baik bukan sekadar menghitung stok — melainkan menyeimbangkan ketersediaan dengan efisiensi investasi. Analisis ABC mengklasifikasikan obat berdasarkan nilai konsumsinya: kelompok A (10–20% item mencakup 70–80% nilai anggaran), kelompok B (menengah), dan kelompok C (item mayoritas, nilai terkecil). Analisis VEN menilai vitalitas obat: Vital (wajib ada), Esensial (perlu ada), dan Non-esensial.",
    subIntro: "Stok selalu optimal — tidak kurang, tidak berlebih, tidak kedaluwarsa.",
    longDesc:
      "Bab 5 buku Manajemen Farmasi menguraikan bahwa pengendalian persediaan membutuhkan pendekatan multi-metode. Economic Order Quantity (EOQ) dihitung dengan rumus EOQ = √(2DS/H), di mana D adalah permintaan tahunan, S biaya pemesanan, dan H biaya penyimpanan per unit — menghasilkan jumlah pesan optimal yang meminimalkan total biaya. Sistem FIFO (First In First Out) dan FEFO (First Expired First Out) memastikan obat dengan tanggal kedaluwarsa terdekat digunakan lebih dahulu. Indikator kinerja persediaan yang perlu dipantau secara berkala antara lain: Inventory Turnover Ratio (ITR) — idealnya 8–12 kali per tahun, tingkat ketersediaan obat (target >95%), persentase kesesuaian fisik dengan kartu stok, serta persentase obat kedaluwarsa terhadap total nilai persediaan.",
  },
  {
    slug: "forecasting-kebutuhan",
    icon: TrendingUp,
    chip: "Forecasting",
    title: "Forecasting & Perencanaan",
    desc: "Prediksi kebutuhan obat berbasis data historis pemakaian menggunakan metode konsumsi dan epidemiologi — menghindari kekosongan stok sekaligus mencegah overstock yang merugikan.",
    image: "https://manajemenfarmasi.vercel.app/services/forecasting-kebutuhan.svg",
    cardImage: "/service-03.png",
    intro:
      "Peramalan kebutuhan obat adalah fondasi dari seluruh siklus pengadaan di apotek dan rumah sakit. Tanpa prediksi yang akurat, fasilitas farmasi berisiko mengalami stockout (kehabisan stok) yang mengancam keselamatan pasien, atau overstocking yang membekukan modal dan meningkatkan risiko obat kedaluwarsa. Dua metode utama digunakan: metode konsumsi (historis pemakaian) dan metode morbiditas (pola penyakit setempat).",
    subIntro: "Data historis diubah menjadi rencana pengadaan yang akurat dan hemat biaya.",
    longDesc:
      "Bab 3 buku Manajemen Farmasi menjelaskan bahwa metode konsumsi menghitung rata-rata penggunaan obat pada periode lampau, dengan penyesuaian untuk pertumbuhan pasien dan perubahan pola penyakit. Metode epidemiologi menggunakan data prevalensi penyakit, jumlah kasus per diagnosis, dan standar dosis pengobatan (standar terapi) untuk menghitung total kebutuhan obat per periode. Teknik kuantitatif seperti Moving Average, Weighted Moving Average, dan Exponential Smoothing membantu memperhalus fluktuasi data historis. Bab 12 melengkapi pembahasan dengan panduan penyusunan Business Plan apotek — termasuk proyeksi omzet, analisis pasar, dan studi kelayakan finansial — sebagai kerangka perencanaan strategis jangka panjang.",
  },
  {
    slug: "logistik-farmasi",
    icon: Truck,
    chip: "Logistik",
    title: "Logistik & Distribusi Farmasi",
    desc: "Pengelolaan rantai pasok farmasi secara end-to-end — pengadaan dari PBF, penerimaan, penyimpanan berstandar, hingga distribusi ke unit pelayanan menggunakan sistem Floor Stock, IP, atau Unit Dose.",
    image: "https://manajemenfarmasi.vercel.app/services/logistik-farmasi.svg",
    cardImage: "/service-04.png",
    intro:
      "Logistik farmasi bukan sekadar proses pengiriman obat — melainkan sistem terintegrasi yang memastikan obat yang tepat, dalam jumlah tepat, tiba di tempat yang tepat, pada waktu yang tepat, dan dengan kondisi mutu yang terjaga. Rantai ini dimulai dari seleksi pemasok (PBF — Pedagang Besar Farmasi), proses pemesanan, penerimaan dan verifikasi, penyimpanan sesuai persyaratan (suhu, kelembaban, cahaya), hingga distribusi internal.",
    subIntro: "Setiap pergerakan obat terlacak — dari gudang PBF hingga ke tangan pasien.",
    longDesc:
      "Bab 4 dan 13 buku Manajemen Farmasi menguraikan bahwa instalasi farmasi rumah sakit mengenal tiga sistem distribusi obat: (1) Floor Stock — obat tersedia di setiap ruang perawatan untuk kebutuhan segera tanpa menunggu resep individual; (2) Individual Prescription — setiap obat disiapkan berdasarkan resep per pasien untuk periode tertentu; dan (3) Unit Dose Dispensing (UDD) — obat disiapkan dalam dosis tunggal siap pakai per pemberian, meminimalkan kesalahan pemberian obat dan pemborosan. Bab 14 membahas manajemen supplier menggunakan Analytical Hierarchy Process (AHP) — metode pengambilan keputusan multi-kriteria yang mengevaluasi vendor berdasarkan bobot prioritas: kualitas produk, harga kompetitif, ketepatan pengiriman, kelengkapan dokumen, dan layanan purna jual.",
  },
  {
    slug: "farmasi-klinik",
    icon: HeartPulse,
    chip: "Klinik",
    title: "Farmasi Klinik",
    desc: "Apoteker klinis hadir di samping pasien — melakukan monitoring terapi, mengidentifikasi Drug Related Problems (DRP), melaksanakan rekonsiliasi obat, dan berkolaborasi aktif dalam tim medis.",
    image: "https://manajemenfarmasi.vercel.app/services/farmasi-klinik.svg",
    cardImage: "/service-05.png",
    intro:
      "Farmasi klinik menempatkan apoteker bukan di balik meja dispensing, melainkan aktif di ruang perawatan bersama pasien dan tim dokter. Fokus utamanya adalah memastikan setiap keputusan terapi obat aman dan efektif bagi pasien secara individual — dengan mempertimbangkan kondisi klinis, fungsi organ, riwayat alergi, dan interaksi antar obat yang digunakan secara bersamaan.",
    subIntro: "Dari resep ke hasil terapi — apoteker memastikan setiap langkah aman bagi pasien.",
    longDesc:
      "Bab 11 buku Manajemen Farmasi merinci delapan kegiatan inti farmasi klinik: (1) Pengkajian dan Pelayanan Resep; (2) Penelusuran Riwayat Penggunaan Obat — memeriksa seluruh obat yang digunakan pasien termasuk swamedikasi; (3) Rekonsiliasi Obat — membandingkan daftar obat sebelum masuk RS dengan yang diresepkan untuk mencegah duplikasi atau penghentian tiba-tiba; (4) Pelayanan Informasi Obat (PIO); (5) Konseling — edukasi penggunaan obat yang benar kepada pasien dan keluarga; (6) Visite bersama dokter; (7) Pemantauan Terapi Obat (PTO) — mendeteksi efek samping, toksisitas, dan kegagalan terapi; serta (8) Monitoring Efek Samping Obat (MESO). Evaluasi Penggunaan Obat (EPO) dilakukan berkala baik secara kuantitatif (DDD — Defined Daily Dose) maupun kualitatif (kesesuaian dengan formularium) untuk mendorong rasionalitas terapi.",
  },
  {
    slug: "laporan-keuangan",
    icon: Receipt,
    chip: "Keuangan",
    title: "Analisis Keuangan & Anggaran",
    desc: "Kesehatan finansial apotek diukur melalui analisis BEP, perhitungan WACC, penyusunan RAPB, dan pelaporan Neraca-Laba Rugi-Arus Kas yang memberikan gambaran komprehensif kinerja operasional.",
    image: "https://manajemenfarmasi.vercel.app/services/laporan-keuangan.svg",
    cardImage: "/service-06.png",
    intro:
      "Pengelolaan keuangan apotek yang profesional jauh melampaui pencatatan transaksi harian. Ia mencakup perencanaan anggaran yang matang, pengukuran titik impas usaha, analisis struktur modal, serta kemampuan membaca laporan keuangan untuk mendeteksi tren dan mengambil keputusan strategis yang tepat waktu.",
    subIntro: "Dari perencanaan anggaran hingga analisis laporan — keputusan finansial berbasis data.",
    longDesc:
      "Bab 6 membahas analisis Break Even Point (BEP) — titik di mana total pendapatan sama dengan total biaya — menggunakan rumus BEP (unit) = Biaya Tetap / (Harga - Biaya Variabel per unit), penting untuk menilai kelayakan lokasi dan skala bisnis apotek. Bab 7 mengulas strategi penetapan harga jasa kefarmasian dan harga jual obat resep. Bab 8 membahas analisis modal: Weighted Average Cost of Capital (WACC) menghitung biaya rata-rata dari seluruh sumber pendanaan (utang bank, modal sendiri) dengan bobot proporsional — menjadi tolok ukur minimum tingkat pengembalian investasi. Bab 9 memandu penyusunan Rencana Anggaran Pendapatan dan Biaya (RAPB) tahunan, mencakup proyeksi penjualan, estimasi biaya tetap (sewa, gaji, utilitas) dan variabel (HPP obat, kemasan). Bab 10 menjabarkan analisis tiga laporan keuangan utama: Neraca (posisi aset-liabilitas-ekuitas), Laporan Laba Rugi (kinerja pendapatan dan beban), serta Laporan Arus Kas (likuiditas operasional, investasi, pendanaan).",
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
