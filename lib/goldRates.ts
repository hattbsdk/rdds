// =============================================================================
// HISTORICAL GOLD RATES — per-gram averages in INR for 24K gold.
//
// These are indicative annual averages drawn from public records. They are the
// only number maintained by hand; rates for other purities are derived from
// 24K. To extend the calculator, add another year-rate pair to RATES_24K.
//
// To keep the calculator current, update CURRENT_RATE_PER_GRAM_24K below — or
// swap the constant for a fetch from a free gold-price API (see fetchLiveRate
// stub at the bottom of this file).
// =============================================================================

// Annual average INR rate per gram for 24K gold.
// Source: indicative public averages — keep under review.
const RATES_24K: Record<number, number> = {
  1947: 88,
  1950: 99,
  1955: 79,
  1960: 111,
  1965: 71,
  1970: 184,
  1972: 202,
  1975: 540,
  1978: 685,
  1980: 1330,
  1982: 1645,
  1985: 2130,
  1988: 3130,
  1990: 3200,
  1992: 4334,
  1995: 4680,
  1998: 4045,
  2000: 4400,
  2002: 4990,
  2005: 7000,
  2007: 10800,
  2010: 18500,
  2011: 26400,
  2012: 31050,
  2013: 29600,
  2014: 28006,
  2015: 26343,
  2016: 28623,
  2017: 29667,
  2018: 31438,
  2019: 35220,
  2020: 48651,
  2021: 48720,
  2022: 52670,
  2023: 65330,
  2024: 72500,
  2025: 84500,
};

// =============================================================================
// CURRENT RATE — used as the "today" price on the calculator's right-hand side.
// Update this number as needed, or wire fetchLiveRate() to a provider.
// =============================================================================
export const CURRENT_RATE_PER_GRAM_24K = 95300; // INR / g, 24K — approx Apr 2026

// =============================================================================
// PURITY MULTIPLIERS — fraction of pure (24K) gold by weight.
// 22K is ~91.67%; 18K is 75%; 14K is ~58.33%; 10K is ~41.67%.
// =============================================================================
export const KARAT_PURITY = {
  "24K": 1,
  "22K": 22 / 24,
  "18K": 18 / 24,
  "14K": 14 / 24,
} as const;

export type Karat = keyof typeof KARAT_PURITY;

// =============================================================================
// CHARGES applied to the *initial* investment side only.
// The current value side is treated as resale — no making charges, no GST.
// =============================================================================
export const MAKING_CHARGE_RATE = 0.15; // 15% of metal cost
export const GST_RATE = 0.03; // 3% on metal cost (jewellery GST in India)

// =============================================================================
// Public helpers
// =============================================================================

// Years available in the dataset, sorted ascending — used to populate dropdowns.
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

  // Find the nearest known years on either side and interpolate linearly.
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
// =============================================================================
export type CalcInput = {
  year: number;
  grams: number;
  karat: Karat;
};

export type CalcResult = {
  basePrice: number; // metal cost only, no charges
  makingCharge: number;
  gst: number;
  initialInvestment: number; // base + making + gst
  currentValue: number; // grams × today's rate, no charges
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

// =============================================================================
// Optional: swap CURRENT_RATE_PER_GRAM_24K for a live fetch.
//
// Free providers (no key required at the time of writing):
//  - https://api.gold-api.com/price/XAU
//  - https://www.goldapi.io (requires key)
//
// Wire this into a server route or a periodic build-time fetch — never call
// directly from the client without rate limiting.
// =============================================================================
export async function fetchLiveRate(): Promise<number> {
  // TODO: hook up to a real provider before going live.
  return CURRENT_RATE_PER_GRAM_24K;
}
