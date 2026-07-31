// Single source of truth for brand contact details, social links, and showroom
// coordinates. Update values here once and they propagate across the site.

export const brand = {
  name: "Raman Durga Das Seth Jewellers",
  tagline: "Heritage jewellery, Amritsar",
  // All showroom numbers, shown on the coming-soon page.
  phones: [
    { display: "+91 98151 39200", tel: "+919815139200" },
    { display: "+91 98140 52405", tel: "+919814052405" },
    { display: "+91 98142 95401", tel: "+919814295401" },
  ],
  // Primary number — kept for compatibility with the full site's components.
  phone: {
    display: "+91 98151 39200",
    tel: "+919815139200",
  },
  whatsappNumber: "919815139200", // No '+' or spaces — used in wa.me URL
  email: "ramitseth17@gmail.com",
  address: {
    line1: "33, Mall Road",
    line2: "Amstel Mall, next to Hotel Fern Residency",
    line3: "Amritsar, Punjab",
    lat: 31.642372842169568,
    lng: 74.87009187116395,
  },
  mapsUrl: "https://maps.app.goo.gl/iwxBY5cEgMiVeXnt8",
  instagramUrl: "https://www.instagram.com/ramandurgadasseth",
  localityTagline: "Guru Bazaar · Lawrence Road · Mall Road · Amritsar",
  hours: "Mon–Sat · 11:00 to 20:00",
  founded: 1919,

  /* ----------------------------------------------------------------
   * SEO / local-search identity — added 31 Jul 2026.
   *
   * These come from the real Google Maps place for "Raman Durga Das
   * Seth" (already exists, correctly named). They are what tells Google
   * this business is its own entity and not a variant of the cousins'
   * firm. Do not edit without checking the live Maps listing.
   * ---------------------------------------------------------------- */
  siteUrl: "https://www.ramandurgadasseth.com",

  // Full postal address, exactly as it must appear on every directory
  // listing and on the Google Business Profile. Byte-identical or it
  // costs ranking.
  postal: {
    streetAddress:
      "Shop 5, Upper Ground Floor, 32-33 Amstel Mall, Fern Residency Hotel Building, The Mall",
    addressLocality: "Amritsar",
    addressRegion: "Punjab",
    postalCode: "143001",
    addressCountry: "IN",
  },

  // Business email of record (distinct from the personal address in
  // `email` above, which the contact form uses).
  businessEmail: "ramandurgadasseth@gmail.com",

  google: {
    placeId: "ChIJ9ZzAml1lGTkRzpL7WUcweKU",
    cid: "11923333096473858766",
    knowledgeGraphId: "/g/11zcnbb0g1",
    // Canonical, stable Maps URL — prefer this over the short link.
    mapsUrl: "https://maps.google.com/?cid=11923333096473858766",
    reviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ9ZzAml1lGTkRzpL7WUcweKU",
  },

  // Confirmed by Ramit, 31 Jul 2026. Must stay in sync with the hours
  // on the Google Business Profile.
  openingHours: { opens: "11:00", closes: "20:00" },
} as const;

export const whatsappLink = (message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${brand.whatsappNumber}${text}`;
};
