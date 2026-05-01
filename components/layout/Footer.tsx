import Link from "next/link";
import { brand } from "@/lib/brand";
import { Wordmark } from "@/components/ui/Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-bone/30">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="-ml-2 h-24 w-auto text-charcoal" />
            <p className="mt-6 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-muted">
              Four generations on the same bench in Hall Bazaar, Amritsar.
              Diamond polki, kundan, gold, certified solitaires, and
              bullion. Custom commissions; ships worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Visit</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-graphite">
              {brand.address.line1}
              <br />
              {brand.address.line2}
              <br />
              {brand.address.line3}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Speak</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-graphite">
              <li>
                <a
                  href={`tel:${brand.phone.tel}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {brand.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Browse</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-graphite">
              <li>
                <Link
                  href="/#heritage"
                  className="transition-colors hover:text-charcoal"
                >
                  Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/#calculator"
                  className="transition-colors hover:text-charcoal"
                >
                  Investment calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="transition-colors hover:text-charcoal"
                >
                  Book a viewing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line/60 pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} Durga Das Seth Jewellers. All
            rights reserved.
          </p>
          <p className="tracking-wide">Crafted in Amritsar, since 1932.</p>
        </div>
      </div>
    </footer>
  );
}
