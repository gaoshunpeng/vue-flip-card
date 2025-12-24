# vue-flip-card

[English](./README.md) | [中文](./README-zh.md)

A flexible Vue 3 flip card component library for clocks, countdowns, scores and number animations. Perfect for data dashboards and large screens.

[![npm version](https://img.shields.io/npm/v/@gaoshunpeng/vue-flip-card.svg)](https://www.npmjs.com/package/@gaoshunpeng/vue-flip-card)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- ✅ **Multiple Modes** - Clock, countdown, scoreboard, number display
- ✅ **Vue 3 Composition API** - Modern Vue 3 components with TypeScript support
- ✅ **CSS Variables** - Fully customizable styles via CSS variables
- ✅ **Size Presets** - Small, medium, large, xlarge built-in sizes
- ✅ **Theme Support** - Dark and light themes included
- ✅ **Large Screen Ready** - Optimized for data visualization dashboards
- ✅ **Smooth Animations** - Realistic flip card animations
- ✅ **Zero Dependencies** - No dependencies except Vue 3
- ✅ **TypeScript Support** - Complete type definitions

## 📦 Installation

```bash
npm install @gaoshunpeng/vue-flip-card
# or
yarn add @gaoshunpeng/vue-flip-card
# or
pnpm add @gaoshunpeng/vue-flip-card
```

## 🚀 Quick Start

### Global Registration

```typescript
import { createApp } from "vue";
import VueFlipCard from "@gaoshunpeng/vue-flip-card";
import "@gaoshunpeng/vue-flip-card/styles";

const app = createApp(App);
app.use(VueFlipCard);
```

### On-Demand Import

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

## 📖 Components

### FlipNumber - Number Display

Display numbers with flip animation, supports thousand separators.

```vue
<template>
  <!-- Basic usage -->
  <FlipNumber :value="123456" />

  <!-- With thousand separator -->
  <FlipNumber :value="1234567" :thousand-separator="true" />

  <!-- With prefix and suffix -->
  <FlipNumber :value="99.5" prefix="$" suffix="USD" :decimals="2" />

  <!-- Pad with zeros -->
  <FlipNumber :value="42" :min-integer-digits="4" />
</template>
```

| Prop              | Type    | Default | Description                             |
| ----------------- | ------- | ------- | --------------------------------------- |
| value             | number  | 0       | The number to display                   |
| thousandSeparator | boolean | true    | Show thousand separator                 |
| separatorSymbol   | string  | ','     | Thousand separator symbol               |
| decimals          | number  | 0       | Decimal places                          |
| prefix            | string  | ''      | Prefix text                             |
| suffix            | string  | ''      | Suffix text                             |
| minIntegerDigits  | number  | 1       | Minimum integer digits (pad with zeros) |

### FlipClock - Clock Display

Real-time clock with flip animation.

```vue
<template>
  <!-- 24-hour format -->
  <FlipClock />

  <!-- Without seconds -->
  <FlipClock :show-seconds="false" />

  <!-- 12-hour format -->
  <FlipClock :use24-hour="false" />
</template>
```

| Prop        | Type    | Default | Description        |
| ----------- | ------- | ------- | ------------------ |
| showSeconds | boolean | true    | Show seconds       |
| use24Hour   | boolean | true    | Use 24-hour format |
| separator   | string  | ':'     | Time separator     |

### FlipCountdown - Countdown Timer

Countdown timer with customizable display units.

```vue
<template>
  <!-- Countdown to a date -->
  <FlipCountdown :target="new Date('2025-01-01')" @finish="onFinish" />

  <!-- Countdown seconds -->
  <FlipCountdown :target="3600" />

  <!-- With labels -->
  <FlipCountdown :target="86400" :show-labels="true" />

  <!-- Custom display -->
  <FlipCountdown
    :target="3600"
    :show-days="false"
    :show-labels="true"
    :labels="{ hours: 'H', minutes: 'M', seconds: 'S' }"
  />
</template>
```

| Prop        | Type           | Default             | Description                                              |
| ----------- | -------------- | ------------------- | -------------------------------------------------------- |
| target      | number \| Date | -                   | Target timestamp (ms), Date object, or remaining seconds |
| showDays    | boolean        | true                | Show days                                                |
| showHours   | boolean        | true                | Show hours                                               |
| showMinutes | boolean        | true                | Show minutes                                             |
| showSeconds | boolean        | true                | Show seconds                                             |
| showLabels  | boolean        | false               | Show unit labels                                         |
| labels      | object         | { days: '天', ... } | Custom labels                                            |
| separator   | string         | ':'                 | Unit separator                                           |

| Event  | Parameters                        | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| finish | -                                 | Countdown finished           |
| change | { days, hours, minutes, seconds } | Value changed (every second) |

### FlipScore - Scoreboard

Score display for sports or games.

```vue
<template>
  <!-- Basic usage -->
  <FlipScore :home-score="3" :away-score="2" />

  <!-- With team names -->
  <FlipScore
    :home-score="3"
    :away-score="2"
    home-name="Home"
    away-name="Away"
  />
</template>
```

| Prop      | Type   | Default | Description      |
| --------- | ------ | ------- | ---------------- |
| homeScore | number | 0       | Home team score  |
| awayScore | number | 0       | Away team score  |
| homeName  | string | ''      | Home team name   |
| awayName  | string | ''      | Away team name   |
| separator | string | ':'     | Score separator  |
| digits    | number | 2       | Number of digits |

| Event  | Parameters     | Description   |
| ------ | -------------- | ------------- |
| change | { home, away } | Score changed |

## 🎨 Common Props

All components support these common props:

| Prop        | Type                                       | Default  | Description             |
| ----------- | ------------------------------------------ | -------- | ----------------------- |
| size        | 'small' \| 'medium' \| 'large' \| 'xlarge' | 'medium' | Size preset             |
| theme       | 'dark' \| 'light'                          | 'dark'   | Color theme             |
| duration    | number                                     | 400      | Animation duration (ms) |
| customClass | string                                     | -        | Custom CSS class        |

## 🎯 Custom Styles

Customize styles using CSS variables:

```css
:root {
  /* Size */
  --flip-card-width: 40px;
  --flip-card-height: 60px;
  --flip-card-gap: 4px;
  --flip-card-radius: 6px;
  --flip-font-size: 36px;

  /* Colors */
  --flip-bg-top: linear-gradient(180deg, #3a3a5a 0%, #2a2a4a 100%);
  --flip-bg-bottom: linear-gradient(180deg, #2a2a4a 0%, #3a3a5a 100%);
  --flip-text-color: #ffffff;
  --flip-separator-color: rgba(255, 255, 255, 0.4);
  --flip-border-color: rgba(0, 0, 0, 0.4);
  --flip-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  /* Animation */
  --flip-duration: 400ms;

  /* Labels */
  --flip-label-color: rgba(255, 255, 255, 0.6);
  --flip-label-size: 12px;
}
```

### Large Screen Adaptation

```css
/* Use vw units for large screens */
.data-screen .flip-container {
  --flip-card-width: 4vw;
  --flip-card-height: 6vw;
  --flip-font-size: 3.6vw;
  --flip-card-radius: 0.6vw;
}
```

## 📁 Project Structure

```
vue-flip-card/
├── src/
│   ├── index.ts              # Main entry
│   ├── index.d.ts            # TypeScript definitions
│   ├── types.ts              # Type definitions
│   ├── components/
│   │   ├── FlipCard.vue      # Core flip card
│   │   ├── FlipNumber.vue    # Number display
│   │   ├── FlipClock.vue     # Clock display
│   │   ├── FlipCountdown.vue # Countdown timer
│   │   ├── FlipScore.vue     # Scoreboard
│   │   └── index.ts          # Component exports
│   └── styles/
│       └── index.scss        # Styles with CSS variables
├── package.json
├── LICENSE
└── README.md
```

## 🌐 Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Requires CSS Variables and CSS Animations support

## 🎯 Use Cases

- 📊 Data visualization dashboards
- ⏰ Clock and timer displays
- 🏆 Sports scoreboards
- 📈 Real-time statistics
- 🎮 Game interfaces
- 🎉 Event countdowns

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License

## 🔗 Related Links

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
