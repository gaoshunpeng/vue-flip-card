<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import FlipCard from "./FlipCard.vue";
import type { FlipCountdownProps } from "../types";

interface Props extends FlipCountdownProps {}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  theme: "dark",
  duration: 400,
  showDays: true,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  separator: ":",
  showLabels: false,
  labels: () => ({
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
  }),
});

const emit = defineEmits<{
  (e: "finish"): void;
  (
    e: "change",
    value: { days: number; hours: number; minutes: number; seconds: number }
  ): void;
}>();

const containerClass = computed(() => [
  "flip-countdown",
  "flip-container",
  `flip-size-${props.size}`,
  `flip-theme-${props.theme}`,
  props.customClass,
]);

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let timer: ReturnType<typeof setInterval> | null = null;
let remainingSeconds = ref(0);

const getTargetSeconds = () => {
  if (props.target instanceof Date) {
    return Math.max(
      0,
      Math.floor((props.target.getTime() - Date.now()) / 1000)
    );
  }
  // 如果是数字，判断是时间戳还是秒数
  if (props.target > 1e10) {
    // 时间戳(ms)
    return Math.max(0, Math.floor((props.target - Date.now()) / 1000));
  }
  // 秒数
  return Math.max(0, props.target);
};

const updateDisplay = () => {
  const total = remainingSeconds.value;
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  days.value = d.toString().padStart(2, "0");
  hours.value = h.toString().padStart(2, "0");
  minutes.value = m.toString().padStart(2, "0");
  seconds.value = s.toString().padStart(2, "0");

  emit("change", { days: d, hours: h, minutes: m, seconds: s });
};

const tick = () => {
  if (remainingSeconds.value <= 0) {
    if (timer) clearInterval(timer);
    emit("finish");
    return;
  }
  remainingSeconds.value--;
  updateDisplay();
};

const start = () => {
  remainingSeconds.value = getTargetSeconds();
  updateDisplay();
  if (timer) clearInterval(timer);
  timer = setInterval(tick, 1000);
};

watch(() => props.target, start);

onMounted(start);

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div :class="containerClass">
    <!-- 天 -->
    <div v-if="showDays" class="flip-group">
      <div class="flip-group__cards">
        <FlipCard :digit="days[0]" :duration="duration" />
        <FlipCard :digit="days[1]" :duration="duration" />
      </div>
      <span v-if="showLabels" class="flip-group__label">{{ labels.days }}</span>
    </div>

    <span v-if="showDays && showHours" class="flip-separator">{{
      separator
    }}</span>

    <!-- 时 -->
    <div v-if="showHours" class="flip-group">
      <div class="flip-group__cards">
        <FlipCard :digit="hours[0]" :duration="duration" />
        <FlipCard :digit="hours[1]" :duration="duration" />
      </div>
      <span v-if="showLabels" class="flip-group__label">{{
        labels.hours
      }}</span>
    </div>

    <span v-if="showHours && showMinutes" class="flip-separator">{{
      separator
    }}</span>

    <!-- 分 -->
    <div v-if="showMinutes" class="flip-group">
      <div class="flip-group__cards">
        <FlipCard :digit="minutes[0]" :duration="duration" />
        <FlipCard :digit="minutes[1]" :duration="duration" />
      </div>
      <span v-if="showLabels" class="flip-group__label">{{
        labels.minutes
      }}</span>
    </div>

    <span v-if="showMinutes && showSeconds" class="flip-separator">{{
      separator
    }}</span>

    <!-- 秒 -->
    <div v-if="showSeconds" class="flip-group">
      <div class="flip-group__cards">
        <FlipCard :digit="seconds[0]" :duration="duration" />
        <FlipCard :digit="seconds[1]" :duration="duration" />
      </div>
      <span v-if="showLabels" class="flip-group__label">{{
        labels.seconds
      }}</span>
    </div>
  </div>
</template>
