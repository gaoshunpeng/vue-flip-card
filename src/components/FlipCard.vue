<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  /** 显示的字符 */
  digit: string;
  /** 动画时长(ms) */
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 400,
});

// 当前数字（翻转前）
const current = ref(props.digit);
// 下一个数字（翻转后）
const next = ref(props.digit);
const flipping = ref(false);

watch(
  () => props.digit,
  async (newVal, oldVal) => {
    if (newVal === oldVal || flipping.value) return;

    // 设置新数字
    next.value = newVal;

    // 触发翻转动画
    flipping.value = true;

    // 动画结束后更新当前数字
    await new Promise((r) => setTimeout(r, props.duration * 1.5));
    current.value = newVal;
    flipping.value = false;
  }
);
</script>

<template>
  <div class="flip-card" :style="{ '--flip-duration': `${duration}ms` }">
    <!-- 静态上半：显示新数字（被翻转层盖住） -->
    <div class="flip-card__top">
      <span>{{ next }}</span>
    </div>
    <!-- 静态下半：显示当前数字 -->
    <div class="flip-card__bottom">
      <span>{{ current }}</span>
    </div>

    <!-- 翻转上半：显示旧数字，翻下去 -->
    <div class="flip-card__back" :class="{ 'flip-down': flipping }">
      <span>{{ current }}</span>
    </div>

    <!-- 翻转下半：显示新数字，翻上来 -->
    <div class="flip-card__front" :class="{ 'flip-up': flipping }">
      <span>{{ next }}</span>
    </div>
  </div>
</template>
