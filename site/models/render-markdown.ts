import MarkdownIt from "markdown-it";
import multimd from "markdown-it-multimd-table";
import texmath from "markdown-it-texmath";
import katex from "katex";
import type MarkdownItType from "markdown-it";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function createMarkdownRenderer(): MarkdownItType {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: false,
  });

  md.use(multimd);

  md.use(texmath, {
    engine: katex,
    delimiters: "brackets",
    katexOptions: { throwOnError: false, output: "html" },
  });

  const originalFence = md.renderer.rules.fence!;

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]!;
    const info = token.info ? token.info.trim() : "";
    if (info === "mermaid") {
      const body = token.content.replace(/\n$/, "");
      return `<div class="mermaid">${escapeHtml(body)}</div>\n`;
    }
    return originalFence(tokens, idx, options, env, slf);
  };

  return md;
}

const renderer = createMarkdownRenderer();

/** Remove leading H1 line (e.g. "# Day 1 — …") to avoid duplicating the shell title. */
export function stripFirstH1(markdown: string): string {
  return markdown.replace(/^#\s[^\n]+\n+/, "");
}

export function renderMarkdownToHtml(markdown: string): string {
  return renderer.render(markdown);
}
