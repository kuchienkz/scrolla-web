import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "READ ME",
      icon: "book",
      prefix: "legals/",
      link: "legals/",
      children: "structure",
    },
    {
      text: "Guides",
      icon: "book",
      prefix: "guides/",
      link: "guides/",
      children: "structure",
    },
    "changelogs"
  ],
});
