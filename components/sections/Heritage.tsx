import Reveal from "@/components/ui/Reveal";

const lineage = [
  {
    initial: "I",
    name: "Durga Das Seth",
    note: "Founder. A trader who built the house from nothing in 1919.",
  },
  {
    initial: "II",
    name: "Raman Seth",
    note: "His son. Steadied the bench through partition and the decades after.",
  },
  {
    initial: "III",
    name: "Pankaj Seth & Brother",
    note: "Run the shop today. Two brothers, one bench.",
  },
  {
    initial: "IV",
    name: "Ramit Seth",
    note: "Pankaj's son. The next pair of hands at the bench.",
  },
];

export default function Heritage() {
  return (
    <section
      id="history"
      className="relative px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-deep">
            A little history
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-[20ch] font-serif text-[2.2rem] leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
            Built on trust. The rest came after.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.16} className="lg:col-span-7">
            <div className="space-y-6 text-pretty text-[1.02rem] leading-relaxed text-graphite">
              <p>
                Raman Durga Das Seth started with&hellip; [history copy to
                be added]
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="lg:col-span-5 lg:pl-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold-deep">
              The lineage
            </p>
            <ol className="mt-5 space-y-5 border-l border-line/70 pl-6">
              {lineage.map((g) => (
                <li key={g.initial} className="grid grid-cols-[28px_1fr] gap-4">
                  <span className="font-serif text-base italic text-gold-deep">
                    {g.initial}.
                  </span>
                  <div>
                    <p className="font-serif text-xl text-charcoal">
                      {g.name}
                    </p>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-graphite">
                      {g.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-line/70 pt-6">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold-deep">
                What we work in
              </p>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-graphite">
                Diamond, Polki, Kundan, solitaires, gold, and gold and
                silver bullion. Custom commissions are how the bench has
                always run &mdash; bring a sketch, a stone, or just an
                idea. We ship insured, signature-on-delivery, anywhere we
                can reach.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
