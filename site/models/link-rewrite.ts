/**
 * Rewrites relative .md links in course Markdown to in-app hash routes.
 */

function rewriteHref(href: string): string {
  const trimmed = href.trim();
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("#/") || trimmed.startsWith("mailto:")) {
    return trimmed;
  }

  const dayBare = trimmed.match(/^day-(\d{2})\.md$/);
  if (dayBare) {
    return `#/day/${parseInt(dayBare[1]!, 10)}`;
  }

  if (trimmed === "checkpoint-schedule.md") {
    return "#/docs/checkpoint-schedule";
  }
  if (trimmed === "srs-queue.md") {
    return "#/docs/srs-queue";
  }

  if (trimmed.includes("mistake-bank.md")) {
    return "#/mistake-bank";
  }

  if (trimmed.includes("INDEX.md")) {
    return "#/hub";
  }

  if (trimmed.includes("checkpoint-schedule.md")) {
    return "#/docs/checkpoint-schedule";
  }

  if (trimmed.includes("srs-queue.md")) {
    return "#/docs/srs-queue";
  }

  const cheat = trimmed.match(/cheat-sheets\/([^/]+?)\.md$/);
  if (cheat) {
    return `#/cheat-sheets/${cheat[1]}`;
  }

  const viewsDay = trimmed.match(/views\/days\/day-(\d{2})\.md$/);
  if (viewsDay) {
    return `#/day/${parseInt(viewsDay[1]!, 10)}`;
  }

  const relViewsDay = trimmed.match(/\.\.\/views\/days\/day-(\d{2})\.md$/);
  if (relViewsDay) {
    return `#/day/${parseInt(relViewsDay[1]!, 10)}`;
  }

  return trimmed;
}

/**
 * Replace markdown link destinations only (inside parentheses after ]).
 */
export function rewriteInternalMarkdownLinks(markdown: string): string {
  return markdown.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (full, text, href) => {
    const next = rewriteHref(String(href));
    return `[${text}](${next})`;
  });
}
