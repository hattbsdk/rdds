import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raman Durga Das Seth — Coming Soon",
  description:
    "A heritage house in Amritsar since 1919. Our new showroom at 33, Mall Road is almost ready.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Raman Durga Das Seth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain-overlay bg-ivory">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
