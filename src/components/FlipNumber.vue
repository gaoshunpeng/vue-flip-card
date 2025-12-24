<script setup lang="ts">
import { computed } from "vue";
import FlipCard from "./FlipCard.vue";
import type { FlipNumberProps } from "../types";

interface Props extends FlipNumberProps {}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  size: "medium",
  theme: "dark",
  duration: 400,
  thousandSeparator: true,
  separatorSymbol: ",",
  decimals: 0,
  prefix: "",
  suffix: "",
  minIntegerDigits: 1,
});

const containerClass = computed(() => [
  "flip-number",
  "flip-container",
  `flip-size-${props.size}`,
  `flip-theme-${props.theme}`,
  props.customClass,
]);

const digits = computed(() => {
  // 处理小数
  const fixed = props.value.toFixed(props.decimals);
  const [intPart, decPart] = fixed.split(".");

  // 补零
  let intStr = intPart.replace("-", "");
  if (intStr.length < props.minIntegerDigits) {
    intStr = intStr.padStart(props.minIntegerDigits, "0");
  }

  // 千分位
  if (props.thousandSeparator) {
    intStr = intStr.replace(/\B(?=(\d{3})+(?!\d))/g, props.separatorSymbol);
  }

  // 负号
  if (props.value < 0) {
    intStr = "-" + intStr;
  }

  // 组合
  const result = decPart ? `${intStr}.${decPart}` : intStr;
  return result.split("");
});
</script>

<template>
  <div :class="containerClass">
    <span v-if="prefix" class="flip-number__prefix">{{ prefix }}</span>
    <template v-for="(char, i) in digits" :key="i">
      <span
        v-if="char === separatorSymbol || char === '.' || char === '-'"
        class="flip-separator"
      >
        {{ char }}
      </span>
      <FlipCard v-else :digit="char" :duration="duration" />
    </template>
    <span v-if="suffix" class="flip-number__suffix">{{ suffix }}</span>
  </div>
</template>
