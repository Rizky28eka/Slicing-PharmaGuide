import { Link } from "react-router-dom";
import { topics } from "@/data/topics";

/** Tiga lingkaran logo golongan obat di kemasan: bebas, bebas terbatas, keras. */
export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size * 1.9} height={size} viewBox="0 0 38 20" aria-hidden="true">
      <circle cx="9" cy="10" r="7" fill="var(--bebas)" />
      <circle cx="19" cy="10" r="7" fill="var(--terbatas)" />
      <circle cx="29" cy="10" r="7" fill="var(--keras)" />
    </svg>
  );
}

const links = [
  ["alur", "Alur kerja"],
  ["topik", "Topik"],
  ["alat", "Alat hitung"],
  ["modul", "Modul"],
  ["tentang", "Tentang"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Link to="/" className="brand" aria-label="Manajemen Farmasi, ke beranda">
          <Mark />
          <span>Manajemen Farmasi</span>
        </Link>
        <nav className="site-nav" aria-label="Utama">
          {links.map(([id, label]) => (
            <Link key={id} to={{ pathname: "/", hash: id }}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <Link to="/" className="brand"><Mark /><span>Manajemen Farmasi</span></Link>
          <p className="site-footer__note">
            Ringkasan belajar dari buku Manajemen Farmasi. Hak cipta buku ada pada para penulis dan penerbit.
          </p>
        </div>
        <div>
          <h2 className="site-footer__h">Topik</h2>
          <ul>
            {topics.map((t) => (
              <li key={t.slug}><Link to={`/layanan/${t.slug}`}>{t.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__h">Sumber</h2>
          <p className="site-footer__cite">
            Prasetyawan, F., Serdiani, FISQua, Arief, I., Anggraini, R., Sarifudin, B. A., Suhery, D., Pratama, M. W.,
            Yuniar, C. R., Ihsan, M., Madiati, N., Mayasari, S., Hasanah, R., Andika, M., &amp; Syavardie, Y. (2024).
            <em> Manajemen Farmasi</em>. PT Pena Muda Media.
          </p>
        </div>
      </div>
    </footer>
  );
}
