import mermaid from "mermaid";
import { buildAppShell, bindShellInteractions } from "./views/app-shell";
import { resetMetaToDefault, setPageMeta } from "./views/meta";
import { renderLessonHtml } from "./views/page-pipeline";
import { CHEAT_SHEETS, DAYS, getAdjacentDays, getDayByNumber } from "./models/course-manifest";
import {
  getCheatSheetMarkdown,
  getDayMarkdown,
  getDocMarkdown,
  getHubMarkdown,
  getMistakeBankMarkdown,
} from "./models/content-registry";
import { markLastVisited, loadProgress, toggleDayCompleted, isDayComplete } from "./controllers/progress";
import { parseHash } from "./controllers/router";
import type { Route } from "./models/types";
import "./styles.css";

mermaid.initialize({
  startOnLoad: false,
  theme: "neutral",
  securityLevel: "strict",
  fontFamily: "DM Sans, system-ui, sans-serif",
});

let shellMounted = false;

function el<K extends keyof HTMLElementTagNameMap>(sel: string, root: ParentNode = document): HTMLElementTagNameMap[K] | null {
  return root.querySelector(sel);
}

function renderHome(): string {
  const p = loadProgress();
  const done = p.completedDays.length;
  const cards = DAYS.map((d) => {
    const complete = p.completedDays.includes(d.day);
    const cp = d.isCheckpoint ? " is-checkpoint" : "";
    const doneCls = complete ? " is-done" : "";
    return `
      <a class="day-card${cp}${doneCls}" href="#/day/${d.day}">
        <div class="day-card-num">Day ${d.day}${d.isCheckpoint ? ' · <span class="badge-checkpoint">Checkpoint</span>' : ""}</div>
        <h2 class="day-card-title">${escapeHtml(d.title)}</h2>
        <p class="day-card-meta">${escapeHtml(d.topic)}</p>
      </a>`;
  }).join("");

  return `
    <div class="home-hero">
      <h1>Calculus I in 30 days</h1>
      <p>
        Structured lessons from rates of change through integration, with checkpoints, cheat sheets, and a mistake bank.
        Progress is saved only in this browser.
      </p>
      <div class="progress-pill" role="status">
        <span>Progress:</span> <strong>${done}</strong> / 30 days marked complete
        ${p.lastVisitedDay ? ` · Last opened: <strong>Day ${p.lastVisitedDay}</strong>` : ""}
      </div>
      <div class="home-links">
        <a href="#/cheat-sheets">Cheat sheets</a>
        <a href="#/mistake-bank" class="secondary">Mistake bank</a>
        <a href="#/hub" class="secondary">Course hub</a>
      </div>
    </div>
    <h2 class="md-root" style="font-family: var(--font-display); font-size: 1.25rem; margin: var(--space-4) auto var(--space-2); max-width: var(--content-max);">30-day roadmap</h2>
    <div class="day-grid">${cards}</div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDayToolbar(day: number): string {
  const entry = getDayByNumber(day);
  if (!entry) return "";
  const { prev, next } = getAdjacentDays(day);
  const complete = isDayComplete(day);
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · Day ${day}</nav>
    <div class="toolbar-actions">
      <label class="complete-toggle">
        <input type="checkbox" data-complete-day="${day}" ${complete ? "checked" : ""} />
        Mark day complete
      </label>
      <div class="adj-nav">
        ${
          prev
            ? `<a href="#/day/${prev.day}">← Day ${prev.day}</a>`
            : `<span class="muted">← Previous</span>`
        }
        ${
          next
            ? `<a href="#/day/${next.day}">Day ${next.day} →</a>`
            : `<span class="muted">Next →</span>`
        }
      </div>
    </div>`;
}

function bindDayToolbar(root: HTMLElement): void {
  const cb = root.querySelector<HTMLInputElement>("input[data-complete-day]");
  cb?.addEventListener("change", () => {
    const day = parseInt(cb.getAttribute("data-complete-day") || "0", 10);
    if (day >= 1 && day <= 30) {
      toggleDayCompleted(day);
    }
  });
}

async function runMermaidIn(root: HTMLElement): Promise<void> {
  const nodes = root.querySelectorAll<HTMLElement>(".mermaid");
  if (nodes.length === 0) return;
  try {
    await mermaid.run({ nodes, suppressErrors: true });
  } catch (e) {
    console.warn("Mermaid:", e);
  }
}

function setNavCurrent(route: Route): void {
  const links = document.querySelectorAll<HTMLAnchorElement>(".side-nav a[href^='#']");
  links.forEach((a) => {
    const h = a.getAttribute("href") || "";
    let current = false;
    if (route.name === "home" && (h === "#/" || h === "#")) {
      current = true;
    } else if (route.name === "day" && h === `#/day/${route.day}`) {
      current = true;
    } else if (route.name === "cheatSheets" && h === "#/cheat-sheets") {
      current = true;
    } else if (route.name === "cheatSheet" && h === `#/cheat-sheets/${route.slug}`) {
      current = true;
    } else if (route.name === "mistakeBank" && h === "#/mistake-bank") {
      current = true;
    } else if (route.name === "hub" && h === "#/hub") {
      current = true;
    } else if (route.name === "doc" && h === `#/docs/${route.slug}`) {
      current = true;
    }
    if (current) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

async function renderRoute(): Promise<void> {
  const route = parseHash();
  const mount = document.getElementById("app");
  if (!mount) return;
  if (!shellMounted) {
    mount.innerHTML = buildAppShell();
    bindShellInteractions(mount);
    shellMounted = true;
  }

  const root = mount;
  const loading = el("#loading-root", root)!;
  const article = el("#article-root", root)!;
  const toolbar = el("#page-toolbar", root)!;

  loading.hidden = false;
  article.hidden = true;

  try {
    switch (route.name) {
      case "home": {
        resetMetaToDefault();
        toolbar.innerHTML = "";
        article.innerHTML = renderHome();
        break;
      }
      case "day": {
        const md = getDayMarkdown(route.day);
        if (!md) {
          article.innerHTML = `<p class="md-root">Day not found.</p>`;
          setPageMeta("Day not found");
          break;
        }
        markLastVisited(route.day);
        const entry = getDayByNumber(route.day)!;
        setPageMeta(`Day ${route.day} — ${entry.title}`);
        toolbar.innerHTML = renderDayToolbar(route.day);
        article.innerHTML = renderLessonHtml(md, { stripFirstHeading: true });
        bindDayToolbar(root);
        break;
      }
      case "cheatSheets": {
        setPageMeta("Cheat sheets", "Quick reference for limits, derivatives, integrals, and applications.");
        toolbar.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · Cheat sheets</nav>`;
        const list = CHEAT_SHEETS.map(
          (c) =>
            `<li><a href="#/cheat-sheets/${c.slug}">${escapeHtml(c.title)}</a> — <span style="color:var(--color-text-muted)">${escapeHtml(c.slug)}</span></li>`
        ).join("");
        article.innerHTML = `<div class="md-root"><h1>Cheat sheets</h1><p>Condensed reference pages for review.</p><ul>${list}</ul></div>`;
        break;
      }
      case "cheatSheet": {
        const md = getCheatSheetMarkdown(route.slug);
        if (!md) {
          article.innerHTML = `<p class="md-root">Cheat sheet not found.</p>`;
          setPageMeta("Not found");
          toolbar.innerHTML = "";
          break;
        }
        const entry = CHEAT_SHEETS.find((c) => c.slug === route.slug);
        setPageMeta(`${entry?.title ?? route.slug} — Cheat sheet`);
        toolbar.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · <a href="#/cheat-sheets">Cheat sheets</a> · ${escapeHtml(entry?.title ?? route.slug)}</nav>`;
        article.innerHTML = renderLessonHtml(md, { stripFirstHeading: true });
        break;
      }
      case "mistakeBank": {
        const md = getMistakeBankMarkdown();
        setPageMeta("Mistake bank", "Common Calculus I errors and fixes.");
        toolbar.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · Mistake bank</nav>`;
        article.innerHTML = md ? renderLessonHtml(md, { stripFirstHeading: true }) : `<p class="md-root">Missing content.</p>`;
        break;
      }
      case "hub": {
        const md = getHubMarkdown();
        setPageMeta("Course hub", "Navigate the 30-day Markdown course and resources.");
        toolbar.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · Course hub</nav>`;
        article.innerHTML = md ? renderLessonHtml(md, { stripFirstHeading: true }) : `<p class="md-root">Missing hub.</p>`;
        break;
      }
      case "doc": {
        const md = getDocMarkdown(route.slug);
        const titles: Record<typeof route.slug, string> = {
          "checkpoint-schedule": "Checkpoint schedule",
          "srs-queue": "Spaced repetition queue",
        };
        setPageMeta(titles[route.slug]);
        toolbar.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a> · ${escapeHtml(titles[route.slug])}</nav>`;
        article.innerHTML = md ? renderLessonHtml(md, { stripFirstHeading: true }) : `<p class="md-root">Missing document.</p>`;
        break;
      }
      default:
        resetMetaToDefault();
        toolbar.innerHTML = "";
        article.innerHTML = renderHome();
    }

    loading.hidden = true;
    article.hidden = false;
    setNavCurrent(route);
    await runMermaidIn(article);
  } catch (e) {
    console.error(e);
    loading.hidden = true;
    article.hidden = false;
    article.innerHTML = `<p class="md-root">Something went wrong while rendering this page.</p>`;
  }
}

function init(): void {
  if (!location.hash) {
    location.hash = "#/";
  }
  window.addEventListener("hashchange", () => {
    void renderRoute();
  });
  void renderRoute();
}

init();
