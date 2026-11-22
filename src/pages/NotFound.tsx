import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => { document.title = "Halaman tidak ditemukan | Manajemen Farmasi"; }, []);
  return (
    <section className="section">
      <div className="wrap prose">
        <h1 className="page-title">Halaman tidak ditemukan</h1>
        <p>Alamat yang Anda buka tidak ada atau sudah dipindahkan. Mulai dari beranda, atau pilih salah satu topik.</p>
        <p><Link className="btn" to="/">Ke beranda</Link></p>
      </div>
    </section>
  );
}
