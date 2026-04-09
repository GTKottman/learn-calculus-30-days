const DEFAULT_TITLE = "Calculus I — 30-Day Course";
const DEFAULT_DESC =
  "Work through limits, derivatives, integration, and applications with checkpoints and local progress.";

export function setPageMeta(title: string, description: string = DEFAULT_DESC): void {
  const full = title === DEFAULT_TITLE ? title : `${title} · ${DEFAULT_TITLE}`;
  document.title = full;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", full);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute("content", description);
  }
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", description);
  }
}

export function resetMetaToDefault(): void {
  setPageMeta(DEFAULT_TITLE, DEFAULT_DESC);
}
