export type Step = {
  n: number;
  /** Nama langkah dalam bahasa Indonesia. */
  title: string;
  /** Padanan istilah Inggris yang dipakai di buku. */
  term: string;
  what: string;
  goal: string;
  /** Topik tempat langkah ini dibahas lebih dalam. */
  topic: string;
};

export const steps: Step[] = [
  { n: 1, title: "Pemilihan Obat", term: "Selection", what: "Menentukan obat yang akan dijual berdasarkan pola penyakit, resep dokter, obat fast moving, mutu, dan keamanan.", goal: "Tidak berbasis formularium, tapi ke kebutuhan pasar.", topic: "forecasting-kebutuhan" },
  { n: 2, title: "Perencanaan", term: "Planning", what: "Menentukan jumlah stok berdasarkan data penjualan sebelumnya, kecepatan laku obat, serta stok minimum & maksimum.", goal: "Agar tidak terjadi kekosongan atau penumpukan.", topic: "forecasting-kebutuhan" },
  { n: 3, title: "Pengadaan", term: "Procurement", what: "Pembelian obat dari PBF (Pedagang Besar Farmasi) resmi dengan memilih harga terbaik dan ketersediaan barang.", goal: "Menjamin keaslian dan kualitas obat.", topic: "logistik-farmasi" },
  { n: 4, title: "Penerimaan", term: "Receiving", what: "Pemeriksaan barang datang: cek nama, jumlah, batch, ED, kondisi fisik, dan kesesuaian dengan faktur.", goal: "Menghindari kesalahan kirim atau produk rusak.", topic: "logistik-farmasi" },
  { n: 5, title: "Penyimpanan", term: "Storage", what: "Penyimpanan sesuai standar suhu, dipisahkan berdasarkan golongan (bebas, keras, narkotika), serta sistem FEFO/FIFO.", goal: "Menjaga mutu dan keamanan obat.", topic: "manajemen-persediaan-obat" },
  { n: 6, title: "Pengendalian Stok", term: "Inventory Control", what: "Monitoring stok dengan mencatat keluar-masuk, stock opname berkala, dan pengawasan obat ED/rusak.", goal: "Mencegah kerugian dan kekosongan stok.", topic: "manajemen-persediaan-obat" },
  { n: 7, title: "Pelayanan", term: "Dispensing", what: "Meliputi skrining dan peracikan untuk resep dokter, serta rekomendasi swamedikasi untuk obat bebas (OTC).", goal: "Apoteker memastikan penggunaan obat yang tepat.", topic: "pelayanan-kefarmasian" },
  { n: 8, title: "Penyerahan & Edukasi", term: "", what: "Obat diberikan ke pasien disertai edukasi mengenai cara pakai, dosis, efek samping, dan penyimpanan.", goal: "Meningkatkan kepatuhan dan keamanan.", topic: "pelayanan-kefarmasian" },
  { n: 9, title: "Monitoring Sederhana", term: "", what: "Menanyakan perkembangan pasien atau memberikan saran lanjutan serta merujuk ke dokter jika diperlukan.", goal: "Bagian dari pharmaceutical care.", topic: "farmasi-klinik" },
];
