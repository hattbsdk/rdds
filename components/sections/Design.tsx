"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import {
  suggestDesign,
  type Budget,
  type DesignBrief,
  type Occasion,
  type PieceType,
  type StonePref,
  type Timeline,
} from "@/lib/designSuggestion";

const occasions: { value: Occasion; label: string }[] = [
  { value: "wedding", label: "Wedding" },
  { value: "engagement", label: "Engagement" },
  { value: "anniversary", label: "Anniversary" },
  { value: "investment", label: "Investment" },
  { value: "everyday", label: "Everyday" },
  { value: "reset", label: "Heirloom reset" },
  { value: "other", label: "Something else" },
];

const pieces: { value: PieceType; label: string }[] = [
  { value: "necklace", label: "Necklace" },
  { value: "earrings", label: "Earrings" },
  { value: "ring", label: "Ring" },
  { value: "bangles", label: "Bangles" },
  { value: "suite", label: "Full suite" },
  { value: "open", label: "Tell us" },
];

const budgets: { value: Budget; label: string }[] = [
  { value: "under-2", label: "Under \u20B92L" },
  { value: "2-5", label: "\u20B92\u20135L" },
  { value: "5-10", label: "\u20B95\u201310L" },
  { value: "10-plus", label: "\u20B910L+" },
  { value: "open", label: "Open" },
];

const timelines: { value: Timeline; label: string }[] = [
  { value: "1m", label: "Within a month" },
  { value: "1-3m", label: "1\u20133 months" },
  { value: "3-6m", label: "3\u20136 months" },
  { value: "flexible", label: "Flexible" },
];

const stones: { value: StonePref; label: string }[] = [
  { value: "polki", label: "Polki" },
  { value: "kundan", label: "Kundan" },
  { value: "solitaire", label: "Solitaire" },
  { value: "coloured", label: "Coloured stones" },
  { value: "open", label: "Open" },
];

export default function Design() {
  const [brief, setBrief] = useState<DesignBrief>({
    occasion: "wedding",
    pieceType: "necklace",
    budget: "5-10",
    timeline: "1-3m",
    styleAxis: 2,
    weightAxis: 3,
    stonePref: "polki",
    notes: "",
  });

  const suggestion = useMemo(() => suggestDesign(brief), [brief]);

  const update = <K extends keyof DesignBrief>(k: K, v: DesignBrief[K]) =>
    setBrief((b) => ({ ...b, [k]: v }));

  return (
    <section
      id="design"
      className="relative px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep sm:text-[0.78rem] sm:tracking-[0.28em]">
                Talk design
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-[20ch] font-serif text-[2.2rem] leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Tell us what you have in mind.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="max-w-[44ch] text-pretty text-[0.98rem] leading-relaxed text-graphite">
                A few questions, the kind we&rsquo;d ask if you walked in.
                As you answer, the panel on the right writes back &mdash;
                roughly what we&rsquo;d reach for at the bench.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left: questionnaire */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.18)]">
              <div className="space-y-8 rounded-[calc(2rem-0.5rem)] bg-ivory p-6 sm:p-9">
                <Group label="Occasion">
                  <ChipRow
                    options={occasions}
                    value={brief.occasion}
                    onChange={(v) => update("occasion", v)}
                  />
                </Group>

                <Group label="What kind of piece">
                  <ChipRow
                    options={pieces}
                    value={brief.pieceType}
                    onChange={(v) => update("pieceType", v)}
                  />
                </Group>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Group label="Budget">
                    <ChipRow
                      options={budgets}
                      value={brief.budget}
                      onChange={(v) => update("budget", v)}
                      compact
                    />
                  </Group>
                  <Group label="Timeline">
                    <ChipRow
                      options={timelines}
                      value={brief.timeline}
                      onChange={(v) => update("timeline", v)}
                      compact
                    />
                  </Group>
                </div>

                <Group label="Stone preference">
                  <ChipRow
                    options={stones}
                    value={brief.stonePref}
                    onChange={(v) => update("stonePref", v)}
                  />
                </Group>

                <Slider
                  label="Style"
                  leftHint="Traditional"
                  rightHint="Contemporary"
                  value={brief.styleAxis}
                  onChange={(v) => update("styleAxis", v)}
                />

                <Slider
                  label="Presence"
                  leftHint="Restrained"
                  rightHint="Statement"
                  value={brief.weightAxis}
                  onChange={(v) => update("weightAxis", v)}
                />

                <Group label="Anything else">
                  <textarea
                    value={brief.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    placeholder="A name to engrave, a stone in the family, a sketch you have in mind&hellip;"
                    className="w-full rounded-2xl border border-line bg-transparent px-4 py-3 text-[0.95rem] leading-relaxed text-charcoal outline-none transition focus:border-gold-deep"
                  />
                </Group>
              </div>
            </div>
          </Reveal>

          {/* Right: live suggestion panel — deep aubergine, gold ink */}
          <Reveal delay={0.28} className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.22)]">
                <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-wine-deep p-7 text-ivory sm:p-9">
                  <div className="absolute inset-0 bg-gradient-to-b from-wine via-wine-deep to-wine-deep" />
                  <div className="absolute inset-x-9 top-9 h-px bg-gold/40" />
                  <div className="absolute inset-x-9 bottom-9 h-px bg-gold/40" />

                  <div className="relative flex flex-col gap-7">
                    <p className="text-[0.66rem] uppercase tracking-[0.32em] text-gold-soft/70">
                      From the bench
                    </p>

                    <motion.div
                      key={suggestion.headline + suggestion.body}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <p className="font-serif text-3xl leading-tight text-gold-soft sm:text-4xl">
                        {suggestion.headline}
                      </p>
                      <p
                        className="mt-5 font-serif text-lg italic leading-relaxed text-ivory/85 sm:text-xl"
                        dangerouslySetInnerHTML={{ __html: suggestion.body }}
                      />
                    </motion.div>

                    <dl className="mt-2 space-y-3 border-t border-gold/20 pt-5 text-[0.92rem] leading-relaxed">
                      <SuggestionRow
                        label="Range"
                        value={suggestion.meta.range}
                      />
                      <SuggestionRow
                        label="Lead"
                        value={suggestion.meta.lead}
                      />
                    </dl>

                    <a
                      href={`/appointment?from=design&piece=${brief.pieceType}&budget=${brief.budget}`}
                      className="group mt-2 inline-flex items-center gap-3 self-start rounded-full bg-ivory pl-5 pr-1.5 py-2 text-sm tracking-wide text-charcoal transition-all duration-500 ease-soft hover:bg-gold-soft active:scale-[0.98]"
                    >
                      <span>Continue at the showroom</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/10 transition-all duration-500 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-px">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 11L11 3" />
                          <path d="M5 3h6v6" />
                        </svg>
                      </span>
                    </a>

                    <p className="text-[0.78rem] leading-relaxed text-ivory/55">
                      Indicative only. The real conversation usually starts
                      with a sketch on the back of a card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Group({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold-deep">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function ChipRow<T extends string>({
  options,
  value,
  onChange,
  compact,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={active}
            className={`rounded-full border px-4 ${compact ? "py-1.5 text-[0.78rem]" : "py-2 text-[0.85rem]"} transition-all duration-300 ease-soft ${
              active
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-line bg-transparent text-graphite hover:border-charcoal/30 hover:text-charcoal"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Slider({
  label,
  leftHint,
  rightHint,
  value,
  onChange,
}: {
  label: string;
  leftHint: string;
  rightHint: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold-deep">
          {label}
        </p>
        <p className="text-[0.72rem] text-muted">
          {value}/5
        </p>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="design-slider mt-3 w-full"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-[0.72rem] text-muted">
        <span>{leftHint}</span>
        <span>{rightHint}</span>
      </div>

      <style jsx>{`
        .design-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 2px;
          background: var(--brand-line);
          border-radius: 999px;
          outline: none;
        }
        .design-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--brand-gold-deep);
          cursor: grab;
          border: 2px solid var(--brand-ivory);
          box-shadow: 0 1px 4px rgba(28, 26, 23, 0.25);
          transition: transform 0.25s var(--ease-soft);
        }
        .design-slider::-webkit-slider-thumb:active {
          transform: scale(1.1);
          cursor: grabbing;
        }
        .design-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--brand-gold-deep);
          cursor: grab;
          border: 2px solid var(--brand-ivory);
        }
      `}</style>
    </div>
  );
}

function SuggestionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 sm:grid-cols-[88px_minmax(0,1fr)]">
      <dt className="text-[0.66rem] uppercase tracking-[0.28em] text-gold-soft/70">
        {label}
      </dt>
      <dd
        className="text-ivory/80"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
