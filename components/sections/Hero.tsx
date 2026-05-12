import CTA from "@/components/ui/CTA";
import Reveal from "@/components/ui/Reveal";
import { Wordmark } from "@/components/ui/Wordmark";
import { brand } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100dvh] overflow-hidden pt-32 sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bone via-ivory to-ivory" />
        <div className="absolute right-[-15%] top-[-10%] h-[60vh] w-[60vh] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-gold-soft/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep sm:text-[0.78rem] sm:tracking-[0.28em]">
              33, The Mall, Amritsar &middot; since {brand.founded}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.04] tracking-tight text-balance text-charcoal sm:text-[4rem] lg:text-[4.6rem]">
              Family. Craft. Generations.
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-[54ch] text-pretty text-[1.05rem] leading-relaxed text-graphite sm:text-lg">
              Diamond. Polki. Kundan. Gold. Made to order, custom
              commissions. Explore our curation &mdash; we ship anywhere in
              the world.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTA href="/#talk-design">Book a viewing</CTA>
              <CTA href="/#history" variant="ghost">
                A little history
              </CTA>
              <CTA href="/#old-gold" variant="ghost">
                Investment Calculator
              </CTA>
            </div>
          </Reveal>
        </div>

        {/* Right column — typographic colophon. Height reduced ~30% per the
            brand brief. Deep aubergine, gold ink. Reads like a stamped house
            mark. Honest stand-in until photography lands. */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.22)]">
                <div
                  className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-wine-deep"
                  style={{ aspectRatio: "10 / 9" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-wine via-wine-deep to-wine-deep" />
                  <div className="absolute inset-x-12 top-10 h-px bg-gold/45" />
                  <div className="absolute inset-x-12 bottom-10 h-px bg-gold/45" />

                  <div className="relative flex h-full flex-col items-center justify-center px-10 text-center text-gold-soft">
                    {/* TODO: Replace logo/wordmark here with ALT Logo PNG when supplied */}
                    <Wordmark
                      className="w-full max-w-[260px]"
                      showSubline={false}
                    />
                    <p className="mt-7 max-w-[24ch] font-serif text-base italic leading-snug text-gold-soft/80 sm:text-lg">
                      Trust, set in gold &mdash; one piece at a time, since
                      1919.
                    </p>
                    <p className="mt-7 text-[0.66rem] uppercase tracking-[0.32em] text-gold-soft/55">
                      {brand.localityTagline}
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
