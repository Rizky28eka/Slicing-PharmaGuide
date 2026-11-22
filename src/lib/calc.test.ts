import { describe, expect, it } from "vitest";
import { bep, eoq, inventoryCost, turnover } from "./calc";

describe("eoq", () => {
  it("menghitung √(2DS/H)", () => {
    expect(eoq(12000, 150000, 2400)).toBeCloseTo(1224.74, 2);
  });
  it("mengembalikan 0 untuk masukan tidak valid", () => {
    expect(eoq(0, 1, 1)).toBe(0);
    expect(eoq(10, -1, 1)).toBe(0);
    expect(eoq(10, 1, 0)).toBe(0);
  });
});

describe("inventoryCost", () => {
  it("minimum berada di EOQ, biaya pesan sama dengan biaya simpan", () => {
    const q = eoq(12000, 150000, 2400);
    const atEoq = inventoryCost(12000, 150000, 2400, q);
    expect(inventoryCost(12000, 150000, 2400, q * 0.7)).toBeGreaterThan(atEoq);
    expect(inventoryCost(12000, 150000, 2400, q * 1.4)).toBeGreaterThan(atEoq);
    expect((12000 / q) * 150000).toBeCloseTo((q / 2) * 2400, 4);
  });
  it("tak hingga untuk q <= 0", () => {
    expect(inventoryCost(1, 1, 1, 0)).toBe(Infinity);
  });
});

describe("bep", () => {
  it("biaya tetap / (harga − biaya variabel)", () => {
    expect(bep(30_000_000, 25_000, 15_000)).toEqual({ units: 3000, revenue: 75_000_000 });
  });
  it("null bila margin tidak positif", () => {
    expect(bep(1000, 10, 10)).toBeNull();
    expect(bep(1000, 10, 12)).toBeNull();
  });
});

describe("turnover", () => {
  it("menghitung rasio, hari, dan status", () => {
    const t = turnover(1_200_000_000, 100_000_000, 100_000_000)!;
    expect(t.ratio).toBe(12);
    expect(t.days).toBeCloseTo(30.42, 2);
    expect(t.status).toBe("ideal");
  });
  it("status rendah di bawah 8 dan tinggi di atas 12", () => {
    expect(turnover(600, 100, 100)!.status).toBe("rendah");
    expect(turnover(1400, 100, 100)!.status).toBe("tinggi");
  });
  it("null bila masukan tidak valid", () => {
    expect(turnover(0, 1, 1)).toBeNull();
    expect(turnover(1, 0, 0)).toBeNull();
  });
});
