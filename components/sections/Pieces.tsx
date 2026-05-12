import Reveal from "@/components/ui/Reveal";

// Curated archive entries — placeholder until real photography lands.
// Names and provenance lines should be replaced with the family's choices.
const pieces = [
  {
    n: "I",
    title: "A bridal polki suite",
    detail:
      "Eighteen pieces in gold — necklace, jhumar, kalire, choodiyan. Made for a Patiala wedding, restored in 2024 for the granddaughter.",
    year: "c. 1972",
    feature: true,
  },
  {
    n: "II",
    title: "The Mall Road choker",
    detail:
      "Uncut polki diamonds against a gold ground, with two emerald drops sourced over a year.",
    year: "c. 2018",
  },
  {
    n: "III",
    title: "A solitaire, 2.4 ct",
    detail:
      "Lab-certified VVS1, set close in 18K. Picked by Pankaj at the bench.",
    year: "Spring 2024",
  },
  {
    n: "IV",
    title: "An heirloom kundan necklace",
    detail:
      "Re-set on a new gold ground, length adjusted, the original stones kept exactly where they were. The customer cried.",
    year: "Reset 2023",
  },
];

export default function Pieces() {
  return (
    <section id="pieces" className="relative overflow-hidden bg-wine-deep text-ivory">
      {/* Soft gold wash to lift the dark surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
      >
        <div className="absolute -left-32 top-[-10%] h-[55vh] w-[55vh] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-[-20%] h-[55vh] w-[55vh] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-soft">
                From the archive
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-[20ch] font-serif text-[2.2rem] leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-[3.6rem]">
                A few pieces, with notes.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="max-w-[42ch] text-pretty text-[0.98rem] leading-relaxed text-ivory/75">
                Not a catalogue &mdash; we don&rsquo;t keep one. Just a
                handful of pieces from the bench, written about the way we
                might describe them at the showroom.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {pieces.map((p, i) => (
            <Reveal
              key={p.n}
              delay={0.1 + i * 0.06}
              as="article"
              className={
                p.feature
                  ? "lg:col-span-7"
                  : "lg:col-span-5"
              }
            >
              <figure className="group h-full">
                <div className="rounded-[1.75rem] border border-gold/15 bg-wine/50 p-1.5 transition-transform duration-700 ease-soft group-hover:-translate-y-1">
                  <div
                    className="relative overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-wine"
                    style={{ aspectRatio: p.feature ? "5 / 4" : "5 / 4" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-wine via-wine-deep to-wine-deep" />
                    <div className="absolute inset-x-10 top-10 h-px bg-gold/30" />
                    <div className="absolute inset-x-10 bottom-10 h-px bg-gold/30" />
                    <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                      <p className="font-serif text-5xl italic text-gold-soft sm:text-6xl">
                        {p.n}
                      </p>
                      <p className="mt-4 text-[0.66rem] uppercase tracking-[0.32em] text-gold-soft/65">
                        Photography to follow
                      </p>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-5 grid grid-cols-[1fr_auto] items-baseline gap-4">
                  <p className="font-serif text-2xl leading-tight text-ivory">
                    {p.title}
                  </p>
                  <p className="text-[0.78rem] uppercase tracking-[0.22em] text-gold-soft/80">
                    {p.year}
                  </p>
                </figcaption>
                <p className="mt-3 max-w-[52ch] text-pretty text-[0.95rem] leading-relaxed text-ivory/70">
                  {p.detail}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-16 max-w-[60ch] text-pretty text-[0.92rem] leading-relaxed text-ivory/55">
            Every piece is made or reset to order. If you&rsquo;d like
            something quietly remarkable, the conversation usually starts
            with a sketch on the back of a card.
          </p>
        </Reveal>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gold/20" />
    </section>
  );
}
