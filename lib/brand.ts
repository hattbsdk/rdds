// Single source of truth for brand contact details, social links, and showroom
// coordinates. Update values here once and they propagate across the site.

export const brand = {
  name: "Durga Das Seth Jewellers",
  tagline: "Heritage jewellery, Amritsar",
  // Phone shown to visitors and used for tel: links + WhatsApp.
  phone: {
    display: "+91 98151 39200",
    tel: "+919815139200",
  },
  whatsappNumber: "919815139200", // No '+' or spaces — used in wa.me URL
  email: "ramitseth17@gmail.com",
  address: {
    line1: "33, The Mall",
    line2: "Amritsar, Punjab 143001",
    line3: "(next to Fern Residency hotel)",
    // Coordinates supplied by the family — 33, The Mall, Amritsar.
    lat: 31.642372842169568,
    lng: 74.87009187116395,
  },
  // Long-form locality tagline shown on hero panel and footer.
  localityTagline: "Guru Bazaar · Lawrence Road · Mall Road · Amritsar",
  hours: "Mon–Sat · 11:00 to 20:00",
  founded: 1919,
} as const;

export const whatsappLink = (message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${brand.whatsappNumber}${text}`;
};
