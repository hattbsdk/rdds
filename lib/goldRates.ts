// =============================================================================
// HISTORICAL GOLD RATES — per-gram averages in INR for 24K gold.
//
// The dataset below was supplied by the family. Values are 24K INR/gram per
// year. Other purities (22K, 18K, 14K) are derived from 24K via KARAT_PURITY.
//
// To extend, add another year-rate pair to RATES_24K (per gram, 24K, INR).
// =============================================================================

const RATES_24K: Record<number, number> = {
  1970: 18,
  1975: 40,
  1980: 130,
  1985: 200,
  1990: 340,
  1995: 470,
  2000: 445,
  2001: 455,
  2002: 490,
  2003: 525,
  2004: 580,
  2005: 640,
  2006: 855,
  2007: 975,
  2008: 1050,
  2009: 1450,
  2010: 1845,
  2011: 2450,
  2012: 2870,
  2013: 2840,
  2014: 2740,
  2015: 2520,
  2016: 2570,
  2017: 2900,
  2018: 3130,
  2019: 3550,
  2020: 4820,
  2021: 4760,
  2022: 5250,
  2023: 5950,
  2024: 7200,
};

// =============================================================================
// CURRENT RATE — used as the "today" price.
//
// People in India usually quote gold "per 10 grams" (per tola). The family
// asked us to display the familiar ₹95,300 figure, which is the per-10g rate;
// the math, however, uses the per-gram equivalent so the formulas line up
// cleanly with the historical table above.
// =============================================================================
export const CURRENT_RATE_DISPLAY_PER_10G = 95300; // INR / 10g, 24K
export const CURRENT_RATE_PER_GRAM_24K = CURRENT_RATE_DISPLAY_PER_10G / 10; // 9530

// =============================================================================
// PURITY MULTIPLIERS — fraction of pure (24K) gold by weight.
// 22K is ~91.67%; 18K is 75%; 14K is ~58.33%.
// =============================================================================
export const KARAT_PURITY = {
  "24K": 1,
  "22K": 22 / 24,
  "18K": 18 / 24,
  "14K": 14 / 24,
} as const;

export type Karat = keyof typeof KARAT_PURITY;

// =============================================================================
// CHARGES applied to the *initial* investment side only. Resale value (today)
// is treated as metal-only, no charges.
// =============================================================================
export const MAKING_CHARGE_RATE = 0.15; // 15% of metal cost
export const GST_RATE = 0.03; // 3% on metal cost (jewellery GST in India)

// =============================================================================
// Public helpers
// =============================================================================

export const HISTORICAL_YEARS: number[] = Object.keys(RATES_24K)
  .map(Number)
  .sort((a, b) => a - b);

export const MIN_YEAR = HISTORICAL_YEARS[0];
export const MAX_YEAR = HISTORICAL_YEARS[HISTORICAL_YEARS.length - 1];

// Rate per gram for any year + karat. If the year isn't in the dataset, we
// fall back to the nearest known year (linear interpolation between the two
// closest data points). This keeps the calculator usable for any year typed in.
export function ratePerGram(year: number, karat: Karat): number {
  const rate24k = interpolate24K(year);
  return rate24k * KARAT_PURITY[karat];
}

export function currentRatePerGram(karat: Karat): number {
  return CURRENT_RATE_PER_GRAM_24K * KARAT_PURITY[karat];
}

function interpolate24K(year: number): number {
  if (year <= MIN_YEAR) return RATES_24K[MIN_YEAR];
  if (year >= MAX_YEAR) return RATES_24K[MAX_YEAR];
  if (RATES_24K[year] !== undefined) return RATES_24K[year];

  let lower = MIN_YEAR;
  let upper = MAX_YEAR;
  for (const y of HISTORICAL_YEARS) {
    if (y <= year && y > lower) lower = y;
    if (y >= year && y < upper) upper = y;
  }
  const span = upper - lower || 1;
  const t = (year - lower) / span;
  return RATES_24K[lower] + t * (RATES_24K[upper] - RATES_24K[lower]);
}

// =============================================================================
// CALCULATOR — single function so logic lives in one place and is easy to test.
//
//   Initial Investment   = rate_then × grams × 1.15 × 1.03
//   Estimated Value Today = rate_now × grams
//   Absolute Gain         = Estimated Value Today − Initial Investment
//   Appreciation (%)      = (Absolute Gain ÷ Initial Investment) × 100
// =============================================================================
export type CalcInput = {
  year: number;
  grams: number;
  karat: Karat;
};

export type CalcResult = {
  basePrice: number;
  makingCharge: number;
  gst: number;
  initialInvestment: number;
  currentValue: number;
  absoluteGain: number;
  percentChange: number;
  ratePerGramThen: number;
  ratePerGramNow: number;
};

export function calculateInvestment({
  year,
  grams,
  karat,
}: CalcInput): CalcResult {
  const ratePerGramThen = ratePerGram(year, karat);
  const ratePerGramNow = currentRatePerGram(karat);

  const basePrice = ratePerGramThen * grams;
  const makingCharge = basePrice * MAKING_CHARGE_RATE;
  const gst = basePrice * GST_RATE;
  const initialInvestment = basePrice + makingCharge + gst;

  const currentValue = ratePerGramNow * grams;
  const absoluteGain = currentValue - initialInvestment;
  const percentChange =
    initialInvestment > 0 ? (absoluteGain / initialInvestment) * 100 : 0;

  return {
    basePrice,
    makingCharge,
    gst,
    initialInvestment,
    currentValue,
    absoluteGain,
    percentChange,
    ratePerGramThen,
    ratePerGramNow,
  };
}

export function formatINR(value: number): string {
  // Indian numbering — Intl handles the lakh/crore grouping when locale is en-IN.
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
