# TODO

Real content and configuration that the build is waiting on. Group A items
are blockers for going live; Group B are improvements.

## A. Real content (blockers for launch)

- [ ] **Final brand colors.** Drop the hex codes into the CSS variables in
      [`app/globals.css`](app/globals.css). Variables are:
      `--brand-ivory`, `--brand-bone`, `--brand-charcoal`,
      `--brand-graphite`, `--brand-muted`, `--brand-line`,
      `--brand-gold`, `--brand-gold-deep`, `--brand-gold-soft`.
- [ ] **Brand logo.** The nav uses an inline SVG mark (a simple star/jali
      outline). Replace the `<Mark />` component in
      [`components/layout/Nav.tsx`](components/layout/Nav.tsx) with the
      real wordmark or monogram.
- [ ] **WhatsApp number.** Currently `+919999999999`. Edit
      `whatsappNumber` and `phone` in [`lib/brand.ts`](lib/brand.ts).
- [ ] **Showroom address & coordinates.** Placeholder address is "Hall
      Bazaar, Amritsar" with rough lat/lng. Edit `brand.address` in
      [`lib/brand.ts`](lib/brand.ts).
- [ ] **Email address.** Placeholder
      `atelier@durgadassethjewellers.in`. Edit `brand.email` in
      [`lib/brand.ts`](lib/brand.ts).
- [ ] **Three faces.** Names, roles, and bios in
      [`components/sections/Faces.tsx`](components/sections/Faces.tsx)
      are placeholder. Replace the `people` array and drop real photos
      into `public/faces/`.
- [ ] **Hero image.** Currently a `picsum.photos` placeholder. Drop a
      real atelier shot into `public/` and update the `<img src>` in
      [`components/sections/Hero.tsx`](components/sections/Hero.tsx).
- [ ] **Brand story copy.** The four-milestone timeline in
      [`components/sections/Heritage.tsx`](components/sections/Heritage.tsx)
      uses placeholder dates and copy ("1968 — Second generation",
      etc.). The family should rewrite these milestones with the real
      arc.
- [ ] **New showroom announcement.** Hero has a "New showroom open"
      chip; Heritage timeline ends with "A new showroom — same hands".
      Adjust copy if the showroom is already open vs. opening soon.
- [ ] **OG / share image.** Add `public/og.png` (1200x630) and a
      `metadata.openGraph.images` entry in
      [`app/layout.tsx`](app/layout.tsx).
- [ ] **Favicon.** Currently the Next.js stock `app/favicon.ico`.
      Replace with the brand mark.

## B. Functionality to wire up

- [ ] **Appointment form backend.** Currently logs to `console.info`
      and shows a success state.
      [`components/sections/AppointmentForm.tsx`](components/sections/AppointmentForm.tsx)
      has a `// No backend wired yet` comment marking the spot.
      Options: Resend / Postmark email, a Google Sheet via Apps
      Script webhook, or a CRM endpoint.
- [ ] **Live gold price.** `CURRENT_RATE_PER_GRAM_24K` in
      [`lib/goldRates.ts`](lib/goldRates.ts) is hand-maintained.
      `fetchLiveRate()` is a stub — wire it to a provider
      (`gold-api.com` is free, no key) and call it from a server-side
      route at build or request time.
- [ ] **Map provider.** Contact section uses OpenStreetMap. If a
      Google Maps API key is provisioned, swap the `<iframe>` `src` in
      [`components/sections/Contact.tsx`](components/sections/Contact.tsx).
- [ ] **shadcn/ui (optional).** The brief mentions shadcn primitives;
      this build uses hand-rolled Tailwind components for tighter
      control over the heritage aesthetic. If shadcn is wanted later,
      `npx shadcn-ui@latest init` and progressively replace the
      hand-rolled inputs/selects in `AppointmentForm.tsx` and
      `Calculator.tsx`.

## C. Nice to have

- [ ] **Real piece photography** for the Hero — ideally a single
      hero piece against a soft showroom backdrop, not a stock cut.
- [ ] **Portrait styling** for the three faces. The current grid
      treats portraits in soft black-and-white that warm to color on
      hover. Real shoots should be lit consistently for that to land.
- [ ] **Press / coverage strip.** A quiet logo row of publications
      that have featured the house could sit between Heritage and
      Faces if the family wishes to show provenance.
- [ ] **Sitemap & robots.** Add `next-sitemap` config when the final
      domain is known; set `metadataBase` in
      [`app/layout.tsx`](app/layout.tsx) via `NEXT_PUBLIC_SITE_URL`.
- [ ] **Analytics.** Plausible or Fathom — both lightweight and
      privacy-respecting; one snippet in `app/layout.tsx`.
- [ ] **Animations on prefers-reduced-motion.** Already respected by
      the Reveal component, but worth a final QA on the WhatsApp
      button entry animation.
