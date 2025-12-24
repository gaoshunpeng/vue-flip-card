import type { App, Plugin } from "vue";
import {
  FlipCard,
  FlipNumber,
  FlipClock,
  FlipCountdown,
  FlipScore,
} from "./components";
import "./styles/index.scss";

// 导出组件
export { FlipCard, FlipNumber, FlipClock, FlipCountdown, FlipScore };

// 导出类型
export * from "./types";

// 组件列表
const components = {
  FlipCard,
  FlipNumber,
  FlipClock,
  FlipCountdown,
  FlipScore,
};

// 插件安装
const install: Plugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default install;
