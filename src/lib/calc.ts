/** Rumus manajemen farmasi yang dipakai alat hitung. Murni, tanpa efek samping. */

/** Economic Order Quantity: EOQ = √(2DS/H). */
export function eoq(demand: number, orderCost: number, holdingCost: number): number {
  if (demand <= 0 || orderCost <= 0 || holdingCost <= 0) return 0;
  return Math.sqrt((2 * demand * orderCost) / holdingCost);
}

/** Total biaya persediaan tahunan untuk jumlah pesan q: biaya pesan + biaya simpan. */
export function inventoryCost(demand: number, orderCost: number, holdingCost: number, q: number): number {
  if (q <= 0) return Infinity;
  return (demand / q) * orderCost + (q / 2) * holdingCost;
}

export type Bep = { units: number; revenue: number };

/** Break Even Point: unit = biaya tetap / (harga − biaya variabel per unit). */
export function bep(fixedCost: number, price: number, variableCost: number): Bep | null {
  const margin = price - variableCost;
  if (fixedCost < 0 || price <= 0 || margin <= 0) return null;
  const units = fixedCost / margin;
  return { units, revenue: units * price };
}

export type Turnover = { ratio: number; days: number; status: "rendah" | "ideal" | "tinggi" };

/** Inventory Turnover Ratio = HPP / rata-rata persediaan. Target ideal 8 sampai 12 kali per tahun. */
export function turnover(cogs: number, openingStock: number, closingStock: number): Turnover | null {
  const average = (openingStock + closingStock) / 2;
  if (cogs <= 0 || average <= 0) return null;
  const ratio = cogs / average;
  return { ratio, days: 365 / ratio, status: ratio < 8 ? "rendah" : ratio <= 12 ? "ideal" : "tinggi" };
}
