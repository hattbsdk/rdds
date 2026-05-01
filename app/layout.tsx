import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Durga Das Seth Jewellers — Heritage Jewellery, Amritsar",
    template: "%s | Durga Das Seth Jewellers",
  },
  description:
    "A heritage house in Amritsar specialising in diamond polki, kundan, gold jewellery, diamond solitaires, and gold and silver bullion. Custom commissions and worldwide shipping.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Durga Das Seth Jewellers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain-overlay">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
