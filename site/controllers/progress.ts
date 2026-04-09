import type { ProgressState } from "../models/types";

const STORAGE_KEY = "calculus30-progress-v1";

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { completedDays: [], lastVisitedDay: null };
    }
    const p = JSON.parse(raw) as Record<string, unknown>;
    const completed = Array.isArray(p.completedDays)
      ? (p.completedDays as unknown[]).filter((n): n is number => typeof n === "number" && n >= 1 && n <= 30)
      : [];
    const last =
      typeof p.lastVisitedDay === "number" && p.lastVisitedDay >= 1 && p.lastVisitedDay <= 30
        ? p.lastVisitedDay
        : null;
    return { completedDays: [...new Set(completed)].sort((a, b) => a - b), lastVisitedDay: last };
  } catch {
    return { completedDays: [], lastVisitedDay: null };
  }
}

function save(state: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function setProgress(state: ProgressState): void {
  save(state);
}

export function toggleDayCompleted(day: number): ProgressState {
  const p = loadProgress();
  const set = new Set(p.completedDays);
  if (set.has(day)) {
    set.delete(day);
  } else {
    set.add(day);
  }
  const next: ProgressState = {
    completedDays: [...set].sort((a, b) => a - b),
    lastVisitedDay: p.lastVisitedDay,
  };
  save(next);
  return next;
}

export function markLastVisited(day: number): ProgressState {
  const p = loadProgress();
  const next: ProgressState = { ...p, lastVisitedDay: day };
  save(next);
  return next;
}

export function isDayComplete(day: number): boolean {
  return loadProgress().completedDays.includes(day);
}
