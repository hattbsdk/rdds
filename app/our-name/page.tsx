/**
 * /our-name — the entity fix.
 *
 * A search for "Raman Durga Das Seth Amritsar" currently returns ten results,
 * all of them the cousins' firm. This page exists to answer that confusion
 * directly, for both Google and for customers, without a word of conflict.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, H2, H3, P, Rule, Visit } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Our Name",
  description:
    "Raman Durga Das Seth honours two men: Raman Kishore Seth Ji and Durga Das Seth Ji. The story behind the name, and where to find us on Mall Road, Amritsar.",
  alternates: { canonical: "/our-name" },
};

export default function OurNamePage() {
  return (
    <PageShell
      eyebrow="A dedication, not a variation"
      title="Our name"
      lede="Raman Durga Das Seth honours a grandfather and a great-uncle at once."
    >
      <P>
        Our name is not a longer version of another.{" "}
        <strong className="font-medium text-charcoal">
          Raman Durga Das Seth
        </strong>{" "}
        honours two men: <strong className="font-medium text-charcoal">
        Raman Kishore Seth Ji</strong>, our grandfather, and{" "}
        <strong className="font-medium text-charcoal">Durga Das Seth Ji</strong>,
        who rebuilt this house in Guru Bazaar after the family returned to
        Amritsar in the 1940s.
      </P>

      <H2>The family</H2>
      <P>
        The Seth family has been in the jewellery trade in Amritsar for five
        generations. Over that time the family has grown and, as families do,
        separated into independent businesses — several of which trade in
        Amritsar today under related names.
      </P>
      <P>
        Raman Durga Das Seth is run by Pankaj Seth, Neeraj Seth and Ramit Seth —
        the sons and grandson of Raman Kishore Seth Ji, from the line of Jugal
        Kishore Seth Ji. We are the fifth generation at the bench.
      </P>
      <P>
        We are proud of every part of this family. We simply want you to arrive
        at the right door.
      </P>

      <H2>Since 1919</H2>
      <P>
        The family entered the gold trade in 1919 — not in Amritsar, but in the
        Andaman &amp; Nicobar Islands, where Sh. Dhani Ram Ji and Sh. Daulat Ram
        Ji traded as commission agents. The Second World War forced the family
        home, and they began again from almost nothing in Guru Bazaar. That is
        the part of our history that matters most to us, and it is why we talk
        about jewellery the way we do.
      </P>
      <P>
        <Link
          href="/heritage"
          className="text-gold-deep underline underline-offset-4 transition-colors hover:text-gold"
        >
          Read the whole story →
        </Link>
      </P>

      <Rule />

      <H2>Common questions</H2>

      <H3>Is Raman Durga Das Seth the same as Durga Das Seth?</H3>
      <P>
        Raman Durga Das Seth is run by the Raman Kishore Seth branch of the
        Durga Das Seth family. The family firm has separated into independent
        businesses. We trade from our own showroom at Shop 5, Amstel Mall,
        32–33 The Mall, Amritsar.
      </P>

      <H3>How old is the business?</H3>
      <P>
        The family entered the gold trade in 1919. We are the fifth generation
        of that lineage.
      </P>

      <H3>What do you specialise in?</H3>
      <P>
        Bridal and heritage jewellery — 22K gold, kundan, polki, jadau,
        meenakari and thewa — alongside diamond jewellery, loose diamonds and
        gemstones, and 24K investment-grade gold bullion. Every gold piece is
        BIS hallmarked and every diamond piece is IGI certified.
      </P>

      <Visit />
    </PageShell>
  );
}
