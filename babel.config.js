module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './app',
          '@assets': './app/assets',
          '@images': './app/assets/images',
          '@components': './app/components',
          '@constants': './app/constants',
          '@styles': './app/styles',
          '@screens': './app/screens',
          '@routes': './app/routes',
          '@theme': './app/theme',
          '@types': './app/types',
          '@devtools': './app/devtools',
          '@stores': './app/stores',
          '@locales': './app/locales',
          '@utils': './app/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
