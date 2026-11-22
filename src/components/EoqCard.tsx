import { eoq, inventoryCost } from "@/lib/calc";
import { num, num1, rupiah } from "@/lib/format";
import { useNumber } from "@/lib/useNumber";
import { Field } from "./Field";

const W = 440;
const H = 200;
const PAD = { l: 8, r: 8, t: 14, b: 26 };

/** Kurva biaya persediaan: biaya pesan turun, biaya simpan naik, jumlahnya terendah di EOQ. */
function CostChart({ d, s, h, q }: { d: number; s: number; h: number; q: number }) {
  const lo = q * 0.3;
  const hi = q * 2.2;
  const x = (v: number) => PAD.l + ((v - lo) / (hi - lo)) * (W - PAD.l - PAD.r);
  const base = inventoryCost(d, s, h, q);
  const yMax = base * 3.3;
  const y = (v: number) => PAD.t + (1 - Math.min(v, yMax) / yMax) * (H - PAD.t - PAD.b);

  const steps = 64;
  const pts = (fn: (v: number) => number) =>
    Array.from({ length: steps + 1 }, (_, i) => {
      const v = lo + ((hi - lo) * i) / steps;
      return `${i === 0 ? "M" : "L"}${x(v).toFixed(1)},${y(fn(v)).toFixed(1)}`;
    }).join(" ");

  const order = pts((v) => (d / v) * s);
  const hold = pts((v) => (v / 2) * h);
  const total = pts((v) => inventoryCost(d, s, h, v));

  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img"
      aria-label={`Kurva biaya persediaan. Biaya total terendah ${rupiah(base)} per tahun pada jumlah pesan ${num(q)} unit.`}>
      <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} className="chart__axis" />
      <path d={order} className="chart__line chart__line--order" />
      <path d={hold} className="chart__line chart__line--hold" />
      <path d={total} className="chart__line chart__line--total" pathLength={1} />
      <line x1={x(q)} x2={x(q)} y1={PAD.t} y2={H - PAD.b} className="chart__eoq" />
      <circle cx={x(q)} cy={y(base)} r="5" className="chart__dot" />
      <text x={x(q)} y={H - 8} textAnchor="middle" className="chart__tick">EOQ {num(q)}</text>
      <text x={W - PAD.r} y={H - 8} textAnchor="end" className="chart__tick">jumlah per pesanan</text>
      <g className="chart__legend" transform={`translate(${W - 250}, 18)`}>
        <line x1="0" x2="18" y1="0" y2="0" className="chart__line chart__line--total" />
        <text x="24" y="4" className="chart__key">total</text>
        <line x1="64" x2="82" y1="0" y2="0" className="chart__line chart__line--order" />
        <text x="88" y="4" className="chart__key chart__key--order">biaya pesan</text>
        <line x1="166" x2="184" y1="0" y2="0" className="chart__line chart__line--hold" />
        <text x="190" y="4" className="chart__key chart__key--hold">simpan</text>
      </g>
    </svg>
  );
}

export function EoqCard({ id }: { id?: string }) {
  const D = useNumber(12000);
  const S = useNumber(150000);
  const Hc = useNumber(2400);

  const q = eoq(D.value, S.value, Hc.value);
  const ok = q > 0;
  const cost = ok ? inventoryCost(D.value, S.value, Hc.value, q) : NaN;
  const orders = ok ? D.value / q : NaN;

  return (
    <section className="sheet" id={id} aria-labelledby="eoq-title">
      <header className="sheet__head">
        <h2 id="eoq-title">Kartu hitung: jumlah pesan ekonomis</h2>
        <p>Ubah angkanya, lihat kurva dan hasilnya bergeser.</p>
      </header>

      <div className="sheet__fields">
        <Field label="Permintaan setahun (D)" unit="unit" text={D.text} onChange={D.setText} onBlur={D.format} />
        <Field label="Biaya setiap kali pesan (S)" unit="Rp" text={S.text} onChange={S.setText} onBlur={S.format} />
        <Field label="Biaya simpan per unit setahun (H)" unit="Rp" text={Hc.text} onChange={Hc.setText} onBlur={Hc.format} />
      </div>

      {ok ? (
        <>
          <dl className="sheet__result" aria-live="polite">
            <div className="sheet__main">
              <dt>Jumlah pesan ekonomis</dt>
              <dd>{num(q)} <span>unit</span></dd>
            </div>
            <div>
              <dt>Frekuensi pesan</dt>
              <dd>{num1(orders)} <span>kali/tahun</span></dd>
            </div>
            <div>
              <dt>Biaya persediaan</dt>
              <dd>{rupiah(cost)} <span>/tahun</span></dd>
            </div>
          </dl>
          <CostChart d={D.value} s={S.value} h={Hc.value} q={q} />
        </>
      ) : (
        <p className="sheet__empty" role="status">Isi ketiga angka dengan nilai lebih dari nol untuk melihat hasilnya.</p>
      )}

      <footer className="sheet__foot">EOQ = √(2DS/H). Biaya pesan dan biaya simpan sama besar tepat di titik EOQ.</footer>
    </section>
  );
}
