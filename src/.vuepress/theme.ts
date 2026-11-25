import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

// hostname: origin for the sitemap and SEO tags. siteUrl: hostname plus base.
export const makeTheme = (hostname: string, siteUrl: string) => hopeTheme({
  hostname,

  author: {
    name: "Kuchienkz",
    url: siteUrl,
  },

  logo: "/logo.png",

  // Light, dark or follow the system. The button sits in the navbar.
  darkmode: "switch",

  docsDir: "src",
  editLink: false,
  contributors: false,

  navbar: enNavbar,
  sidebar: enSidebar,

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Search", "Outlook"],
  },
  hideSiteNameOnMobile: false,

  footer: "Made for Android · Scrolla Wallpaper",
  copyright: "© 2026 Kuchienkz",
  displayFooter: true,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    slimsearch: {
      indexContent: true,
    },
  },
});
