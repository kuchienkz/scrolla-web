import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/scrolla-web/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Scrolla Wallpaper",
      description:
        "Guides, news and legal pages for Scrolla Wallpaper, the live wallpaper app that scrolls your pictures instead of cropping them.",
    },
  },

  // demo/ and zh/ are leftovers from the theme starter template.
  pagePatterns: ["**/*.md", "!demo/**", "!zh/**", "!.vuepress", "!node_modules"],

  head: [
    // Matches the Beta banner at the top of the page.
    ["meta", { name: "theme-color", content: "#ffd60a" }],
    ["link", { rel: "apple-touch-icon", href: "/scrolla-web/logo.png" }],
  ],

  bundler: viteBundler({
    viteOptions: {
      // The search plugin's client imports CSS, so SSR must bundle it.
      ssr: { noExternal: ["@vuepress/search-helper"] },
    },
  }),

  theme,
});
