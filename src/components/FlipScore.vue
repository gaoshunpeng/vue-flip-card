<script setup lang="ts">
import { computed, watch } from "vue";
import FlipCard from "./FlipCard.vue";
import type { FlipScoreProps } from "../types";

interface Props extends FlipScoreProps {}

const props = withDefaults(defineProps<Props>(), {
  homeScore: 0,
  awayScore: 0,
  homeName: "",
  awayName: "",
  size: "large",
  theme: "dark",
  duration: 400,
  separator: ":",
  digits: 2,
});

const emit = defineEmits<{
  (e: "change", value: { home: number; away: number }): void;
}>();

const containerClass = computed(() => [
  "flip-score",
  `flip-size-${props.size}`,
  `flip-theme-${props.theme}`,
  props.customClass,
]);

const formatScore = (score: number) => {
  return Math.max(0, score).toString().padStart(props.digits, "0").split("");
};

const homeDigits = computed(() => formatScore(props.homeScore));
const awayDigits = computed(() => formatScore(props.awayScore));

watch(
  () => [props.homeScore, props.awayScore],
  () => {
    emit("change", { home: props.homeScore, away: props.awayScore });
  }
);
</script>

<template>
  <div :class="containerClass">
    <!-- 主队 -->
    <div class="flip-score__team">
      <span v-if="homeName" class="flip-score__name">{{ homeName }}</span>
      <div class="flip-container">
        <FlipCard
          v-for="(d, i) in homeDigits"
          :key="'h' + i"
          :digit="d"
          :duration="duration"
        />
      </div>
    </div>

    <!-- 分隔符 -->
    <span class="flip-score__vs">{{ separator }}</span>

    <!-- 客队 -->
    <div class="flip-score__team">
      <span v-if="awayName" class="flip-score__name">{{ awayName }}</span>
      <div class="flip-container">
        <FlipCard
          v-for="(d, i) in awayDigits"
          :key="'a' + i"
          :digit="d"
          :duration="duration"
        />
      </div>
    </div>
  </div>
</template>
