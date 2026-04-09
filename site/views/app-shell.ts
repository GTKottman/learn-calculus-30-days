import { CHEAT_SHEETS, DAYS } from "../models/course-manifest";

function dayNavSections(): string {
  const weeks: { label: string; days: typeof DAYS }[] = [
    { label: "Week 1", days: DAYS.slice(0, 7) },
    { label: "Week 2", days: DAYS.slice(7, 14) },
    { label: "Week 3", days: DAYS.slice(14, 21) },
    { label: "Week 4", days: DAYS.slice(21, 28) },
    { label: "Week 5", days: DAYS.slice(28, 30) },
  ];

  return weeks
    .map(
      (w) => `
    <section class="nav-section" aria-labelledby="nav-${w.label.replace(/\s+/g, "-")}">
      <h3 class="nav-section-title" id="nav-${w.label.replace(/\s+/g, "-")}">${w.label}</h3>
      <ul class="nav-day-list">
        ${w.days
          .map((d) => {
            const cp = d.isCheckpoint ? ' <span class="badge-checkpoint" title="Checkpoint">CP</span>' : "";
            return `<li><a class="nav-day-link" href="#/day/${d.day}">Day ${d.day}${cp}</a></li>`;
          })
          .join("")}
      </ul>
    </section>`
    )
    .join("");
}

export function buildAppShell(): string {
  const cheatLinks = CHEAT_SHEETS.map(
    (c) => `<li><a href="#/cheat-sheets/${c.slug}">${c.title}</a></li>`
  ).join("");

  return `
  <a href="#main" class="skip-link">Skip to content</a>
  <div class="app-frame">
    <header class="site-header">
      <div class="site-header-inner">
        <a class="brand" href="#/">Calculus I <span class="brand-sub">30 days</span></a>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="side-nav" aria-label="Open course menu"></button>
      </div>
    </header>
    <div class="body-row">
      <aside class="side-nav" id="side-nav" aria-label="Course">
        <nav class="side-nav-inner">
          <div class="nav-block">
            <h2 class="nav-heading">Course</h2>
            <ul class="nav-primary">
              <li><a href="#/">Home</a></li>
              <li><a href="#/hub">Course hub</a></li>
              <li><a href="#/cheat-sheets">Cheat sheets</a></li>
              <li><a href="#/mistake-bank">Mistake bank</a></li>
            </ul>
          </div>
          <div class="nav-block">
            <h2 class="nav-heading">Instructor notes</h2>
            <ul class="nav-primary">
              <li><a href="#/docs/checkpoint-schedule">Checkpoint schedule</a></li>
              <li><a href="#/docs/srs-queue">Spaced repetition queue</a></li>
            </ul>
          </div>
          <div class="nav-block nav-block-days">
            <h2 class="nav-heading">Days</h2>
            ${dayNavSections()}
          </div>
          <div class="nav-block">
            <h2 class="nav-heading">Cheat sheets</h2>
            <ul class="nav-primary">${cheatLinks}</ul>
          </div>
        </nav>
      </aside>
      <div class="main-column">
        <div class="page-toolbar" id="page-toolbar"></div>
        <main id="main" class="main-area">
          <div class="loading-state" id="loading-root">Loading…</div>
          <article class="md-root lesson-body" id="article-root" hidden></article>
        </main>
      </div>
    </div>
  </div>`;
}

export function bindShellInteractions(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>(".nav-toggle");
  const aside = root.querySelector(".side-nav");
  if (!toggle || !aside) return;

  const setOpen = (open: boolean) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  aside.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.closest("a")) {
      setOpen(false);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });
}
