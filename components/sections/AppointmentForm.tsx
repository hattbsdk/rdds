"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const purposes = [
  { value: "viewing", label: "Private viewing" },
  { value: "custom", label: "Custom commission" },
  { value: "valuation", label: "Valuation / exchange" },
  { value: "other", label: "Something else" },
];

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    // No backend wired yet — log for now and show a confirmation.
    // Replace with a POST to a server route when an inbox / CRM is provisioned.
    // eslint-disable-next-line no-console
    console.info("[appointment] submission", data);

    // Simulate latency so the success state has weight.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  };

  return (
    <div className="rounded-[2rem] border border-line/70 bg-bone/40 p-2 shadow-[0_30px_60px_-30px_rgba(28,26,23,0.18)]">
      <div className="rounded-[calc(2rem-0.5rem)] bg-ivory p-6 sm:p-9">
        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="py-12 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line/70 bg-bone/60">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="var(--brand-gold-deep)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10.5l3.5 3.5L16 6" />
                </svg>
              </div>
              <p className="mt-6 font-serif text-3xl text-charcoal">
                Your request is with us.
              </p>
              <p className="mx-auto mt-4 max-w-md text-pretty text-[0.98rem] leading-relaxed text-graphite">
                One of the family will be in touch within the day to confirm
                your viewing. If it&rsquo;s urgent, do call us directly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm tracking-wide text-gold-deep underline-offset-4 hover:underline"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                className="sm:col-span-2"
              />

              <Field
                label="Preferred date"
                name="date"
                type="date"
                required
              />
              <Field
                label="Preferred time"
                name="time"
                type="time"
                required
              />

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="eyebrow">Purpose</span>
                <select
                  name="purpose"
                  defaultValue="viewing"
                  className="select"
                  required
                >
                  {purposes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="eyebrow">Notes (optional)</span>
                <textarea
                  name="notes"
                  rows={4}
                  className="textarea"
                  placeholder="Anything we should know — pieces of interest, design ideas, occasion."
                />
              </label>

              <div className="mt-2 flex items-center justify-between gap-4 sm:col-span-2">
                <p className="text-xs text-muted">
                  We&rsquo;ll only use these details to confirm your visit.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-3 rounded-full bg-charcoal pl-6 pr-2 py-2 text-sm tracking-wide text-ivory transition-all duration-500 ease-soft hover:bg-graphite active:scale-[0.98] disabled:opacity-60"
                >
                  <span>
                    {status === "submitting"
                      ? "Sending request"
                      : "Request appointment"}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 transition-all duration-500 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    {status === "submitting" ? (
                      <span className="h-2 w-2 animate-pulse rounded-full bg-ivory" />
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 11L11 3" />
                        <path d="M5 3h6v6" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        :global(.input),
        :global(.select),
        :global(.textarea) {
          width: 100%;
          background: transparent;
          border: 1px solid var(--brand-line);
          border-radius: 14px;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--brand-charcoal);
          transition: border-color 300ms var(--ease-soft),
            box-shadow 300ms var(--ease-soft);
        }
        :global(.input:focus),
        :global(.select:focus),
        :global(.textarea:focus) {
          outline: none;
          border-color: var(--brand-gold-deep);
          box-shadow: 0 0 0 3px rgba(176, 138, 74, 0.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="eyebrow">{label}</span>
      <input type={type} name={name} required={required} className="input" />
    </label>
  );
}
