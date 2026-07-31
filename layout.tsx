import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { brand } from "@/lib/brand";

const SITE = brand.siteUrl;

const TITLE = "Raman Durga Das Seth | Jewellers in Amritsar Since 1919";
const DESCRIPTION =
  "The Raman Kishore Seth branch of the Durga Das Seth family, jewellers in Amritsar since 1919. Bridal gold, kundan, polki and diamonds at Amstel Mall, Mall Road.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE),

  // Was "Raman Durga Das Seth — Coming Soon". The title tag is the single most
  // heavily weighted on-page element on the domain; spending it on "Coming
  // Soon" cost every commercial search term.
  title: {
    default: TITLE,
    template: "%s | Raman Durga Das Seth",
  },
  description: DESCRIPTION,
  applicationName: "Raman Durga Das Seth",

  keywords: [
    "Raman Durga Das Seth",
    "RDDS Amritsar",
    "Durga Das Seth",
    "jewellers in Amritsar",
    "bridal jewellery Amritsar",
    "kundan jewellery Amritsar",
    "polki Amritsar",
    "gold jewellery Amritsar",
    "diamond jewellery Amritsar",
    "Mall Road Amritsar jeweller",
  ],

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE,
    siteName: "Raman Durga Das Seth",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raman Durga Das Seth — jewellers in Amritsar since 1919",
      },
    ],
  },

  twitter: {
    // Was "summary". Large image is materially better for a visual brand, and
    // this is what renders when the link is shared on WhatsApp — the primary
    // sales channel for NRI customers.
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/brand/og-image.jpg"],
  },

  category: "Jewelry Store",

  // Google Search Console ownership verification, added 31 Jul 2026.
  // DO NOT REMOVE — Google re-checks this periodically and removing it
  // would un-verify the property and cut off all search data.
  verification: {
    google: "2BL0PngLXuw4HEmi4l10aYilRZ75dPfJkONBglDDSE0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="grain-overlay bg-ivory">
        <main className="relative">{children}</main>
        <JsonLd />
      </body>
    </html>
  );
}
