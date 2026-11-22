import { useState } from "react";
import { Link } from "react-router-dom";
import { steps } from "@/data/steps";
import { getTopic } from "@/data/topics";

/** Logo golongan obat di kemasan, relevan untuk langkah penyimpanan. */
function DrugClasses() {
  return (
    <ul className="classes" aria-label="Golongan obat yang dipisahkan saat penyimpanan">
      <li><i className="dot dot--bebas" aria-hidden="true" />Obat bebas</li>
      <li><i className="dot dot--terbatas" aria-hidden="true" />Obat bebas terbatas</li>
      <li><i className="dot dot--keras" aria-hidden="true" />Obat keras</li>
      <li><i className="dot dot--narkotika" aria-hidden="true" />Narkotika</li>
    </ul>
  );
}

export function FlowExplorer() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const topic = getTopic(step.topic);

  return (
    <div className="flow">
      <ol className="flow__list">
        {steps.map((s, i) => (
          <li key={s.n}>
            <button
              type="button"
              className="flow__step"
              aria-current={i === active ? "step" : undefined}
              onClick={() => setActive(i)}
            >
              <span className="flow__n">{s.n}</span>
              <span className="flow__t">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <article className="flow__panel" aria-live="polite" key={step.n}>
        <p className="flow__term">Langkah {step.n} dari {steps.length}{step.term ? `, dalam buku disebut ${step.term}` : ""}</p>
        <h3>{step.title}</h3>
        <p className="flow__what">{step.what}</p>
        <p className="flow__goal"><strong>Tujuannya:</strong> {step.goal}</p>
        {step.n === 5 ? <DrugClasses /> : null}
        {topic ? (
          <p className="flow__more">
            Dibahas lebih dalam di <Link to={`/layanan/${topic.slug}`}>{topic.title}</Link>.
          </p>
        ) : null}
        <div className="flow__nav">
          <button type="button" onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}>Sebelumnya</button>
          <button type="button" onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))} disabled={active === steps.length - 1}>Berikutnya</button>
        </div>
      </article>
    </div>
  );
}
