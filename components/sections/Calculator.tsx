"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CURRENT_RATE_PER_GRAM_24K,
  MAX_YEAR,
  MIN_YEAR,
  calculateInvestment,
  formatINR,
  type Karat,
} from "@/lib/goldRates";
import Reveal from "@/components/ui/Reveal";

const KARATS: Karat[] = ["24K", "22K", "18K", "14K"];

export default function Calculator() {
  const [year, setYear] = useState<number>(1985);
  const [grams, setGrams] = useState<number>(10);
  const [karat, setKarat] = useState<Karat>("22K");

  const result = useMemo(
    () => calculateInvestment({ year, grams, karat }),
    [year, grams, karat],
  );

  const isGain = result.absoluteGain >= 0;

  return (
    <section
      id="calculator"
      className="relative px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-deep">
                Old gold, today
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[2.2rem] leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                What would that piece be worth now?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[46ch] text-pretty text-[1rem] leading-relaxed text-graphite">
                Tell us when a piece was bought, what it weighs, and the
                karat. We&rsquo;ll show how the metal alone would have moved
                since. Useful before any conversation about exchange or
                resetting an heirloom.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted">
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>
                  Indicative only — based on annual average rates and a
                  current 24K reference of{" "}
                  <strong className="font-medium text-graphite">
                    {formatINR(CURRENT_RATE_PER_GRAM_24K)}
                  </strong>
                  /g.
                </span>
              </p>
            </Reveal>
          </div>

          {/* Calculator panel — double-bezel */}
          <Reveal delay={0.18} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.18)]">
              <div className="rounded-[calc(2rem-0.5rem)] bg-ivory p-6 sm:p-9">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <Field label="Year of purchase">
                    <input
                      type="number"
                      min={MIN_YEAR}
                      max={MAX_YEAR}
                      value={year}
                      onChange={(e) =>
                        setYear(
                          clamp(Number(e.target.value) || MIN_YEAR, MIN_YEAR, MAX_YEAR),
                        )
                      }
                      className="input"
                      aria-label="Year of purchase"
                    />
                    <Helper>
                      Between {MIN_YEAR} and {MAX_YEAR}.
                    </Helper>
                  </Field>

                  <Field label="Weight (grams)">
                    <input
                      type="number"
                      min={0.1}
                      step={0.1}
                      value={grams}
                      onChange={(e) =>
                        setGrams(Math.max(0, Number(e.target.value) || 0))
                      }
                      className="input"
                      aria-label="Weight in grams"
                    />
                    <Helper>Decimals allowed.</Helper>
                  </Field>

                  <Field label="Karat purity">
                    <div className="flex rounded-full border border-line/70 bg-bone/40 p-1">
                      {KARATS.map((k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setKarat(k)}
                          aria-pressed={karat === k}
                          className={`flex-1 rounded-full px-2 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ease-soft ${
                            karat === k
                              ? "bg-charcoal text-ivory"
                              : "text-graphite hover:text-charcoal"
                          }`}
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                    <Helper>22K is the most common for jewellery.</Helper>
                  </Field>
                </div>

                <div className="hairline mt-9" />

                <motion.div
                  layout
                  className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2"
                >
                  <Stat
                    label="Initial investment"
                    sub={`${formatINR(result.ratePerGramThen)}/g · incl. 15% making, 3% GST`}
                    value={formatINR(result.initialInvestment)}
                  />
                  <Stat
                    label="Estimated value today"
                    sub={`${formatINR(result.ratePerGramNow)}/g · resale, no charges`}
                    value={formatINR(result.currentValue)}
                  />
                </motion.div>

                <motion.div
                  layout
                  className="mt-6 grid grid-cols-1 gap-6 rounded-[1.25rem] border border-line/70 bg-bone/30 p-6 sm:grid-cols-2"
                >
                  <Stat
                    label="Absolute gain"
                    value={`${isGain ? "+" : ""}${formatINR(result.absoluteGain)}`}
                    accent={isGain ? "gain" : "loss"}
                  />
                  <Stat
                    label="Appreciation"
                    value={`${isGain ? "+" : ""}${result.percentChange.toFixed(1)}%`}
                    accent={isGain ? "gain" : "loss"}
                  />
                </motion.div>

                <p className="mt-6 text-xs text-muted">
                  This calculator reflects the metal value alone. Stones,
                  craftsmanship, and provenance are valued separately at the
                  showroom.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--brand-line);
          border-radius: 14px;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--brand-charcoal);
          transition: border-color 300ms var(--ease-soft),
            box-shadow 300ms var(--ease-soft);
        }
        .input:focus {
          outline: none;
          border-color: var(--brand-gold-deep);
          box-shadow: 0 0 0 3px rgba(176, 138, 74, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}

function Helper({ children }: { children: React.ReactNode }) {
  return <span className="text-[0.72rem] text-muted">{children}</span>;
}

function Stat({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: "gain" | "loss";
}) {
  const accentColor =
    accent === "gain"
      ? "text-gold-deep"
      : accent === "loss"
        ? "text-graphite"
        : "text-charcoal";
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p
        className={`mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl ${accentColor}`}
      >
        {value}
      </p>
      {sub && <p className="mt-2 text-[0.78rem] text-muted">{sub}</p>}
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}
