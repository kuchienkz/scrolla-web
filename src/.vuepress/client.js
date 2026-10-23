// JavaScript, not TypeScript: tsconfig.json is a Git LFS pointer in the deploy
// checkout, and the TypeScript transform cannot read it.
import { defineClientConfig } from "vuepress/client";
import BetaBanner from "./components/BetaBanner.vue";

export default defineClientConfig({
  // Shown on every page, above the navbar. It has no close button on purpose.
  rootComponents: [BetaBanner],
});
