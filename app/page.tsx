import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Faces from "@/components/sections/Faces";
import Pieces from "@/components/sections/Pieces";
import Design from "@/components/sections/Design";
import Calculator from "@/components/sections/Calculator";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Durga Das Seth Jewellers",
    description:
      "Heritage jewellers in Amritsar — diamond polki, kundan, gold, certified solitaires, and gold and silver bullion. Custom commissions and worldwide shipping.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://durgadassethjewellers.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hall Bazaar",
      addressLocality: "Amritsar",
      addressRegion: "Punjab",
      postalCode: "143001",
      addressCountry: "IN",
    },
    foundingDate: "1932",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <Hero />
      <Heritage />
      <Faces />
      <Pieces />
      <Design />
      <Calculator />
      <Contact />
    </>
  );
}
