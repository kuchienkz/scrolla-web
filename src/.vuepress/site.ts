import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { makeTheme } from "./theme.js";

// The site deploys to two hosts with different paths:
// GitHub Pages serves it under /scrolla-web/, Firebase Hosting at the root.
export interface SiteTarget {
  base: `/${string}/` | "/";
  hostname: string;
}

export const makeConfig = ({ base, hostname }: SiteTarget) =>
  defineUserConfig({
    base,

    locales: {
      "/": {
        lang: "en-US",
        title: "Scrolla Wallpaper",
        description:
          "Guides, news and legal pages for Scrolla Wallpaper, the live wallpaper app that scrolls your pictures instead of cropping them.",
      },
    },

    // VuePress does not prefix head links with base, so add it here.
    head: [
      // Matches the Beta banner at the top of the page.
      ["meta", { name: "theme-color", content: "#ffd60a" }],
      ["link", { rel: "icon", href: `${base}favicon.ico` }],
      ["link", { rel: "apple-touch-icon", href: `${base}logo.png` }],
    ],

    bundler: viteBundler({
      viteOptions: {
        // The search plugin's client imports CSS, so SSR must bundle it.
        ssr: { noExternal: ["@vuepress/search-helper"] },
      },
    }),

    theme: makeTheme(hostname, `${hostname}${base}`.replace(/\/$/, "")),
  });
