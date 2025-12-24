# vue-flip-card

[English](./README.md) | [中文](./README-zh.md)

一个灵活的 Vue 3 翻牌器组件库，支持时钟、倒计时、比分和数字动画显示。非常适合数据可视化大屏。

[![npm version](https://img.shields.io/npm/v/@gaoshunpeng/vue-flip-card.svg)](https://www.npmjs.com/package/@gaoshunpeng/vue-flip-card)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 特性

- ✅ **多种模式** - 时钟、倒计时、比分、数字显示
- ✅ **Vue 3 Composition API** - 现代 Vue 3 组件，完整 TypeScript 支持
- ✅ **CSS 变量** - 通过 CSS 变量完全自定义样式
- ✅ **尺寸预设** - 内置 small、medium、large、xlarge 四种尺寸
- ✅ **主题支持** - 内置深色和浅色主题
- ✅ **大屏适配** - 针对数据可视化大屏优化
- ✅ **流畅动画** - 逼真的翻牌动画效果
- ✅ **零依赖** - 除 Vue 3 外无任何依赖
- ✅ **TypeScript 支持** - 完整的类型定义

## 📦 安装

```bash
npm install @gaoshunpeng/vue-flip-card
# 或
yarn add @gaoshunpeng/vue-flip-card
# 或
pnpm add @gaoshunpeng/vue-flip-card
```

## 🚀 快速开始

### 全局注册

```typescript
import { createApp } from "vue";
import VueFlipCard from "@gaoshunpeng/vue-flip-card";
import "@gaoshunpeng/vue-flip-card/styles";

const app = createApp(App);
app.use(VueFlipCard);
```

### 按需引入

```vue
<script setup lang="ts">
import {
  FlipNumber,
  FlipClock,
  FlipCountdown,
  FlipScore,
} from "@gaoshunpeng/vue-flip-card";
import "@gaoshunpeng/vue-flip-card/styles";
</script>
```

## 📖 组件

### FlipNumber - 数字翻牌器

显示带翻牌动画的数字，支持千分位分隔符。

```vue
<template>
  <!-- 基础用法 -->
  <FlipNumber :value="123456" />

  <!-- 带千分位 -->
  <FlipNumber :value="1234567" :thousand-separator="true" />

  <!-- 带前后缀 -->
  <FlipNumber :value="99.5" prefix="¥" suffix="元" :decimals="2" />

  <!-- 补零 -->
  <FlipNumber :value="42" :min-integer-digits="4" />
</template>
```

| 属性              | 类型    | 默认值 | 说明                     |
| ----------------- | ------- | ------ | ------------------------ |
| value             | number  | 0      | 显示的数值               |
| thousandSeparator | boolean | true   | 是否显示千分位           |
| separatorSymbol   | string  | ','    | 千分位符号               |
| decimals          | number  | 0      | 小数位数                 |
| prefix            | string  | ''     | 前缀文本                 |
| suffix            | string  | ''     | 后缀文本                 |
| minIntegerDigits  | number  | 1      | 最小整数位数（不足补零） |

### FlipClock - 时钟翻牌器

实时时钟显示，带翻牌动画。

```vue
<template>
  <!-- 24小时制 -->
  <FlipClock />

  <!-- 不显示秒 -->
  <FlipClock :show-seconds="false" />

  <!-- 12小时制 -->
  <FlipClock :use24-hour="false" />
</template>
```

| 属性        | 类型    | 默认值 | 说明               |
| ----------- | ------- | ------ | ------------------ |
| showSeconds | boolean | true   | 是否显示秒         |
| use24Hour   | boolean | true   | 是否使用 24 小时制 |
| separator   | string  | ':'    | 时间分隔符         |

### FlipCountdown - 倒计时翻牌器

倒计时器，可自定义显示单位。

```vue
<template>
  <!-- 倒计时到指定日期 -->
  <FlipCountdown :target="new Date('2025-01-01')" @finish="onFinish" />

  <!-- 倒计时秒数 -->
  <FlipCountdown :target="3600" />

  <!-- 显示标签 -->
  <FlipCountdown :target="86400" :show-labels="true" />

  <!-- 自定义显示 -->
  <FlipCountdown
    :target="3600"
    :show-days="false"
    :show-labels="true"
    :labels="{ hours: '时', minutes: '分', seconds: '秒' }"
  />
</template>
```

| 属性        | 类型           | 默认值              | 说明                                |
| ----------- | -------------- | ------------------- | ----------------------------------- |
| target      | number \| Date | -                   | 目标时间戳(ms)、Date 对象或剩余秒数 |
| showDays    | boolean        | true                | 是否显示天                          |
| showHours   | boolean        | true                | 是否显示时                          |
| showMinutes | boolean        | true                | 是否显示分                          |
| showSeconds | boolean        | true                | 是否显示秒                          |
| showLabels  | boolean        | false               | 是否显示单位标签                    |
| labels      | object         | { days: '天', ... } | 自定义标签                          |
| separator   | string         | ':'                 | 单位分隔符                          |

| 事件   | 参数                              | 说明                 |
| ------ | --------------------------------- | -------------------- |
| finish | -                                 | 倒计时结束           |
| change | { days, hours, minutes, seconds } | 数值变化（每秒触发） |

### FlipScore - 比分翻牌器

体育比赛或游戏比分显示。

```vue
<template>
  <!-- 基础用法 -->
  <FlipScore :home-score="3" :away-score="2" />

  <!-- 带队名 -->
  <FlipScore
    :home-score="3"
    :away-score="2"
    home-name="中国"
    away-name="日本"
  />
</template>
```

| 属性      | 类型   | 默认值 | 说明       |
| --------- | ------ | ------ | ---------- |
| homeScore | number | 0      | 主队分数   |
| awayScore | number | 0      | 客队分数   |
| homeName  | string | ''     | 主队名称   |
| awayName  | string | ''     | 客队名称   |
| separator | string | ':'    | 比分分隔符 |
| digits    | number | 2      | 位数       |

| 事件   | 参数           | 说明     |
| ------ | -------------- | -------- |
| change | { home, away } | 比分变化 |

## 🎨 通用属性

所有组件都支持以下通用属性：

| 属性        | 类型                                       | 默认值   | 说明            |
| ----------- | ------------------------------------------ | -------- | --------------- |
| size        | 'small' \| 'medium' \| 'large' \| 'xlarge' | 'medium' | 尺寸预设        |
| theme       | 'dark' \| 'light'                          | 'dark'   | 颜色主题        |
| duration    | number                                     | 400      | 动画时长(ms)    |
| customClass | string                                     | -        | 自定义 CSS 类名 |

## 🎯 自定义样式

通过 CSS 变量自定义样式：

```css
:root {
  /* 尺寸 */
  --flip-card-width: 40px;
  --flip-card-height: 60px;
  --flip-card-gap: 4px;
  --flip-card-radius: 6px;
  --flip-font-size: 36px;

  /* 颜色 */
  --flip-bg-top: linear-gradient(180deg, #3a3a5a 0%, #2a2a4a 100%);
  --flip-bg-bottom: linear-gradient(180deg, #2a2a4a 0%, #3a3a5a 100%);
  --flip-text-color: #ffffff;
  --flip-separator-color: rgba(255, 255, 255, 0.4);
  --flip-border-color: rgba(0, 0, 0, 0.4);
  --flip-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  /* 动画 */
  --flip-duration: 400ms;

  /* 标签 */
  --flip-label-color: rgba(255, 255, 255, 0.6);
  --flip-label-size: 12px;
}
```

### 大屏适配示例

```css
/* 使用 vw 单位适配大屏 */
.data-screen .flip-container {
  --flip-card-width: 4vw;
  --flip-card-height: 6vw;
  --flip-font-size: 3.6vw;
  --flip-card-radius: 0.6vw;
}
```

## 📁 项目结构

```
vue-flip-card/
├── src/
│   ├── index.ts              # 主入口
│   ├── index.d.ts            # TypeScript 类型定义
│   ├── types.ts              # 类型定义
│   ├── components/
│   │   ├── FlipCard.vue      # 核心翻牌卡片
│   │   ├── FlipNumber.vue    # 数字显示
│   │   ├── FlipClock.vue     # 时钟显示
│   │   ├── FlipCountdown.vue # 倒计时
│   │   ├── FlipScore.vue     # 比分显示
│   │   └── index.ts          # 组件导出
│   └── styles/
│       └── index.scss        # 样式（含 CSS 变量）
├── package.json
├── LICENSE
└── README.md
```

## 🌐 浏览器兼容性

- Chrome/Edge（推荐）
- Firefox
- Safari
- 需要支持 CSS 变量和 CSS 动画

## 🎯 使用场景

- 📊 数据可视化大屏
- ⏰ 时钟和计时器显示
- 🏆 体育比分牌
- 📈 实时统计数据
- 🎮 游戏界面
- 🎉 活动倒计时

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
