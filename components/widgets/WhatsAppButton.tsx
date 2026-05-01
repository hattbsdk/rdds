"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/brand";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Hello, I would like to enquire about a piece.")}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ y: -2 }}
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-ivory shadow-[0_18px_40px_-15px_rgba(28,26,23,0.45)] sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-charcoal/20 blur-md"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.45L3 21z" />
        <path d="M9 10c.5 1.5 1.5 2.5 3 3 .5.2 1 .2 1.5 0l1-.5a1 1 0 0 1 1 .2l1 1c.3.3.3.8 0 1.1-1.5 1.5-4 1-6-1s-2.5-4.5-1-6c.3-.3.8-.3 1.1 0l1 1a1 1 0 0 1 .2 1l-.5 1c-.2.5-.2 1 0 1.5z" />
      </svg>
    </motion.a>
  );
}
