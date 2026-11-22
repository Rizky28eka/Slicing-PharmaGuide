import { bep, turnover } from "@/lib/calc";
import { num, num1, rupiah } from "@/lib/format";
import { useNumber } from "@/lib/useNumber";
import { Field } from "./Field";

export function BepCard() {
  const fixed = useNumber(30000000);
  const price = useNumber(25000);
  const variable = useNumber(15000);
  const r = bep(fixed.value, price.value, variable.value);

  return (
    <section className="sheet sheet--plain" aria-labelledby="bep-title">
      <header className="sheet__head">
        <h3 id="bep-title">Titik impas (BEP)</h3>
        <p>Berapa unit yang harus terjual agar pendapatan sama dengan biaya.</p>
      </header>
      <div className="sheet__fields">
        <Field label="Biaya tetap" hint="sewa, gaji, utilitas per periode" unit="Rp" text={fixed.text} onChange={fixed.setText} onBlur={fixed.format} />
        <Field label="Harga jual per unit" unit="Rp" text={price.text} onChange={price.setText} onBlur={price.format} />
        <Field label="Biaya variabel per unit" hint="HPP, kemasan" unit="Rp" text={variable.text} onChange={variable.setText} onBlur={variable.format} />
      </div>
      {r ? (
        <dl className="sheet__result sheet__result--two" aria-live="polite">
          <div className="sheet__main">
            <dt>Titik impas</dt>
            <dd>{num(r.units)} <span>unit</span></dd>
          </div>
          <div>
            <dt>Setara pendapatan</dt>
            <dd>{rupiah(r.revenue)}</dd>
          </div>
        </dl>
      ) : (
        <p className="sheet__empty" role="status">Harga jual harus lebih besar dari biaya variabel per unit.</p>
      )}
      <footer className="sheet__foot">BEP (unit) = Biaya Tetap / (Harga − Biaya Variabel per unit).</footer>
    </section>
  );
}

const verdict = {
  rendah: "Di bawah target 8 kali: stok cenderung menumpuk dan modal tertahan.",
  ideal: "Dalam target 8 sampai 12 kali per tahun.",
  tinggi: "Di atas target: pastikan ketersediaan obat tetap di atas 95%.",
} as const;

export function ItrCard() {
  const cogs = useNumber(1200000000);
  const open = useNumber(90000000);
  const close = useNumber(110000000);
  const r = turnover(cogs.value, open.value, close.value);

  return (
    <section className="sheet sheet--plain" aria-labelledby="itr-title">
      <header className="sheet__head">
        <h3 id="itr-title">Perputaran persediaan (ITR)</h3>
        <p>Seberapa cepat stok berputar menjadi penjualan dalam setahun.</p>
      </header>
      <div className="sheet__fields">
        <Field label="Harga pokok penjualan setahun" unit="Rp" text={cogs.text} onChange={cogs.setText} onBlur={cogs.format} />
        <Field label="Persediaan awal tahun" unit="Rp" text={open.text} onChange={open.setText} onBlur={open.format} />
        <Field label="Persediaan akhir tahun" unit="Rp" text={close.text} onChange={close.setText} onBlur={close.format} />
      </div>
      {r ? (
        <>
          <dl className="sheet__result sheet__result--two" aria-live="polite">
            <div className="sheet__main">
              <dt>Perputaran</dt>
              <dd>{num1(r.ratio)} <span>kali/tahun</span></dd>
            </div>
            <div>
              <dt>Rata-rata stok tersimpan</dt>
              <dd>{num(r.days)} <span>hari</span></dd>
            </div>
          </dl>
          <p className={`sheet__verdict sheet__verdict--${r.status}`} role="status">{verdict[r.status]}</p>
        </>
      ) : (
        <p className="sheet__empty" role="status">Isi harga pokok penjualan dan persediaan dengan nilai lebih dari nol.</p>
      )}
      <footer className="sheet__foot">ITR = HPP / rata-rata persediaan. Target ideal 8 sampai 12 kali per tahun.</footer>
    </section>
  );
}
