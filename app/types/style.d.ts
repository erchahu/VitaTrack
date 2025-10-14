import 'react-native-paper';
import 'styled-components';

export interface BaseColors {
  // 蓝色系
  BLUE_50: string;
  BLUE_100: string;
  BLUE_200: string;
  BLUE_300: string;
  BLUE_400: string;
  BLUE_500: string;
  BLUE_600: string;
  BLUE_700: string;
  BLUE_800: string;
  BLUE_900: string;
  
  // 蓝绿色系
  TEAL_50: string;
  TEAL_100: string;
  TEAL_200: string;
  TEAL_300: string;
  TEAL_400: string;
  TEAL_500: string;
  TEAL_600: string;
  TEAL_700: string;
  TEAL_800: string;
  TEAL_900: string;
  
  // 绿色系
  GREEN_50: string;
  GREEN_100: string;
  GREEN_200: string;
  GREEN_300: string;
  GREEN_400: string;
  GREEN_500: string;
  GREEN_600: string;
  GREEN_700: string;
  GREEN_800: string;
  GREEN_900: string;
  
  // 橙色系
  ORANGE_50: string;
  ORANGE_100: string;
  ORANGE_200: string;
  ORANGE_300: string;
  ORANGE_400: string;
  ORANGE_500: string;
  ORANGE_600: string;
  ORANGE_700: string;
  ORANGE_800: string;
  ORANGE_900: string;
  
  // 红色系
  RED_50: string;
  RED_100: string;
  RED_200: string;
  RED_300: string;
  RED_400: string;
  RED_500: string;
  RED_600: string;
  RED_700: string;
  RED_800: string;
  RED_900: string;
  
  // 黄色系
  YELLOW_50: string;
  YELLOW_100: string;
  YELLOW_200: string;
  YELLOW_300: string;
  YELLOW_400: string;
  YELLOW_500: string;
  YELLOW_600: string;
  YELLOW_700: string;
  YELLOW_800: string;
  YELLOW_900: string;
  
  // 中性灰色系
  GRAY_50: string;
  GRAY_100: string;
  GRAY_200: string;
  GRAY_300: string;
  GRAY_400: string;
  GRAY_500: string;
  GRAY_600: string;
  GRAY_700: string;
  GRAY_800: string;
  GRAY_900: string;
  
  // 纯色
  WHITE: string;
  BLACK: string;
  TRANSPARENT: string;
}

export interface SemanticColors {
  // 主品牌色
  PRIMARY_LIGHT: string;
  PRIMARY_MEDIUM: string;
  PRIMARY_MAIN: string;
  PRIMARY_DARK: string;
  PRIMARY_DARKER: string;
  
  // 辅助色
  SECONDARY_LIGHT: string;
  SECONDARY_MEDIUM: string;
  SECONDARY_MAIN: string;
  SECONDARY_DARK: string;
  SECONDARY_DARKER: string;
  
  // 状态色
  SUCCESS_LIGHT: string;
  SUCCESS_MAIN: string;
  SUCCESS_DARK: string;
  
  WARNING_LIGHT: string;
  WARNING_MAIN: string;
  WARNING_DARK: string;
  
  ERROR_LIGHT: string;
  ERROR_MAIN: string;
  ERROR_DARK: string;
  
  INFO_LIGHT: string;
  INFO_MAIN: string;
  INFO_DARK: string;
  
  // 健康状态色
  HEALTH_EXCELLENT: string;
  HEALTH_GOOD: string;
  HEALTH_FAIR: string;
  HEALTH_POOR: string;
  HEALTH_CRITICAL: string;
}

export interface ThemeColors {
  // 主色调
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  
  // 辅助色
  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
  
  // 语义色
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // 中性色
  white: string;
  black: string;
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
  
  // 主题特定颜色
  background: string;
  surface: string;
  surfaceVariant: string;
  onBackground: string;
  onSurface: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  
  // 文字颜色
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  
  // 背景颜色
  backgroundDefault: string;
  backgroundPaper: string;
  
  // 健康数据特定颜色
  healthExcellent: string;
  healthGood: string;
  healthFair: string;
  healthPoor: string;
  healthCritical: string;
}

// ========== 应用主题类型 ==========
export interface AppTheme {
  colors: ThemeColors;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    weights: {
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    };
  };
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

// ========== 第三方库类型扩展 ==========
declare module 'react-native-paper' {
  // export interface ThemeColors extends ThemeColors {}
  
  export interface Theme {
    colors: ThemeColors;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}