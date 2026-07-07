// Single source of truth for brand contact details, social links, and showroom
// coordinates. Update values here once and they propagate across the site.

export const brand = {
  name: "Raman Durga Das Seth Jewellers",
  tagline: "Heritage jewellery, Amritsar",
  phones: [
    { display: "+91 98151 39200", tel: "+919815139200" },
    { display: "+91 98140 52405", tel: "+919814052405" },
    { display: "+91 98142 95401", tel: "+919814295401" },
    ],
  phone: {
    display: "+91 98151 39200",
    tel: "+919815139200",
  },
  whatsappNumber: "919815139200",
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
  localityTagline: "Guru Bazaar - Lawrence Road - Mall Road - Amritsar",
  hours: "Mon-Sat, 11:00 to 20:00",
  founded: 1919,
} as const;

export const whatsappLink = (message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${brand.whatsappNumber}${text}`;
};
