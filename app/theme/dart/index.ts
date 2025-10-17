import { ThemeColors } from '@types/style';
import { BASE_COLORS } from '@theme/constants/baseColors';
import { SEMANTIC_COLORS } from '@theme/constants/semanticColors';

export const DARK_COLORS: ThemeColors = {
  // 主色调
  primary50: BASE_COLORS.TEAL_900,
  primary100: BASE_COLORS.TEAL_800,
  primary200: BASE_COLORS.TEAL_700,
  primary300: BASE_COLORS.TEAL_600,
  primary400: BASE_COLORS.TEAL_500,
  primary500: BASE_COLORS.TEAL_400,
  primary600: BASE_COLORS.TEAL_300,
  primary700: BASE_COLORS.TEAL_200,
  primary800: BASE_COLORS.TEAL_100,
  primary900: BASE_COLORS.TEAL_50,
  
  // 辅助色
  secondary50: BASE_COLORS.BLUE_900,
  secondary100: BASE_COLORS.BLUE_800,
  secondary200: BASE_COLORS.BLUE_700,
  secondary300: BASE_COLORS.BLUE_600,
  secondary400: BASE_COLORS.BLUE_500,
  secondary500: BASE_COLORS.BLUE_400,
  secondary600: BASE_COLORS.BLUE_300,
  secondary700: BASE_COLORS.BLUE_200,
  secondary800: BASE_COLORS.BLUE_100,
  secondary900: BASE_COLORS.BLUE_50,
  
  // 语义色
  success: SEMANTIC_COLORS.SUCCESS_MAIN,
  warning: SEMANTIC_COLORS.WARNING_MAIN,
  error: SEMANTIC_COLORS.ERROR_MAIN,
  info: SEMANTIC_COLORS.INFO_MAIN,
  
  // 中性色
  white: BASE_COLORS.WHITE,
  black: BASE_COLORS.BLACK,
  grey50: BASE_COLORS.GRAY_900,
  grey100: BASE_COLORS.GRAY_800,
  grey200: BASE_COLORS.GRAY_700,
  grey300: BASE_COLORS.GRAY_600,
  grey400: BASE_COLORS.GRAY_500,
  grey500: BASE_COLORS.GRAY_400,
  grey600: BASE_COLORS.GRAY_300,
  grey700: BASE_COLORS.GRAY_200,
  grey800: BASE_COLORS.GRAY_100,
  grey900: BASE_COLORS.GRAY_50,
  
  // 主题特定颜色
  background: BASE_COLORS.GRAY_900,
  surface: BASE_COLORS.GRAY_800,
  surfaceVariant: BASE_COLORS.GRAY_700,
  onBackground: BASE_COLORS.WHITE,
  onSurface: BASE_COLORS.WHITE,
  onSurfaceVariant: BASE_COLORS.GRAY_300,
  outline: BASE_COLORS.GRAY_600,
  outlineVariant: BASE_COLORS.GRAY_700,
  
  // 文字颜色
  textPrimary: BASE_COLORS.WHITE,
  textSecondary: BASE_COLORS.GRAY_300,
  textDisabled: BASE_COLORS.GRAY_500,
  
  // 背景颜色
  backgroundDefault: BASE_COLORS.GRAY_900,
  backgroundPaper: BASE_COLORS.GRAY_800,
  
  // 健康数据特定颜色
  healthExcellent: SEMANTIC_COLORS.HEALTH_EXCELLENT,
  healthGood: SEMANTIC_COLORS.HEALTH_GOOD,
  healthFair: SEMANTIC_COLORS.HEALTH_FAIR,
  healthPoor: SEMANTIC_COLORS.HEALTH_POOR,
  healthCritical: SEMANTIC_COLORS.HEALTH_CRITICAL,
};