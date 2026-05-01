# Durga Das Seth Jewellers — Website

A single-page heritage-luxury site for Durga Das Seth Jewellers, Amritsar.
Diamond polki, kundan, gold, certified solitaires, and gold/silver bullion.
Custom commissions, worldwide shipping, and a working investment calculator
that values old gold against today.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer
Motion. No CMS or backend wired up — content lives in code, the appointment
form logs to console until an inbox is provisioned.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start  # production build
```

## File map

```
app/
  layout.tsx                  Root layout, metadata, persistent nav/footer/widgets
  page.tsx                    Single-page composition (Hero → Heritage → Faces → Calculator → Contact)
  appointment/page.tsx        Booking page
  globals.css                 CSS variables, fonts, grain overlay
components/
  layout/Nav.tsx              Floating-pill nav, mobile mega-menu
  layout/Footer.tsx
  sections/Hero.tsx
  sections/Heritage.tsx       Brand story + category list + milestone timeline
  sections/Faces.tsx          Three-portrait family grid
  sections/Calculator.tsx     Investment calculator UI
  sections/Contact.tsx        Address + OpenStreetMap embed
  sections/AppointmentForm.tsx
  ui/CTA.tsx                  Pill-button with nested arrow icon
  ui/Eyebrow.tsx              Section eyebrow tag
  ui/Reveal.tsx               Scroll-triggered fade/blur reveal
  widgets/WhatsAppButton.tsx  Fixed bottom-right floating button
lib/
  brand.ts                    Phone, email, address, hours — single source of truth
  goldRates.ts                Historical rates dataset + calculator logic
```

## Where to swap things

### Brand colors

All brand colors are CSS variables in [`app/globals.css`](app/globals.css)
under `:root`. Replace the placeholder hex values once final brand colors
arrive — every component reads through these variables, so no other file
needs to change.

| Variable             | Used for                              |
| -------------------- | ------------------------------------- |
| `--brand-ivory`      | Page background                       |
| `--brand-bone`       | Subtle section bands, hover surfaces  |
| `--brand-charcoal`   | Body text, primary CTA background     |
| `--brand-graphite`   | Secondary text, hover states          |
| `--brand-muted`      | Helper text, captions                 |
| `--brand-line`       | Hairlines and borders                 |
| `--brand-gold`       | Accent (italic emphasis, indicators)  |
| `--brand-gold-deep`  | Gold accent on light surfaces         |
| `--brand-gold-soft`  | Gold accent on dark surfaces          |

### Phone, email, address, WhatsApp

Edit [`lib/brand.ts`](lib/brand.ts). The placeholder WhatsApp number is
`+919999999999` — replace `phone` and `whatsappNumber` together.

### Historical gold rates

Edit [`lib/goldRates.ts`](lib/goldRates.ts):

- `RATES_24K` — annual average INR/g for 24K gold. Add or update years
  as needed; 22K, 18K, and 14K are derived automatically from 24K via
  `KARAT_PURITY` multipliers.
- `CURRENT_RATE_PER_GRAM_24K` — the "today" reference price. Update
  this constant manually, or wire `fetchLiveRate()` (stub at the bottom
  of the file) to a provider like `gold-api.com`.
- `MAKING_CHARGE_RATE` (default 15%) and `GST_RATE` (default 3%) sit
  next to the dataset — both are applied only to the *initial*
  investment side. Resale/current-value side is metal-only by design.

### Three faces

Names, roles, bios, and image URLs sit in
[`components/sections/Faces.tsx`](components/sections/Faces.tsx). Drop
real photos into `public/faces/` and replace the `picsum.photos` URLs
with `/faces/<name>.jpg`.

### Hero image

[`components/sections/Hero.tsx`](components/sections/Hero.tsx) — the
image source is a single `<img src="https://picsum.photos/...">`.
Swap it for a real piece from the atelier.

### Map

[`components/sections/Contact.tsx`](components/sections/Contact.tsx)
uses an OpenStreetMap embed (no API key needed). The coordinates come
from `brand.address.lat` / `lng` in `lib/brand.ts`. To switch to a
Google Maps embed, replace the `<iframe>` `src` with a Google embed URL.

### Appointment form submissions

[`components/sections/AppointmentForm.tsx`](components/sections/AppointmentForm.tsx)
currently logs to `console.info` and shows a success state. To wire to
a real inbox / CRM, replace the `// No backend wired yet` block with a
`fetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) })`
call against an App Router route handler (`app/api/appointments/route.ts`).

## Design notes

- **Typography**: Cormorant Garamond (serif, headings) + Manrope
  (sans, body). Loaded via Google Fonts in `globals.css`.
- **Motion**: All transitions use `cubic-bezier(0.32, 0.72, 0, 1)` —
  exposed as the `--ease-soft` CSS variable. Scroll reveals fade-and-blur
  via Framer Motion's `whileInView`.
- **Containers**: Major panels use a "double-bezel" pattern — outer
  shell with a subtle background and large radius, inner core with a
  computed smaller radius. See `Hero.tsx`, `Calculator.tsx`,
  `AppointmentForm.tsx`.
- **Accessibility**: Semantic sectioning, alt text on all images,
  keyboard-navigable nav and forms, `prefers-reduced-motion`
  respected by `Reveal`.

## Outstanding

See [TODO.md](TODO.md).
