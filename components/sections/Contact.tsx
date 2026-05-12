import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/ui/CTA";
import { brand, whatsappLink } from "@/lib/brand";

export default function Contact() {
  const { lat, lng } = brand.address;
  // OpenStreetMap embed — no API key required, suitable until a Google Maps
  // key is provisioned. The bbox keeps the showroom centred.
  const delta = 0.01;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section
      id="contact"
      className="relative bg-bone/30 px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hairline"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-deep">
                Come in
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[2.2rem] leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                The showroom is on Mall Road.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[44ch] text-pretty text-[1rem] leading-relaxed text-graphite">
                Walk in any day; for private viewings of polki suites or
                solitaires, do call ahead and we&rsquo;ll set the room
                aside. Tea is on us.
              </p>
            </Reveal>

            <dl className="mt-10 space-y-6">
              <Row label="Address">
                <p>
                  {brand.address.line1}
                  <br />
                  {brand.address.line2}
                  <br />
                  {brand.address.line3}
                </p>
              </Row>
              <Row label="Hours">{brand.hours}</Row>
              <Row label="Phone">
                <a
                  href={`tel:${brand.phone.tel}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {brand.phone.display}
                </a>
              </Row>
              <Row label="Email">
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {brand.email}
                </a>
              </Row>
            </dl>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CTA href="/#talk-design">Book a viewing</CTA>
                <CTA
                  href={whatsappLink(
                    "Welcome to the world of Raman Durga Das Seth. How can we help you?",
                  )}
                  variant="ghost"
                  external
                >
                  Chat on WhatsApp
                </CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line/70 bg-ivory p-2">
              <div
                className="overflow-hidden rounded-[calc(2rem-0.5rem)]"
                style={{ aspectRatio: "4 / 3" }}
              >
                <iframe
                  src={mapSrc}
                  title="Map of Durga Das Seth Jewellers showroom"
                  loading="lazy"
                  className="h-full w-full border-0 grayscale-[20%]"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <a
                href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[0.78rem] text-muted underline-offset-4 hover:text-charcoal hover:underline"
              >
                Open larger map
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-line/70 pt-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-baseline sm:gap-6">
      <dt className="eyebrow">{label}</dt>
      <dd className="break-words text-[0.95rem] leading-relaxed text-graphite sm:text-[0.98rem]">
        {children}
      </dd>
    </div>
  );
}
