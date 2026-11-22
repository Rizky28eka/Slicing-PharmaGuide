import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BepCard, ItrCard } from "@/components/Calculators";
import { EoqCard } from "@/components/EoqCard";
import { getTopic, topics } from "@/data/topics";
import NotFound from "./NotFound";

/** Uraian panjang dipecah di batas kalimat agar nyaman dibaca. */
function toParagraphs(text: string, target = 330): string[] {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z(])/);
  const out: string[] = [];
  let buf = "";
  for (const s of sentences) {
    buf = buf ? `${buf} ${s}` : s;
    if (buf.length >= target) { out.push(buf); buf = ""; }
  }
  if (buf) out.push(buf);
  return out;
}

export default function TopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTopic(slug);

  useEffect(() => {
    if (!topic) return;
    document.title = `${topic.title} | Manajemen Farmasi`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", topic.lede);
  }, [topic]);

  if (!topic) return <NotFound />;

  const index = topics.findIndex((t) => t.slug === topic.slug);
  const prev = topics[(index - 1 + topics.length) % topics.length];
  const next = topics[(index + 1) % topics.length];

  return (
    <article className="topic-page">
      <div className="wrap">
        <nav className="crumbs" aria-label="Jejak halaman">
          <Link to="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <Link to={{ pathname: "/", hash: "topik" }}>Topik</Link>
        </nav>

        <header className="topic-page__head">
          <h1 className="page-title">{topic.title}</h1>
          <p className="topic-page__lede">{topic.lede}</p>
          <p className="topic-page__meta">Bersumber dari {topic.chapters} buku Manajemen Farmasi</p>
        </header>

        <div className="topic-page__grid">
          <div className="prose">
            <p className="prose__lead">{topic.intro}</p>
            {toParagraphs(topic.body).map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <aside className="aside" aria-label="Ringkasan">
            <h2>Poin kunci</h2>
            <ul>
              {topic.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <h2>Istilah kunci</h2>
            <p className="aside__term">{topic.keyTerm}</p>
          </aside>
        </div>

        {topic.tools.length > 0 ? (
          <section className="topic-page__tools" aria-label="Alat hitung terkait">
            <h2>Coba hitung sendiri</h2>
            <div className="tools">
              {topic.tools.includes("eoq") ? <EoqCard /> : null}
              {topic.tools.includes("itr") ? <ItrCard /> : null}
              {topic.tools.includes("bep") ? <BepCard /> : null}
            </div>
          </section>
        ) : null}

        <nav className="pager" aria-label="Topik lain">
          <Link to={`/layanan/${prev.slug}`}><small>Sebelumnya</small><span>{prev.title}</span></Link>
          <Link to={`/layanan/${next.slug}`}><small>Berikutnya</small><span>{next.title}</span></Link>
        </nav>
      </div>
    </article>
  );
}
