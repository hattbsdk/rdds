/**
 * /jewellers-in-amritsar — the category page.
 *
 * Target: "jewellers in Amritsar", "kundan jewellery Amritsar", "bridal
 * jewellery Amritsar".
 *
 * This is winnable. On the live SERP the top eight results for "best jewellers
 * in Amritsar" are all directory aggregators — Justdial, Sulekha, WedMeGood,
 * ThreeBestRated — and not one jeweller's own website. For "kundan polki
 * bridal jewellery Amritsar", zero Amritsar businesses appear at all.
 *
 * Expect 4–8 months to rank. The clock only starts once the page exists.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, H2, H3, P, Rule, Visit } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Jewellers in Amritsar — Bridal Gold, Kundan, Polki & Diamonds",
  description:
    "A fifth-generation jewellery house on Mall Road, Amritsar. Bridal gold, kundan, polki, jadau, thewa, diamonds and 24K bullion. BIS hallmarked, IGI certified.",
  alternates: { canonical: "/jewellers-in-amritsar" },
};

const collections = [
  {
    h: "Bridal jewellery",
    p: "Complete 22K bridal sets, the heart of what we do. A full selection usually takes three or four hours, and most families come back over several visits. Entry bridal sets begin around ₹7 lakh; we hold pieces well above that.",
  },
  {
    h: "Kundan",
    p: "Our defining work. We were among the first firms in Amritsar to master gold and kundan, and our Coloured Kundan Heritage Collection is set with natural firoza, pukhraj and moonga alongside real South Sea pearls.",
  },
  {
    h: "Polki",
    p: "Uncut natural diamonds in traditional settings. We carry mostly open polki, and we will show you how to judge one before you buy it.",
  },
  {
    h: "Jadau & meenakari",
    p: "Traditional Mughal-descended techniques, worked by karigars we have used for decades — around a third of them here in Amritsar.",
  },
  {
    h: "Thewa",
    p: "A 400-year-old GI-tagged craft from Pratapgarh, Rajasthan: 23K gold openwork fused onto coloured glass, so light passing through makes the gold appear to glow. Very few jewellers in Punjab carry it. Pendants and earrings from around ₹50,000.",
  },
  {
    h: "Diamond jewellery",
    p: "14K and 18K pieces, solitaires, and loose stones up to 2.5 carats in stock — typically G/H/I colour, VS–SI clarity. Larger stones to order. Every diamond piece is IGI certified.",
  },
  {
    h: "Gold bullion",
    p: "Unbranded 1kg bars, loose gold cut to weight, and branded coins. If you are buying gold purely as an investment, this is almost always the better way to do it — and we will say so.",
  },
];

export default function JewellersInAmritsarPage() {
  return (
    <PageShell
      eyebrow="Mall Road, Amritsar"
      title="Jewellers in Amritsar since 1919"
      lede="Bridal and heritage jewellery from a house that has been at this for five generations."
    >
      <P>
        Raman Durga Das Seth is a fifth-generation jewellery house on Mall Road,
        Amritsar. We specialise in bridal and heritage jewellery — 22K gold,
        kundan, polki, jadau, meenakari and thewa — alongside diamond jewellery
        and 24K investment-grade bullion.
      </P>

      <H2>What we sell</H2>
      {collections.map((c) => (
        <div key={c.h}>
          <H3>{c.h}</H3>
          <P>{c.p}</P>
        </div>
      ))}

      <Rule />

      <H2>How we advise</H2>
      <P>
        Around two-thirds of the people who buy from us think of jewellery
        partly as an investment. That deserves an honest answer rather than a
        sales one, so we will tell you plainly which pieces hold their value and
        which are being bought for beauty alone. Both are good reasons to buy.
        They are simply different reasons, and you should know which one you are
        acting on.
      </P>
      <P>
        Every gold piece is BIS hallmarked and every diamond piece is IGI
        certified. Purity is independently verifiable, and we encourage you to
        verify it.
      </P>

      <H2>Exchange, buyback and after-sales</H2>
      <ul className="mt-4 space-y-2 text-[1.02rem] leading-[1.75] text-graphite">
        <li>Exchange against other jewellery — 100% of gold value</li>
        <li>Cash buyback — gold value less 1%</li>
        <li>Return within 5–10 days — full refund including making charges</li>
        <li>Cleaning, resizing and upgrades — always available</li>
      </ul>

      <H2>Buying from abroad</H2>
      <P>
        Roughly a third of our customers are NRI families — mostly in Canada,
        the United States, Australia, the United Kingdom and New Zealand. We
        will take you through pieces over WhatsApp video, hold things for your
        visit, and ship internationally, fully insured.
      </P>

      <H2>Our story</H2>
      <P>
        The family entered the gold trade in 1919 in the Andaman &amp; Nicobar
        Islands, lost everything in the Second World War, and rebuilt in Guru
        Bazaar.{" "}
        <Link
          href="/heritage"
          className="text-gold-deep underline underline-offset-4 transition-colors hover:text-gold"
        >
          Read the whole story →
        </Link>
      </P>

      <Visit />
    </PageShell>
  );
}
