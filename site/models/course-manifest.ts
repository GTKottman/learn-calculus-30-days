import type { CheatSheetEntry, DayEntry } from "./types";

/** Checkpoint days per controllers/checkpoint-schedule.md */
const CHECKPOINT_DAYS = new Set([7, 14, 21, 28]);

const TOPICS: { topic: string; title: string }[] = [
  { topic: "Average rate of change; secant slope", title: "Average rate of change and secant slope" },
  { topic: "Difference quotient; derivative as a limit", title: "Difference quotient and derivative as a limit" },
  { topic: "Limits (informal), one-sided limits, limit laws", title: "Limits, one-sided limits, and limit laws" },
  { topic: "Continuity at a point; combining continuous functions", title: "Continuity at a point" },
  { topic: "Discontinuity types; limits and continuity practice", title: "Discontinuity types and practice" },
  { topic: "Intermediate Value Theorem", title: "Intermediate Value Theorem" },
  { topic: "**Checkpoint 1** — limits and continuity", title: "Checkpoint 1 — limits and continuity" },
  { topic: "Computing derivatives: polynomials, sums, product rule", title: "Computing derivatives: polynomials and product rule" },
  { topic: "Trig derivatives; squeeze theorem", title: "Trig derivatives and the squeeze theorem" },
  { topic: "Chain rule", title: "Chain rule" },
  { topic: "Exponential and logarithmic derivatives", title: "Exponential and logarithmic derivatives" },
  { topic: "Curve sketching: \\(f'\\) and \\(f''\\) tests", title: "Curve sketching with f′ and f″" },
  { topic: "Asymptotes; limits at infinity", title: "Asymptotes and limits at infinity" },
  { topic: "Implicit differentiation; **Checkpoint 2**", title: "Implicit differentiation and Checkpoint 2" },
  { topic: "Optimization on intervals", title: "Optimization on intervals" },
  { topic: "Mean Value Theorem", title: "Mean Value Theorem" },
  { topic: "Related rates", title: "Related rates" },
  { topic: "L’Hôpital’s Rule", title: "L’Hôpital’s Rule" },
  { topic: "Taylor polynomials", title: "Taylor polynomials" },
  { topic: "Applications synthesis (bridge to Checkpoint 3)", title: "Applications synthesis" },
  { topic: "**Checkpoint 3** — applications and Taylor", title: "Checkpoint 3 — applications and Taylor" },
  { topic: "Riemann sums; area and net signed area", title: "Riemann sums and area" },
  { topic: "Fundamental Theorem of Calculus", title: "Fundamental Theorem of Calculus" },
  { topic: "Integration by substitution", title: "Integration by substitution" },
  { topic: "Integration by parts", title: "Integration by parts" },
  { topic: "Area between curves; volume (solids of revolution)", title: "Area between curves and volume" },
  { topic: "Arc length; surface area of revolution", title: "Arc length and surface area" },
  { topic: "Average value; improper integrals; **Checkpoint 4**", title: "Average value, improper integrals, Checkpoint 4" },
  {
    topic: "Techniques and extensions (trig integrals, partial fractions, DE, Newton, extras)",
    title: "Techniques and extensions",
  },
  { topic: "Final comprehensive review and cheat-site capstone", title: "Final comprehensive review" },
];

export const DAYS: DayEntry[] = TOPICS.map((row, i) => {
  const day = i + 1;
  const slug = `day-${String(day).padStart(2, "0")}`;
  return {
    day,
    slug,
    title: row.title,
    topic: row.topic.replace(/\*\*/g, ""),
    isCheckpoint: CHECKPOINT_DAYS.has(day),
  };
});

export const CHEAT_SHEETS: CheatSheetEntry[] = [
  { slug: "limits-and-continuity", title: "Limits and continuity" },
  { slug: "derivatives", title: "Derivatives" },
  { slug: "integrals-and-ftc", title: "Integrals and FTC" },
  { slug: "applications-and-setup", title: "Applications and setup" },
  { slug: "series-extras-and-de", title: "Series, extras, and DE" },
];

export function getDayByNumber(n: number): DayEntry | undefined {
  return DAYS.find((d) => d.day === n);
}

export function getAdjacentDays(day: number): { prev: DayEntry | null; next: DayEntry | null } {
  const prev = day > 1 ? getDayByNumber(day - 1)! : null;
  const next = day < 30 ? getDayByNumber(day + 1)! : null;
  return { prev, next };
}
