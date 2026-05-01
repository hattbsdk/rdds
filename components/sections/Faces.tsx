import Reveal from "@/components/ui/Reveal";

const people = [
  {
    name: "Pankaj Seth",
    role: "Third generation",
    bio: "Runs the bench. Sees every piece before it leaves the shop.",
    img: "https://picsum.photos/seed/ddseth-pankaj/720/900",
  },
  {
    name: "Pankaj's brother",
    role: "Third generation",
    bio: "The other half of the bench. Handles bullion and the long-standing trade.",
    img: "https://picsum.photos/seed/ddseth-brother/720/900",
  },
  {
    name: "Ramit Seth",
    role: "Fourth generation",
    bio: "Pankaj&rsquo;s son. The first call on custom commissions and new clients.",
    img: "https://picsum.photos/seed/ddseth-ramit/720/900",
  },
];

export default function Faces() {
  return (
    <section
      id="faces"
      className="relative bg-bone/30 px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hairline"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-gold-deep">
                The family
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[2.2rem] leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Three of us, mostly.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="max-w-[42ch] text-pretty text-[0.98rem] leading-relaxed text-graphite">
                The shop has always belonged to the family. Between the
                three of us &mdash; and a few karigars who&rsquo;ve been
                here longer than any of us &mdash; that&rsquo;s the whole
                house.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.08} as="article">
              <figure className="group">
                <div className="rounded-[1.5rem] border border-line/70 bg-ivory p-1.5 transition-transform duration-700 ease-soft group-hover:-translate-y-1">
                  <div
                    className="overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-charcoal"
                    style={{ aspectRatio: "4 / 5" }}
                  >
                    <img
                      src={p.img}
                      alt={`Portrait of ${p.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-1000 ease-soft group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <figcaption className="mt-5 px-1">
                  <p className="font-serif text-2xl leading-tight text-charcoal">
                    {p.name}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-muted">{p.role}</p>
                  <p
                    className="mt-3 max-w-[36ch] text-pretty text-[0.95rem] leading-relaxed text-graphite"
                    dangerouslySetInnerHTML={{ __html: p.bio }}
                  />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
