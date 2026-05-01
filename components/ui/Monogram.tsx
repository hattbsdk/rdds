// DDS lozenge — for nav, favicons, anywhere the full wordmark is too wide.
// Inherits color from currentColor.
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      role="img"
      aria-label="Durga Das Seth Jewellers"
      className={className}
    >
      <path
        d="M 28 4 L 52 28 L 28 52 L 4 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M 28 9 L 47 28 L 28 47 L 9 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.45"
      />
      <text
        x="28"
        y="32.5"
        fontFamily="'Cormorant Garamond', 'EB Garamond', serif"
        fontWeight="500"
        fontSize="12"
        letterSpacing="0.6"
        textAnchor="middle"
        fill="currentColor"
      >
        DDS
      </text>
    </svg>
  );
}
