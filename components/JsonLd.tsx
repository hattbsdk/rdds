/**
 * Structured data (JSON-LD) — rendered once from app/layout.tsx.
 *
 * WHY THIS MATTERS MORE THAN ANYTHING ELSE ON THE SITE
 * ----------------------------------------------------
 * A search for "Raman Durga Das Seth Amritsar" currently returns ten results,
 * all of them the cousins' firm. Google models this business as a spelling
 * variant of "Durga Das Seth" rather than as its own entity.
 *
 * A Google Maps place for "Raman Durga Das Seth" already exists and is
 * correctly named — it is simply orphaned, with nothing pointing at it. The
 * `sameAs` array below is the wire that connects the website, the Maps place
 * and the Instagram account into a single node in Google's Knowledge Graph.
 *
 * Added 31 Jul 2026.
 */

import { brand } from "@/lib/brand";

const SITE = brand.siteUrl;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["JewelryStore", "LocalBusiness"],
      "@id": `${SITE}/#business`,
      name: "Raman Durga Das Seth",
      alternateName: [
        "RDDS",
        "Raman Durga Das Seth Jewellers",
        "Raman Durga Das Seth Amritsar",
      ],
      description:
        "Raman Durga Das Seth is a heritage jewellery house on Mall Road, Amritsar, run by the Raman Kishore Seth branch of the Durga Das Seth family. Five generations of jewellers since 1919, specialising in bridal gold, kundan, polki, jadau, diamond jewellery and 24K bullion.",

      url: SITE,
      logo: `${SITE}/brand/logo-mark.png`,
      image: [`${SITE}/brand/logo-mark.png`, `${SITE}/photos/showroom.jpg`],

      foundingDate: String(brand.founded),
      foundingLocation: {
        "@type": "Place",
        name: "Andaman & Nicobar Islands, India",
      },
      slogan: `Since ${brand.founded} · Amritsar`,

      telephone: brand.phone.display,
      email: brand.businessEmail,

      address: {
        "@type": "PostalAddress",
        ...brand.postal,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: brand.address.lat,
        longitude: brand.address.lng,
      },
      hasMap: brand.google.mapsUrl,

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: brand.openingHours.opens,
          closes: brand.openingHours.closes,
        },
      ],

      priceRange: "₹₹₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
      areaServed: [
        { "@type": "City", name: "Amritsar" },
        { "@type": "State", name: "Punjab" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "New Zealand" },
      ],

      sameAs: [
        brand.instagramUrl,
        brand.google.mapsUrl,
        `https://www.google.com/maps/place/?q=place_id:${brand.google.placeId}`,
      ],

      knowsAbout: [
        "Kundan jewellery",
        "Polki jewellery",
        "Jadau jewellery",
        "Meenakari",
        "Thewa (GI-tagged craft from Pratapgarh, Rajasthan)",
        "22K, 18K and 14K gold jewellery",
        "BIS hallmarking",
        "IGI-certified diamonds",
        "Gold bullion and investment-grade gold",
        "Bridal jewellery",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Raman Durga Das Seth Collections",
        itemListElement: [
          "Bridal Jewellery",
          "Coloured Kundan Heritage Collection",
          "Polki Jewellery",
          "22K Gold Jewellery",
          "Diamond Jewellery",
          "Thewa",
          "24K Gold Bullion & Coins",
        ].map((name) => ({ "@type": "OfferCatalog", name })),
      },
    },

    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Raman Durga Das Seth",
      publisher: { "@id": `${SITE}/#business` },
      inLanguage: "en-IN",
    },

    /* The entity-disambiguation workhorse. These are the exact questions a
     * confused customer types, and the answers surface in the knowledge panel.
     * Wording is factual and says nothing against anyone. */
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Raman Durga Das Seth located in Amritsar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Raman Durga Das Seth is at Shop 5, Upper Ground Floor, 32-33 Amstel Mall, The Mall (Mall Road), next to Hotel Fern Residency, Amritsar, Punjab 143001. Open daily, 11:00 to 20:00.",
          },
        },
        {
          "@type": "Question",
          name: "Is Raman Durga Das Seth the same as Durga Das Seth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Raman Durga Das Seth is run by the Raman Kishore Seth branch of the Durga Das Seth family. The name honours Raman Kishore Seth Ji and Durga Das Seth Ji. The family firm has separated into independent businesses; Raman Durga Das Seth trades from its own showroom at Amstel Mall, Mall Road, Amritsar.",
          },
        },
        {
          "@type": "Question",
          name: "How old is Raman Durga Das Seth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The family entered the gold trade in 1919 in the Andaman & Nicobar Islands, returned to Amritsar in the 1940s and established the house in Guru Bazaar. Raman Durga Das Seth is the fifth generation of that lineage.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of jewellery does Raman Durga Das Seth sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bridal and heritage jewellery — 22K gold, kundan, polki, jadau, meenakari and thewa — alongside 14K and 18K diamond jewellery, loose diamonds and gemstones, and 24K investment-grade gold bullion. All gold is BIS hallmarked and all diamond jewellery is IGI certified.",
          },
        },
        {
          "@type": "Question",
          name: "Does Raman Durga Das Seth ship jewellery internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Raman Durga Das Seth serves NRI customers in Canada, the United States, Australia, the United Kingdom and New Zealand, with remote selection over WhatsApp and insured international shipping.",
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
