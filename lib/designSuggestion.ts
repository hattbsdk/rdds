// Rule-based jewellery design suggestion engine.
// Takes the user's measurable inputs + vibe spectrum and writes a short
// serif-italic recommendation that reads like the family talking through a
// commission with you. No AI, no API calls — fully deterministic.

export type Occasion =
  | "wedding"
  | "engagement"
  | "anniversary"
  | "investment"
  | "everyday"
  | "reset"
  | "other";

export type PieceType =
  | "necklace"
  | "earrings"
  | "ring"
  | "bangles"
  | "unsure"
  | "open";

export type Budget =
  | "under-2"
  | "2-5"
  | "5-10"
  | "10-plus"
  | "10-15"
  | "15-20"
  | "20-plus"
  | "open";

export type Timeline = "1m" | "1-3m" | "3-6m" | "flexible";

export type StonePref =
  | "polki"
  | "kundan"
  | "gold"
  | "diamond"
  | "solitaire"
  | "coloured"
  | "open";

export type DesignBrief = {
  occasion: Occasion;
  pieceType: PieceType;
  budget: Budget;
  timeline: Timeline;
  // 1 (traditional) — 5 (contemporary)
  styleAxis: number;
  // 1 (restrained) — 5 (statement)
  weightAxis: number;
  stonePref: StonePref;
  notes?: string;
};

const occasionPhrase: Record<Occasion, string> = {
  wedding: "for the wedding",
  engagement: "for the engagement",
  anniversary: "for the anniversary",
  investment: "as an investment piece",
  everyday: "to wear often",
  reset: "from the heirloom you'd like to reset",
  other: "for the occasion you have in mind",
};

const piecePhrase: Record<PieceType, string> = {
  necklace: "a necklace",
  earrings: "a pair of earrings",
  ring: "a ring",
  bangles: "a pair of bangles",
  unsure: "a piece we'd discuss together",
  open: "the right piece",
};

const budgetRange: Record<Budget, string> = {
  "under-2": "around &#8377;1.5\u20132 lakh",
  "2-5": "in the &#8377;2\u20135 lakh band",
  "5-10": "in the &#8377;5\u201310 lakh band",
  "10-plus": "above &#8377;10 lakh",
  "10-15": "in the &#8377;10\u201315 lakh band",
  "15-20": "in the &#8377;15\u201320 lakh band",
  "20-plus": "above &#8377;20 lakh",
  open: "with no fixed ceiling",
};

const timelinePhrase: Record<Timeline, string> = {
  "1m": "we'd need to move quickly",
  "1-3m": "with one to three months on the bench",
  "3-6m": "with the bench giving it the time it deserves",
  flexible: "with the time to do it properly",
};

function styleDescriptor(axis: number): string {
  if (axis <= 1) return "drawn from the deepest of the old traditions";
  if (axis === 2) return "anchored in the traditional, with a gentle modern hand";
  if (axis === 3) return "balanced between the old and the new";
  if (axis === 4) return "leaning contemporary, but with heritage in its bones";
  return "unmistakably contemporary";
}

function weightDescriptor(axis: number): string {
  if (axis <= 1) return "quietly composed \u2014 the kind a person notices on the second look";
  if (axis === 2) return "restrained, with one or two moments of weight";
  if (axis === 3) return "balanced \u2014 it speaks, but doesn't shout";
  if (axis === 4) return "with a clear statement at the centre";
  return "openly statement \u2014 the room turns toward it";
}

function stoneDescriptor(stone: StonePref): string {
  switch (stone) {
    case "polki":
      return "Polki-led, with uncut diamonds set close on a gold ground";
    case "kundan":
      return "Kundan-led, in the old method that's been the bench's specialty";
    case "gold":
      return "All gold \u2014 the work in the metal itself, set without stones";
    case "diamond":
      return "Diamond-led, with brilliant-cuts chosen for fire and clarity";
    case "solitaire":
      return "Built around a single solitaire, set close in gold";
    case "coloured":
      return "With coloured gemstones at the heart \u2014 emerald, ruby, or sapphire, sourced over weeks";
    case "open":
      return "We'd choose the stones together at the showroom, against the light";
  }
}

function leadTimePhrase(timeline: Timeline): string {
  if (timeline === "1m") return "A month is workable for a piece like this.";
  if (timeline === "1-3m") return "One to three months is the natural rhythm for this kind of piece.";
  if (timeline === "3-6m") return "Three to six months gives us room to make it well.";
  return "We'd take the time it asks for.";
}

export function suggestDesign(brief: DesignBrief): {
  headline: string;
  body: string;
  meta: { range: string; lead: string; stones: string };
} {
  const headline = `${capitalize(piecePhrase[brief.pieceType])}, ${occasionPhrase[brief.occasion]}.`;

  const body = [
    `${stoneDescriptor(brief.stonePref)}.`,
    `${capitalize(styleDescriptor(brief.styleAxis))}, and ${weightDescriptor(brief.weightAxis)}.`,
    leadTimePhrase(brief.timeline),
  ].join(" ");

  return {
    headline,
    body,
    meta: {
      range: budgetRange[brief.budget],
      lead: timelinePhrase[brief.timeline],
      stones: stoneDescriptor(brief.stonePref),
    },
  };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
