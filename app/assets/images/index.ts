import { Platform } from "react-native";

const prefix = Platform.OS === 'android' ? 'asset:/custom/' : '';

const native_images = {
  initial_female: { uri: `${prefix}initial_female.webp` },
  initial_male: { uri: `${prefix}initial_male.webp` },
  home_page: { uri: `${prefix}home_page.webp` },
  tag_right: { uri: `${prefix}tag_right.webp` },
};

export type ImageType = keyof typeof native_images;

export const images = {
  ...native_images,
} as const;
