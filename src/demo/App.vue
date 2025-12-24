<script setup lang="ts">
import { ref } from "vue";
import { FlipNumber, FlipClock, FlipCountdown, FlipScore } from "../components";

const number = ref(123456);
const homeScore = ref(0);
const awayScore = ref(0);

const addNumber = () => {
  number.value += Math.floor(Math.random() * 1000);
};

const addHome = () => homeScore.value++;
const addAway = () => awayScore.value++;

const onCountdownFinish = () => {
  alert("倒计时结束!");
};
</script>

<template>
  <div class="demo">
    <h1>Vue Flip Card Demo</h1>

    <!-- FlipNumber -->
    <section class="demo-section">
      <h2>FlipNumber - 数字翻牌器</h2>
      <div class="demo-row">
        <div class="demo-item">
          <p>基础用法</p>
          <FlipNumber :value="number" />
          <button @click="addNumber">随机增加</button>
        </div>
        <div class="demo-item">
          <p>带前后缀</p>
          <FlipNumber :value="99.5" prefix="¥" suffix="元" :decimals="2" />
        </div>
        <div class="demo-item">
          <p>浅色主题 + 小尺寸</p>
          <FlipNumber :value="888" theme="light" size="small" />
        </div>
        <div class="demo-item">
          <p>大尺寸</p>
          <FlipNumber :value="2024" size="large" :thousand-separator="false" />
        </div>
      </div>
    </section>

    <!-- FlipClock -->
    <section class="demo-section">
      <h2>FlipClock - 时钟翻牌器</h2>
      <div class="demo-row">
        <div class="demo-item">
          <p>24小时制</p>
          <FlipClock />
        </div>
        <div class="demo-item">
          <p>不显示秒</p>
          <FlipClock :show-seconds="false" size="large" />
        </div>
        <div class="demo-item">
          <p>浅色主题</p>
          <FlipClock theme="light" />
        </div>
      </div>
    </section>

    <!-- FlipCountdown -->
    <section class="demo-section">
      <h2>FlipCountdown - 倒计时翻牌器</h2>
      <div class="demo-row">
        <div class="demo-item">
          <p>60秒倒计时</p>
          <FlipCountdown
            :target="60"
            :show-days="false"
            :show-hours="false"
            @finish="onCountdownFinish"
          />
        </div>
        <div class="demo-item">
          <p>带标签</p>
          <FlipCountdown
            :target="3661"
            :show-days="false"
            :show-labels="true"
          />
        </div>
        <div class="demo-item">
          <p>大尺寸</p>
          <FlipCountdown :target="86400" size="large" :show-labels="true" />
        </div>
      </div>
    </section>

    <!-- FlipScore -->
    <section class="demo-section">
      <h2>FlipScore - 比分翻牌器</h2>
      <div class="demo-row">
        <div class="demo-item">
          <p>基础用法</p>
          <FlipScore :home-score="homeScore" :away-score="awayScore" />
          <div class="score-btns">
            <button @click="addHome">主队+1</button>
            <button @click="addAway">客队+1</button>
          </div>
        </div>
        <div class="demo-item">
          <p>带队名</p>
          <FlipScore
            :home-score="3"
            :away-score="2"
            home-name="中国"
            away-name="日本"
            size="xlarge"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  min-height: 100vh;
  padding: 40px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.demo {
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
  }

  h2 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.demo-section {
  margin-bottom: 50px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.demo-item {
  background: rgba(40, 40, 70, 0.5);
  border: 1px solid rgba(100, 100, 140, 0.3);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  button {
    padding: 8px 20px;
    background: linear-gradient(135deg, #7c5cff, #5c3cdf);
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 92, 255, 0.4);
    }
  }
}

.score-btns {
  display: flex;
  gap: 12px;
}
</style>
