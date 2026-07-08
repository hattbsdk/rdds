"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { brand } from "@/lib/brand";

/* ------------------------------------------------------------------ */
/*  Act I — Coming soon                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "var(--brand-green)" }}
    >
      {/* Ambient light + vignette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* Corner hairlines — stamped colophon feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gold/25 sm:inset-x-14 sm:top-12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-gold/25 sm:inset-x-14 sm:bottom-12"
      />

      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
        className="relative flex w-full max-w-4xl flex-col items-center text-center"
      >
        <Image
          src="/brand/logo-mark.png"
          alt="Raman Durga Das Seth"
          width={554}
          height={270}
          priority
          className="w-[82vw] max-w-[600px] sm:w-[55vw] sm:max-w-[780px]"
        />

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mt-6 flex flex-col items-center sm:mt-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold/40 sm:w-16" />
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-gold-soft sm:text-[0.8rem]">
              Coming&nbsp;Soon
            </p>
            <span className="h-px w-10 bg-gold/40 sm:w-16" />
          </div>

          <p className="mt-6 max-w-[32ch] font-serif text-xl italic leading-snug text-ivory sm:text-2xl">
            Our newest store, website coming soon
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#guided"
        aria-label="Scroll down"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-3 px-6 text-center text-ivory/90 transition-colors hover:text-ivory sm:mt-16"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.3em] sm:tracking-[0.36em]">
          Scroll down for more information
        </span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-ivory/70 to-transparent sm:h-10"
        />
      </motion.a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Framed photo with a gentle parallax drift                          */
/* ------------------------------------------------------------------ */

function FramedPhoto({
  src,
  alt,
  aspect = "3 / 2",
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.28)]"
    >
      <div
        className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]"
        style={{ aspectRatio: aspect }}
      >
        <motion.div
          style={reduced ? undefined : { y }}
          className="absolute inset-[-8%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Act II — The grandfather                                           */
/* ------------------------------------------------------------------ */

function Guided() {
  return (
    <section
      id="guided"
      className="relative isolate overflow-hidden bg-ivory py-20 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20%] top-[-10%] -z-10 h-[55vh] w-[55vh] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">In loving memory</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-center font-serif text-[2.4rem] leading-[1.08] tracking-tight text-balance text-charcoal sm:text-[3.6rem]">
            We are still guided by you.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 sm:mt-16">
          <FramedPhoto
            src="/photos/grandfather.jpg"
            alt="Our grandfather at the showroom"
            aspect="3 / 2"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[52ch] text-center text-pretty text-[1.02rem] leading-relaxed text-muted sm:text-lg">
            Every piece we make, every promise we keep &mdash; it all carries
            his hand. Four generations at the bench, and his standard is
            still the standard.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 h-px w-24 bg-gold/50" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Act III — The new showroom + contact                               */
/* ------------------------------------------------------------------ */

function Showroom() {
  return (
    <section className="relative isolate overflow-hidden bg-bone/60 py-20 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-15%] -z-10 h-[55vh] w-[55vh] rounded-full bg-gold-soft/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">The next chapter</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-center font-serif text-[2.4rem] leading-[1.08] tracking-tight text-balance text-charcoal sm:text-[3.6rem]">
            A new home on Mall Road.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 sm:mt-16">
          <FramedPhoto
            src="/photos/showroom.jpg"
            alt="Our new showroom"
            aspect="5 / 3"
          />
        </Reveal>

        {/* Contact card */}
        <Reveal delay={0.15} className="mt-10 sm:mt-20">
          <div className="overflow-hidden rounded-[2rem] bg-green-deep text-ivory shadow-[0_40px_80px_-40px_rgba(20,37,25,0.6)]">
            <div className="relative px-7 py-12 sm:px-14 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-7 h-px bg-gold/30"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 bottom-7 h-px bg-gold/30"
              />

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold-soft">
                    Visit us
                  </p>
                  <p className="mt-5 font-serif text-xl leading-relaxed text-ivory/95 sm:text-2xl">
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                    <br />
                    {brand.address.line3}
                  </p>
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-7 inline-flex items-center gap-3 rounded-full border border-gold/50 py-2 pl-6 pr-2 text-sm tracking-wide text-gold-soft transition-all duration-500 ease-soft hover:border-gold hover:bg-gold/10 active:scale-[0.98]"
                  >
                    <span>Open in Google Maps</span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 transition-all duration-500 ease-soft group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:bg-gold/25"
                    >
                      <ArrowIcon />
                    </span>
                  </a>
                </div>

                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold-soft">
                    Speak to us
                  </p>
                  <ul className="mt-5 space-y-2 font-serif text-xl text-ivory/95 sm:text-2xl">
                    {brand.phones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="transition-colors hover:text-gold-soft"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-7 inline-flex items-center gap-3 rounded-full border border-gold/50 py-2 pl-6 pr-2 text-sm tracking-wide text-gold-soft transition-all duration-500 ease-soft hover:border-gold hover:bg-gold/10 active:scale-[0.98]"
                  >
                    <span>Follow on Instagram</span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 transition-all duration-500 ease-soft group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:bg-gold/25"
                    >
                      <InstagramIcon />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer strip                                                       */
/* ------------------------------------------------------------------ */

function FooterStrip() {
  return (
    <footer className="border-t border-line/70 bg-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center lg:px-10">
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold-deep">
          Since {brand.founded} &middot; Amritsar
        </p>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {brand.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <Guided />
      <Showroom />
      <FooterStrip />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
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
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
