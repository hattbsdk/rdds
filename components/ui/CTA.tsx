import Link from "next/link";
import type { ReactNode } from "react";

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export default function CTA({
  href,
  children,
  variant = "primary",
  external,
}: CTAProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm tracking-wide transition-all duration-500 ease-soft active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? "bg-charcoal text-ivory hover:bg-graphite"
      : "border border-line text-charcoal hover:bg-bone";

  const icon = (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 ease-soft ${
        variant === "primary"
          ? "bg-ivory/15 text-ivory group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:bg-ivory/25"
          : "bg-bone text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:bg-line/60"
      }`}
      aria-hidden="true"
    >
      <Arrow />
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`${base} ${styles}`}
      >
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}

function Arrow() {
  return (
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
  );
}
