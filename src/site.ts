// src/site.ts
export const SITE = {
    title: "Prosenjith’s Notes",
    tagline: "Software Engineering • Android • Programming • Physics",
    description:
      "Android & software engineering notes by Prosenjith Roy Shuvo — Kotlin, architecture, performance, and a bit of physics.",
  };
  
  // Short, pretty nav (your current slugs)
  export const NAV = [
    { label: "Build",   href: "/categories/build" },
    { label: "Think",   href: "/categories/think" },
    { label: "Explore", href: "/categories/explore" },
    { label: "Live",    href: "/categories/live" },
  ];
  
  // Category model: one place to map category -> tags
  export const CATEGORIES: Record<
    "build" | "think" | "explore" | "live",
    { label: string; tags: string[] }
  > = {
    build: {
      label: "Build",
      tags: ["android","kotlin","compose","jetpack","architecture","system-design","engineering","code"],
    },
    think: {
      label: "Think",
      tags: ["ai","ml","machine-learning","deep-learning","cv","nlp","llm","data"],
    },
    explore: {
      label: "Explore",
      tags: ["physics","science","cosmos","math","relativity","quantum"],
    },
    live: {
      label: "Live",
      tags: ["life","personal","productivity","reflection","notes"],
    },
  };
  
  // Helper: does a post belong to this category?
  export function postInCategory(postTags: string[] = [], catKey: keyof typeof CATEGORIES) {
    const set = new Set(CATEGORIES[catKey].tags.map(t => t.toLowerCase()));
    return postTags.some(t => set.has(String(t).toLowerCase()));
  }
  