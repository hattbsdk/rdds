type WordmarkProps = {
  className?: string;
  showLine?: boolean;
  showSubline?: boolean;
};

// Three-line typographic lockup: "DURGA DAS SETH" / hairline + lozenge / "JEWELLERS".
// Inherits color from currentColor — recolor in CSS, not here.
export function Wordmark({
  className,
  showLine = true,
  showSubline = true,
}: WordmarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 120"
      role="img"
      aria-label="Durga Das Seth Jewellers"
      className={className}
    >
      <text
        x="210"
        y="46"
        fontFamily="'Cormorant Garamond', 'EB Garamond', serif"
        fontWeight="500"
        fontSize="34"
        letterSpacing="5"
        textAnchor="middle"
        fill="currentColor"
      >
        DURGA DAS SETH
      </text>
      {showLine && (
        <>
          <line
            x1="138"
            y1="64"
            x2="200"
            y2="64"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <path
            d="M 210 57 L 217 64 L 210 71 L 203 64 Z"
            fill="currentColor"
          />
          <line
            x1="220"
            y1="64"
            x2="282"
            y2="64"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </>
      )}
      <text
        x="210"
        y="90"
        fontFamily="'Cormorant Garamond', 'EB Garamond', serif"
        fontWeight="400"
        fontSize="14"
        letterSpacing="9"
        textAnchor="middle"
        fill="currentColor"
      >
        JEWELLERS
      </text>
      {showSubline && (
        <text
          x="210"
          y="111"
          fontFamily="'Manrope', 'Inter', sans-serif"
          fontWeight="500"
          fontSize="8"
          letterSpacing="3"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
        >
          AMRITSAR &#183; SINCE 1932
        </text>
      )}
    </svg>
  );
}
