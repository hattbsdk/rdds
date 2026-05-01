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
  | "suite"
  | "open";

export type Budget = "under-2" | "2-5" | "5-10" | "10-plus" | "open";

export type Timeline = "1m" | "1-3m" | "3-6m" | "flexible";

export type StonePref = "polki" | "kundan" | "solitaire" | "coloured" | "open";

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
  suite: "a full suite",
  open: "the right piece",
};

const budgetRange: Record<Budget, string> = {
  "under-2": "around &#8377;1.5\u20132 lakh",
  "2-5": "in the &#8377;2\u20135 lakh band",
  "5-10": "in the &#8377;5\u201310 lakh band",
  "10-plus": "above &#8377;10 lakh",
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
      return "Polki-led, with uncut diamonds set close on a 22K gold ground";
    case "kundan":
      return "Kundan-led, in the old Mughal-court method that's been our bench's specialty";
    case "solitaire":
      return "Built around a certified solitaire, set in 18K";
    case "coloured":
      return "With coloured stones at the heart \u2014 emerald, ruby, or sapphire, sourced over weeks";
    case "open":
      return "We'd choose the stones together at the showroom, against the light";
  }
}

function leadTimePhrase(timeline: Timeline, pieceType: PieceType): string {
  if (pieceType === "suite") {
    if (timeline === "1m")
      return "A full suite in a month is tight \u2014 doable, but we'd need to start the bench tonight.";
    if (timeline === "1-3m")
      return "A suite in this window is comfortable for our bench.";
    if (timeline === "3-6m")
      return "Three to six months is exactly the amount of time a proper suite asks for.";
    return "Without a deadline, we can take the suite the full distance.";
  }
  if (timeline === "1m") return "A month is workable for a single piece like this.";
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
    leadTimePhrase(brief.timeline, brief.pieceType),
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
