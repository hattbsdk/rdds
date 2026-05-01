// Single source of truth for brand contact details, social links, and showroom
// coordinates. Update values here once and they propagate across the site.

export const brand = {
  name: "Durga Das Seth Jewellers",
  tagline: "Heritage jewellery, Amritsar",
  // Phone shown to visitors and used for tel: links + WhatsApp.
  phone: {
    display: "+91 99999 99999",
    tel: "+919999999999",
  },
  whatsappNumber: "919999999999", // No '+' or spaces — used in wa.me URL
  email: "atelier@durgadassethjewellers.in",
  address: {
    line1: "Showroom — Hall Bazaar",
    line2: "Amritsar, Punjab 143001",
    line3: "India",
    // Placeholder coordinates near Hall Bazaar, Amritsar.
    lat: 31.6336,
    lng: 74.8723,
  },
  hours: "Mon–Sat · 11:00 to 20:00",
  founded: 1932,
} as const;

export const whatsappLink = (message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${brand.whatsappNumber}${text}`;
};
