<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import FlipCard from "./FlipCard.vue";
import type { FlipClockProps } from "../types";

interface Props extends FlipClockProps {}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  theme: "dark",
  duration: 400,
  showSeconds: true,
  use24Hour: true,
  separator: ":",
});

const containerClass = computed(() => [
  "flip-clock",
  "flip-container",
  `flip-size-${props.size}`,
  `flip-theme-${props.theme}`,
  props.customClass,
]);

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let timer: ReturnType<typeof setInterval> | null = null;

const updateTime = () => {
  const now = new Date();
  let h = now.getHours();

  if (!props.use24Hour) {
    h = h % 12 || 12;
  }

  hours.value = h.toString().padStart(2, "0");
  minutes.value = now.getMinutes().toString().padStart(2, "0");
  seconds.value = now.getSeconds().toString().padStart(2, "0");
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div :class="containerClass">
    <!-- 小时 -->
    <FlipCard :digit="hours[0]" :duration="duration" />
    <FlipCard :digit="hours[1]" :duration="duration" />

    <span class="flip-separator">{{ separator }}</span>

    <!-- 分钟 -->
    <FlipCard :digit="minutes[0]" :duration="duration" />
    <FlipCard :digit="minutes[1]" :duration="duration" />

    <template v-if="showSeconds">
      <span class="flip-separator">{{ separator }}</span>
      <!-- 秒 -->
      <FlipCard :digit="seconds[0]" :duration="duration" />
      <FlipCard :digit="seconds[1]" :duration="duration" />
    </template>
  </div>
</template>
