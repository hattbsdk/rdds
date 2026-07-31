/**
 * Shared shell for the content pages (/heritage, /our-name,
 * /jewellers-in-amritsar). Uses the existing brand tokens so these pages sit
 * naturally alongside the coming-soon page rather than looking bolted on.
 */

import Link from "next/link";
import { brand } from "@/lib/brand";

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ivory">
      {/* Header band — emerald, matching the hero */}
      <header
        className="relative overflow-hidden px-6 pb-16 pt-14 sm:pb-20 sm:pt-16"
        style={{ background: "var(--brand-green)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(201,161,58,0.10)] blur-[120px]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Link
            href="/"
            className="text-[0.62rem] uppercase tracking-[0.32em] text-gold-soft transition-colors hover:text-gold-soft"
          >
            Raman Durga Das Seth
          </Link>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[rgba(201,161,58,0.40)] sm:w-12" />
            <p className="text-[0.66rem] uppercase tracking-[0.36em] text-gold-soft">
              {eyebrow}
            </p>
            <span className="h-px w-8 bg-[rgba(201,161,58,0.40)] sm:w-12" />
          </div>

          <h1 className="mt-6 font-serif text-3xl leading-tight text-ivory sm:text-5xl">
            {title}
          </h1>

          {lede ? (
            // Inline style, not a Tailwind opacity class. The brand colours are
            // CSS variables holding hex values, and Tailwind's `/80` opacity
            // syntax silently fails on those — it falls back to charcoal, which
            // is near-invisible on the emerald ground.
            <p
              className="mx-auto mt-6 max-w-[46ch] font-serif text-lg italic leading-relaxed sm:text-xl"
              style={{ color: "rgba(246, 241, 231, 0.85)" }}
            >
              {lede}
            </p>
          ) : null}
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">{children}</div>

      {/* Footer */}
      <footer className="border-t border-line bg-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10 text-center lg:px-10">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.22em] text-graphite">
            <Link href="/" className="transition-colors hover:text-gold-deep">
              Home
            </Link>
            <span aria-hidden="true" className="h-3 w-px bg-line" />
            <Link
              href="/jewellers-in-amritsar"
              className="transition-colors hover:text-gold-deep"
            >
              Jewellers in Amritsar
            </Link>
            <span aria-hidden="true" className="h-3 w-px bg-line" />
            <Link
              href="/heritage"
              className="transition-colors hover:text-gold-deep"
            >
              Our Heritage
            </Link>
            <span aria-hidden="true" className="h-3 w-px bg-line" />
            <Link
              href="/our-name"
              className="transition-colors hover:text-gold-deep"
            >
              Our Name
            </Link>
          </nav>
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold-deep">
            Since {brand.founded} &middot; Amritsar
          </p>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Raman Durga Das Seth. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 font-serif text-2xl leading-snug text-charcoal first:mt-0 sm:text-3xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-9 font-serif text-xl leading-snug text-charcoal sm:text-2xl">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[1.02rem] leading-[1.75] text-graphite">
      {children}
    </p>
  );
}

export function Rule() {
  return (
    <div aria-hidden="true" className="my-14 flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-line" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[rgba(201,161,58,0.60)]" />
      <span className="h-px w-16 bg-line" />
    </div>
  );
}

export function Visit() {
  return (
    <div className="mt-14 rounded-sm border border-line bg-bone px-6 py-8 text-center">
      <p className="text-[0.66rem] uppercase tracking-[0.32em] text-gold-deep">
        Visit us
      </p>
      <p className="mt-4 font-serif text-lg leading-relaxed text-charcoal sm:text-xl">
        Shop 5, Upper Ground Floor
        <br />
        32–33 Amstel Mall, The Mall, Amritsar
      </p>
      <p className="mt-3 text-sm text-muted">
        Next to Hotel Fern Residency · Valet parking
        <br />
        Open daily, {brand.openingHours.opens}–{brand.openingHours.closes}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${brand.phone.tel}`}
          className="rounded-full border border-gold px-6 py-2 text-sm tracking-wide text-gold-deep transition-all duration-500 ease-soft hover:border-gold hover:bg-[rgba(201,161,58,0.10)]"
        >
          {brand.phone.display}
        </a>
        <a
          href={brand.google.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-line px-6 py-2 text-sm tracking-wide text-graphite transition-all duration-500 ease-soft hover:border-gold hover:text-gold-deep"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
