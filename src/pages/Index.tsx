import { Link } from "react-router-dom";
import { BepCard, ItrCard } from "@/components/Calculators";
import { EoqCard } from "@/components/EoqCard";
import { FlowExplorer } from "@/components/FlowExplorer";
import { modules } from "@/data/modules";
import { topics } from "@/data/topics";

export default function Index() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1>Cara apotek dikelola, dari memilih obat sampai memantau pasien.</h1>
            <p className="hero__lede">
              Referensi belajar manajemen farmasi untuk mahasiswa dan praktisi. Empat belas bab buku dirangkum menjadi
              sembilan langkah alur kerja, enam topik, dan alat hitung yang bisa Anda coba langsung.
            </p>
            <div className="hero__cta">
              <Link className="btn" to={{ pathname: "/", hash: "alur" }}>Ikuti alurnya</Link>
              <Link className="textlink" to={{ pathname: "/", hash: "topik" }}>Lihat enam topik</Link>
            </div>
          </div>
          <EoqCard />
        </div>
      </section>

      <section className="section" id="alur" aria-labelledby="alur-h">
        <div className="wrap">
          <div className="section__head">
            <h2 id="alur-h">Alur kerja apotek, sembilan langkah</h2>
            <p>Pilih satu langkah untuk melihat apa yang dikerjakan, mengapa, dan di topik mana langkah itu dibahas lebih dalam.</p>
          </div>
          <FlowExplorer />
        </div>
      </section>

      <section className="section section--tint" id="topik" aria-labelledby="topik-h">
        <div className="wrap">
          <div className="section__head">
            <h2 id="topik-h">Enam topik besar</h2>
            <p>Empat belas bab buku dirangkum menjadi enam topik. Setiap topik berisi ringkasan, uraian lengkap, dan istilah kunci.</p>
          </div>
          <ul className="topics">
            {topics.map((t) => (
              <li key={t.slug}>
                <Link to={`/layanan/${t.slug}`} className="topic">
                  <div className="topic__main">
                    <h3>{t.title}</h3>
                    <p>{t.summary}</p>
                  </div>
                  <div className="topic__meta">
                    <span className="topic__term">{t.keyTerm}</span>
                    <span className="topic__ch">{t.chapters}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="alat" aria-labelledby="alat-h">
        <div className="wrap">
          <div className="section__head">
            <h2 id="alat-h">Alat hitung</h2>
            <p>
              Dua rumus lain yang sering dipakai di apotek. Isi dengan angka Anda sendiri; semua dihitung di browser dan
              tidak ada yang dikirim ke mana pun. Kartu pesanan ekonomis (EOQ) ada di bagian atas halaman ini.
            </p>
          </div>
          <div className="tools">
            <BepCard />
            <ItrCard />
          </div>
        </div>
      </section>

      <section className="section section--tint" id="modul" aria-labelledby="modul-h">
        <div className="wrap">
          <div className="section__head">
            <h2 id="modul-h">Delapan modul pengayaan</h2>
            <p>Materi tambahan di luar enam topik, untuk memperdalam praktik di lapangan.</p>
          </div>
          <dl className="modules">
            {modules.map((m) => (
              <div key={m.title}>
                <dt>{m.title}</dt>
                <dd>{m.focus}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" id="tentang" aria-labelledby="tentang-h">
        <div className="wrap about">
          <div className="section__head">
            <h2 id="tentang-h">Tentang referensi ini</h2>
          </div>
          <div className="about__body">
            <p>
              Situs ini merangkum buku <em>Manajemen Farmasi</em> (Prasetyawan dkk., 2024) menjadi bahan belajar yang bisa
              dijelajahi, untuk menjembatani akademisi dan praktisi farmasi di Indonesia.
            </p>
            <dl>
              <dt>Komprehensif dan terpadu</dt>
              <dd>Dari desain tata ruang apotek, siklus logistik, metode ABC/VEN/EOQ, farmasi klinik, hingga laporan keuangan.</dd>
              <dt>Praktik terapan</dt>
              <dd>Delapan modul praktik dan simulasi kasus dari situasi dunia nyata.</dd>
              <dt>Pharmaceutical care</dt>
              <dd>Pendekatan berpusat pada pasien: pengkajian resep, rekonsiliasi obat, visite, pemantauan terapi, dan MESO.</dd>
              <dt>Berbasis data</dt>
              <dd>EOQ, Moving Average, AHP, BEP, dan WACC, dengan rumus, contoh hitung, dan kasus nyata.</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
