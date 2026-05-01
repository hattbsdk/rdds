import type { Metadata } from "next";
import AppointmentForm from "@/components/sections/AppointmentForm";
import Reveal from "@/components/ui/Reveal";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Book a viewing",
  description:
    "Reserve a private viewing at Durga Das Seth Jewellers, Amritsar.",
};

export default function AppointmentPage() {
  return (
    <section className="relative min-h-[100dvh] px-6 pb-24 pt-32 sm:pt-40 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-deep">
              Book a viewing
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
              Pick a time. We&rsquo;ll set the room aside.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[46ch] text-pretty text-[1rem] leading-relaxed text-graphite">
              Tell us when you&rsquo;d like to come in, and what you&rsquo;d
              like to see — we&rsquo;ll have it ready. For custom commissions,
              please share a few notes; one of us will respond within the day.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mt-10 space-y-5 text-[0.95rem] leading-relaxed text-graphite">
              <div className="border-t border-line/70 pt-5">
                <dt className="eyebrow">Where</dt>
                <dd className="mt-2">
                  {brand.address.line1}, {brand.address.line2}
                </dd>
              </div>
              <div className="border-t border-line/70 pt-5">
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2">{brand.hours}</dd>
              </div>
              <div className="border-t border-line/70 pt-5">
                <dt className="eyebrow">Reach us directly</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${brand.phone.tel}`}
                    className="hover:text-charcoal"
                  >
                    {brand.phone.display}
                  </a>{" "}
                  &middot;{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="hover:text-charcoal"
                  >
                    {brand.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="lg:col-span-7">
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
