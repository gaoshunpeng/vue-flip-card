import type { App, Plugin } from "vue";

export * from "./types";
export { default as FlipCard } from "./components/FlipCard.vue";
export { default as FlipNumber } from "./components/FlipNumber.vue";
export { default as FlipClock } from "./components/FlipClock.vue";
export { default as FlipCountdown } from "./components/FlipCountdown.vue";
export { default as FlipScore } from "./components/FlipScore.vue";

declare const install: Plugin;
export default install;
