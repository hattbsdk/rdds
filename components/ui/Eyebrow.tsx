import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-line/70 bg-bone/40 px-3 py-1 ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
