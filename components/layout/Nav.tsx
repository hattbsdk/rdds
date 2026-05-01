"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram } from "@/components/ui/Monogram";

const links = [
  { label: "Heritage", href: "/#heritage" },
  { label: "The House", href: "/#faces" },
  { label: "Pieces", href: "/#pieces" },
  { label: "Design", href: "/#design" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Visit", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-line/60 px-4 py-2 transition-all duration-700 ease-soft sm:px-6 ${
            scrolled
              ? "bg-ivory/80 shadow-[0_10px_40px_-20px_rgba(28,26,23,0.18)] backdrop-blur-xl"
              : "bg-ivory/60 backdrop-blur-md"
          }`}
        >
          <Link
            href="/#top"
            className="flex items-center gap-3 text-charcoal"
            aria-label="Durga Das Seth Jewellers — home"
          >
            <Monogram className="h-9 w-9 text-gold-deep" />
            <span className="hidden font-serif text-[1.05rem] tracking-[0.18em] leading-none sm:inline">
              DURGA DAS SETH
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.82rem] tracking-wide text-graphite transition-colors duration-300 hover:text-charcoal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/appointment"
              className="hidden items-center gap-2 rounded-full bg-charcoal pl-4 pr-1.5 py-1.5 text-[0.78rem] tracking-wide text-ivory transition-all duration-500 ease-soft hover:bg-graphite active:scale-[0.98] sm:inline-flex"
            >
              <span>Book a viewing</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/15">
                <svg
                  width="12"
                  height="12"
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
              </span>
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line/70 bg-bone/50 md:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-charcoal transition-transform duration-500 ease-soft ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-charcoal transition-transform duration-500 ease-soft ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-ivory/90 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <ul className="flex flex-col items-center gap-6 text-center">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl text-charcoal"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <Link
                  href="/appointment"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm text-ivory"
                >
                  Book a viewing
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

