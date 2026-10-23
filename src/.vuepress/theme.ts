import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://kuchienkz.github.io",

  author: {
    name: "Kuchienkz",
    url: "https://kuchienkz.github.io/scrolla-web",
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
