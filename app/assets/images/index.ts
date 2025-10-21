import { Platform } from "react-native";

const prefix = Platform.OS === 'android' ? 'asset:/custom/' : '';

const native_images = {
  initial_famale: { uri: `${prefix}initial_famale.webp` },
  initial_male: { uri: `${prefix}initial_male.webp` },
  home_page: { uri: `${prefix}home_page.webp` },
};

export type ImageType = keyof typeof native_images;

export const images = {
  ...native_images,
} as const;
