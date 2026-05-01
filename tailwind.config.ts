import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "var(--brand-ivory)",
        bone: "var(--brand-bone)",
        charcoal: "var(--brand-charcoal)",
        graphite: "var(--brand-graphite)",
        muted: "var(--brand-muted)",
        line: "var(--brand-line)",
        gold: {
          DEFAULT: "var(--brand-gold)",
          deep: "var(--brand-gold-deep)",
          soft: "var(--brand-gold-soft)",
        },
        wine: {
          DEFAULT: "var(--brand-wine)",
          deep: "var(--brand-wine-deep)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
