/** 翻牌器尺寸预设 */
export type FlipSize = "small" | "medium" | "large" | "xlarge";

/** 翻牌器主题 */
export type FlipTheme = "dark" | "light";

/** 基础配置 */
export interface FlipBaseProps {
  /** 尺寸预设 */
  size?: FlipSize;
  /** 主题 */
  theme?: FlipTheme;
  /** 动画时长(ms) */
  duration?: number;
  /** 自定义类名 */
  customClass?: string;
}

/** 时钟组件配置 */
export interface FlipClockProps extends FlipBaseProps {
  /** 是否显示秒 */
  showSeconds?: boolean;
  /** 是否使用24小时制 */
  use24Hour?: boolean;
  /** 分隔符 */
  separator?: string;
}

/** 倒计时组件配置 */
export interface FlipCountdownProps extends FlipBaseProps {
  /** 目标时间戳(ms) 或 剩余秒数 */
  target: number | Date;
  /** 是否显示天数 */
  showDays?: boolean;
  /** 是否显示小时 */
  showHours?: boolean;
  /** 是否显示分钟 */
  showMinutes?: boolean;
  /** 是否显示秒 */
  showSeconds?: boolean;
  /** 分隔符 */
  separator?: string;
  /** 是否显示标签 */
  showLabels?: boolean;
  /** 自定义标签 */
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
}

/** 比分组件配置 */
export interface FlipScoreProps extends FlipBaseProps {
  /** 主队分数 */
  homeScore: number;
  /** 客队分数 */
  awayScore: number;
  /** 主队名称 */
  homeName?: string;
  /** 客队名称 */
  awayName?: string;
  /** 分隔符 */
  separator?: string;
  /** 最大位数 */
  digits?: number;
}

/** 数字组件配置 */
export interface FlipNumberProps extends FlipBaseProps {
  /** 数值 */
  value: number;
  /** 是否显示千分位 */
  thousandSeparator?: boolean;
  /** 千分位符号 */
  separatorSymbol?: string;
  /** 小数位数 */
  decimals?: number;
  /** 前缀 */
  prefix?: string;
  /** 后缀 */
  suffix?: string;
  /** 最小整数位数(不足补0) */
  minIntegerDigits?: number;
}

/** 倒计时事件 */
export interface CountdownEvents {
  /** 倒计时结束 */
  (e: "finish"): void;
  /** 每秒更新 */
  (
    e: "change",
    value: { days: number; hours: number; minutes: number; seconds: number }
  ): void;
}

/** 比分事件 */
export interface ScoreEvents {
  /** 分数变化 */
  (e: "change", value: { home: number; away: number }): void;
}
