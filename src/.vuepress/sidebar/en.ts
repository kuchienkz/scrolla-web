import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "Guides",
      icon: "book-open",
      prefix: "guides/",
      link: "guides/",
      collapsible: true,
      expanded: true,
      children: "structure",
    },
    "changelogs",
    {
      text: "Legal",
      icon: "scale-balanced",
      prefix: "legals/",
      collapsible: true,
      children: "structure",
    },
  ],
});
