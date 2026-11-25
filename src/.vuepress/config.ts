import { makeConfig } from "./site.js";

// GitHub Pages build (default). Firebase Hosting uses config.firebase.ts.
export default makeConfig({
  base: "/scrolla-web/",
  hostname: "https://kuchienkz.github.io",
});
