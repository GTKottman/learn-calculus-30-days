import type { Route } from "../models/types";

export function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const segments = raw.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { name: "home" };
  }

  const head = segments[0]!;

  if (head === "day" && segments[1]) {
    const n = parseInt(segments[1], 10);
    if (!Number.isNaN(n) && n >= 1 && n <= 30) {
      return { name: "day", day: n };
    }
  }

  if (head === "cheat-sheets") {
    if (segments[1]) {
      return { name: "cheatSheet", slug: segments[1] };
    }
    return { name: "cheatSheets" };
  }

  if (head === "mistake-bank") {
    return { name: "mistakeBank" };
  }

  if (head === "hub") {
    return { name: "hub" };
  }

  if (head === "docs" && segments[1] === "checkpoint-schedule") {
    return { name: "doc", slug: "checkpoint-schedule" };
  }

  if (head === "docs" && segments[1] === "srs-queue") {
    return { name: "doc", slug: "srs-queue" };
  }

  return { name: "home" };
}

export function routeToHash(route: Route): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "day":
      return `#/day/${route.day}`;
    case "cheatSheets":
      return "#/cheat-sheets";
    case "cheatSheet":
      return `#/cheat-sheets/${route.slug}`;
    case "mistakeBank":
      return "#/mistake-bank";
    case "hub":
      return "#/hub";
    case "doc":
      return `#/docs/${route.slug}`;
    default:
      return "#/";
  }
}

export function navigate(route: Route): void {
  window.location.hash = routeToHash(route);
}
