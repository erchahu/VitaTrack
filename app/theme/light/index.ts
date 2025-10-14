import { ThemeColors } from '../../types/style';
import { BASE_COLORS } from '../constants/baseColors';
import { SEMANTIC_COLORS } from '../constants/semanticColors';

export const LIGHT_COLORS: ThemeColors = {
  // 主色调
  primary50: BASE_COLORS.TEAL_50,
  primary100: BASE_COLORS.TEAL_100,
  primary200: BASE_COLORS.TEAL_200,
  primary300: BASE_COLORS.TEAL_300,
  primary400: BASE_COLORS.TEAL_400,
  primary500: BASE_COLORS.TEAL_500,
  primary600: BASE_COLORS.TEAL_600,
  primary700: BASE_COLORS.TEAL_700,
  primary800: BASE_COLORS.TEAL_800,
  primary900: BASE_COLORS.TEAL_900,
  
  // 辅助色
  secondary50: BASE_COLORS.BLUE_50,
  secondary100: BASE_COLORS.BLUE_100,
  secondary200: BASE_COLORS.BLUE_200,
  secondary300: BASE_COLORS.BLUE_300,
  secondary400: BASE_COLORS.BLUE_400,
  secondary500: BASE_COLORS.BLUE_500,
  secondary600: BASE_COLORS.BLUE_600,
  secondary700: BASE_COLORS.BLUE_700,
  secondary800: BASE_COLORS.BLUE_800,
  secondary900: BASE_COLORS.BLUE_900,
  
  // 语义色
  success: SEMANTIC_COLORS.SUCCESS_MAIN,
  warning: SEMANTIC_COLORS.WARNING_MAIN,
  error: SEMANTIC_COLORS.ERROR_MAIN,
  info: SEMANTIC_COLORS.INFO_MAIN,
  
  // 中性色
  white: BASE_COLORS.WHITE,
  black: BASE_COLORS.BLACK,
  grey50: BASE_COLORS.GRAY_50,
  grey100: BASE_COLORS.GRAY_100,
  grey200: BASE_COLORS.GRAY_200,
  grey300: BASE_COLORS.GRAY_300,
  grey400: BASE_COLORS.GRAY_400,
  grey500: BASE_COLORS.GRAY_500,
  grey600: BASE_COLORS.GRAY_600,
  grey700: BASE_COLORS.GRAY_700,
  grey800: BASE_COLORS.GRAY_800,
  grey900: BASE_COLORS.GRAY_900,
  
  // 主题特定颜色
  background: BASE_COLORS.GRAY_50,
  surface: BASE_COLORS.WHITE,
  surfaceVariant: BASE_COLORS.GRAY_100,
  onBackground: BASE_COLORS.GRAY_900,
  onSurface: BASE_COLORS.GRAY_900,
  onSurfaceVariant: BASE_COLORS.GRAY_700,
  outline: BASE_COLORS.GRAY_300,
  outlineVariant: BASE_COLORS.GRAY_200,
  
  // 文字颜色
  textPrimary: BASE_COLORS.GRAY_900,
  textSecondary: BASE_COLORS.GRAY_700,
  textDisabled: BASE_COLORS.GRAY_500,
  
  // 背景颜色
  backgroundDefault: BASE_COLORS.GRAY_50,
  backgroundPaper: BASE_COLORS.WHITE,
  
  // 健康数据特定颜色
  healthExcellent: SEMANTIC_COLORS.HEALTH_EXCELLENT,
  healthGood: SEMANTIC_COLORS.HEALTH_GOOD,
  healthFair: SEMANTIC_COLORS.HEALTH_FAIR,
  healthPoor: SEMANTIC_COLORS.HEALTH_POOR,
  healthCritical: SEMANTIC_COLORS.HEALTH_CRITICAL,
};