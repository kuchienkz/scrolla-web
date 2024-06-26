import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/scrolla-web/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Scrolla Wallpaper",
      description: "A Blog for Scrolla Wallpaper guides",
    }
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
