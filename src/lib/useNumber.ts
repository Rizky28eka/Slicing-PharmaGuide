import { useState } from "react";
import { num } from "./format";

/** Nilai angka dari kolom teks. Teks disimpan apa adanya agar pengguna bisa mengetik bebas. */
export function useNumber(initial: number) {
  const [text, setText] = useState(num(initial));
  const cleaned = text.replace(/\./g, "").replace(",", ".");
  const value = cleaned.trim() === "" ? NaN : Number(cleaned);
  /** Rapikan teks dengan pemisah ribuan saat kolom ditinggalkan. */
  const format = () => { if (Number.isFinite(value)) setText(num(value)); };
  return { text, setText, value, format };
}
