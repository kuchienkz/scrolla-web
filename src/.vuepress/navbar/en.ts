import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Guides", icon: "book-open", link: "/guides/" },
  { text: "What's new", icon: "bolt", link: "/changelogs" },
  {
    text: "Legal",
    icon: "scale-balanced",
    prefix: "/legals/",
    children: [
      { text: "Privacy Policy", icon: "user-shield", link: "privacy_policy" },
      { text: "Terms & Conditions", icon: "file-contract", link: "terms_conditions" },
      { text: "Location Access", icon: "location-dot", link: "location_access" },
      { text: "Content Safety", icon: "shield-halved", link: "content-safety-tag" },
    ],
  },
]);
