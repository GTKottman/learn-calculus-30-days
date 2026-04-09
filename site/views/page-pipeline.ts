import { rewriteInternalMarkdownLinks } from "../models/link-rewrite";
import { renderMarkdownToHtml, stripFirstH1 } from "../models/render-markdown";

export function renderLessonHtml(markdown: string, options: { stripFirstHeading: boolean }): string {
  let md = rewriteInternalMarkdownLinks(markdown);
  if (options.stripFirstHeading) {
    md = stripFirstH1(md);
  }
  return renderMarkdownToHtml(md);
}
