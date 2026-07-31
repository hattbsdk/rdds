/**
 * /heritage — the link magnet.
 *
 * Nobody links to a product page. People do link to a Punjabi family who
 * traded gold in the Bay of Bengal in 1919, fled a wartime invasion, and
 * rebuilt from a stall in Guru Bazaar. Inbound links are roughly 15% of local
 * search ranking and the site currently has none.
 *
 * ⚠️ Dhani Ram Ji's death is stated plainly and without dramatisation, per the
 * family's own guidance. If the family would rather it were not public, remove
 * the final sentence of the 1940s beat — the page still works without it.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, H2, P, Rule, Visit } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Our Heritage — Amritsar, the Andamans, and 1919",
  description:
    "From the Andaman Islands in 1919, through wartime displacement, to Guru Bazaar and Mall Road. Five generations of the Seth family, jewellers in Amritsar.",
  alternates: { canonical: "/heritage" },
  openGraph: {
    title: "Our Heritage — Amritsar, the Andamans, and 1919",
    description:
      "A family that began trading gold in the Bay of Bengal, lost everything to a war, and rebuilt in Guru Bazaar. Five generations of jewellers in Amritsar.",
  },
};

const beats = [
  {
    year: "c. 1900s",
    title: "Amritsar",
    body: "The family's roots are in Amritsar. The jewellery lineage begins here, generations before there was a shop with our name on it.",
  },
  {
    year: "1915",
    title: "The Andaman Islands",
    body: "Part of the family moves to the Andaman & Nicobar Islands and becomes arthiyas — commission agents. The trade is small, relationship-based, and built entirely on trust. Sh. Dhani Ram Ji and Sh. Daulat Ram Ji are at the helm.",
  },
  {
    year: "1919",
    title: "Into gold",
    body: "The family enters the gold trade — trading and manufacturing jewellery in the Andamans, alongside a general store that sells everything from needles to bicycles. This is the year we count from.",
  },
  {
    year: "1940s",
    title: "The flight",
    body: "The Japanese invasion of the Andamans during the Second World War forces the family to flee, leaving the business behind. Dhani Ram Ji is shot during the journey home. The family arrives in Amritsar with almost nothing.",
  },
  {
    year: "c. 1945–50",
    title: "Guru Bazaar",
    body: "Durga Das Seth Ji, eldest of the brothers, establishes Durga Das Seth Saraf in Guru Bazaar — among the first firms in that market. Four brothers run it together: Durga Das Seth Ji, Dwarka Das Seth Ji, Jugal Kishore Seth Ji and Jeet Kishore Seth Ji. They begin again from the beginning.",
  },
  {
    year: "1960",
    title: "Zaveri Bazaar",
    body: "The firm establishes a presence in Zaveri Bazaar, Bombay — the move into the wider diamond and jewellery trade. Through the sixties, seventies and eighties the reputation is built quietly, across Amritsar and Bombay, by Raman Kishore Seth Ji and Naval Kishore Seth Ji.",
  },
  {
    year: "2001 · 2018",
    title: "Amritsar, modernised",
    body: "A showroom at Nehru Shopping Complex in 2001, then Mall Road in 2018. Pankaj Seth and Neeraj Seth, sons of Raman Kishore Seth Ji, carry the house through the shift to modern retail.",
  },
  {
    year: "2026",
    title: "Raman Durga Das Seth",
    body: "Ramit Seth joins as the fifth generation, and the house opens at Amstel Mall on Mall Road under the name Raman Durga Das Seth — honouring Raman Kishore Seth Ji and Durga Das Seth Ji together. This is a continuing legacy, not a new business.",
  },
];

export default function HeritagePage() {
  return (
    <PageShell
      eyebrow="Since 1919"
      title="Amritsar, the Andamans, and 1919"
      lede="Most jewellers' history is a date on a wall. Ours has a beginning, a catastrophe, a rebuilding, and a return."
    >
      <P>
        A family trade that began in Amritsar, grew through the Andaman gold
        trade, survived wartime displacement, was rebuilt in Guru Bazaar,
        expanded to Bombay, Delhi and Kanpur, and now finds its home in Raman
        Durga Das Seth.
      </P>

      <Rule />

      <ol className="space-y-12">
        {beats.map((b) => (
          <li key={b.year}>
            <p className="text-[0.66rem] uppercase tracking-[0.32em] text-gold-deep">
              {b.year}
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
              {b.title}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-[1.75] text-graphite">
              {b.body}
            </p>
          </li>
        ))}
      </ol>

      <Rule />

      <H2>Why we sell the way we sell</H2>
      <P>
        A family that lost everything once, and buried a father on the road
        home, learns something about what wealth is and what it costs to lose
        it. That is not a sales line. It is the reason we will tell you when a
        piece is beautiful but is not a good buy, and the reason we would rather
        sell you something smaller and better than something larger and worse.
      </P>
      <P>
        Every gold piece we sell is BIS hallmarked. Every diamond piece is IGI
        certified. We are glad for you to have anything checked independently
        before you buy it.
      </P>

      <H2>Five generations</H2>
      <P>
        Lala Kodu Mal Ji → Lala Bhagat Ram Ji → Dhani Ram Ji → Jugal Kishore
        Seth Ji → Raman Kishore Seth Ji → Pankaj Seth &amp; Neeraj Seth → Ramit
        Seth.
      </P>
      <P>
        <Link
          href="/our-name"
          className="text-gold-deep underline underline-offset-4 transition-colors hover:text-gold"
        >
          Why we are called Raman Durga Das Seth →
        </Link>
      </P>

      <H2>Come and see the history wall</H2>
      <P>
        The whole of this story is on the wall of our showroom. We would be glad
        to walk you through it.
      </P>

      <Visit />
    </PageShell>
  );
}
