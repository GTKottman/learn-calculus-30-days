export type DayEntry = {
  day: number;
  slug: string;
  title: string;
  topic: string;
  isCheckpoint: boolean;
};

export type CheatSheetEntry = {
  slug: string;
  title: string;
};

export type ProgressState = {
  completedDays: number[];
  lastVisitedDay: number | null;
};

export type Route =
  | { name: "home" }
  | { name: "day"; day: number }
  | { name: "cheatSheets" }
  | { name: "cheatSheet"; slug: string }
  | { name: "mistakeBank" }
  | { name: "hub" }
  | { name: "doc"; slug: "checkpoint-schedule" | "srs-queue" };
