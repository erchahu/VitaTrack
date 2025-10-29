/**
 * Animation Assets
 *
 * Place animation files (Lottie JSON, etc.) here
 */

import { Platform } from 'react-native';

const prefix = Platform.OS === 'android' ? 'custom/' : '';

const native_animations = {
  mood_anger: `${prefix}mood_anger`,
  mood_depressed: `${prefix}mood_depressed`,
  mood_happy: `${prefix}mood_happy` ,
  mood_peace: `${prefix}mood_peace` ,
  mood_sad: `${prefix}mood_sad`,
};

export type AnimationType = keyof typeof native_animations;

export const animations = {
  ...native_animations,
} as const;
