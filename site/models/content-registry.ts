/**
 * Build-time registry of Markdown sources (single source of truth under views/ and models/).
 */

const dayModules = import.meta.glob<string>("../../views/days/day-*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const cheatModules = import.meta.glob<string>("../../views/cheat-sheets/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const mistakeBankMod = import.meta.glob<string>("../../models/mistake-bank.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const hubMod = import.meta.glob<string>("../../controllers/INDEX.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const checkpointDoc = import.meta.glob<string>("../../controllers/checkpoint-schedule.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const srsDoc = import.meta.glob<string>("../../controllers/srs-queue.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function firstValue(map: Record<string, string>): string | undefined {
  const k = Object.keys(map)[0];
  return k !== undefined ? map[k] : undefined;
}

export function getDayMarkdown(day: number): string | undefined {
  const key = `../../views/days/day-${String(day).padStart(2, "0")}.md`;
  return dayModules[key];
}

export function getCheatSheetMarkdown(slug: string): string | undefined {
  const key = `../../views/cheat-sheets/${slug}.md`;
  return cheatModules[key];
}

export function listCheatSheetKeys(): string[] {
  return Object.keys(cheatModules).map((k) => {
    const m = k.match(/cheat-sheets\/([^/]+)\.md$/);
    return m ? m[1]! : "";
  }).filter(Boolean);
}

export function getMistakeBankMarkdown(): string | undefined {
  return firstValue(mistakeBankMod);
}

export function getHubMarkdown(): string | undefined {
  return firstValue(hubMod);
}

export function getDocMarkdown(slug: "checkpoint-schedule" | "srs-queue"): string | undefined {
  if (slug === "checkpoint-schedule") {
    return firstValue(checkpointDoc);
  }
  return firstValue(srsDoc);
}
