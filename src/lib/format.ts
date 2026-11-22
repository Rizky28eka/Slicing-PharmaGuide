const nf = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 });
const nf1 = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 });

export const num = (n: number) => (Number.isFinite(n) ? nf.format(n) : "-");
export const num1 = (n: number) => (Number.isFinite(n) ? nf1.format(n) : "-");
export const rupiah = (n: number) => (Number.isFinite(n) ? `Rp ${nf.format(Math.round(n))}` : "-");
