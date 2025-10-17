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
          '@components': './app/styles',
          '@screens': './app/screens',
          '@routes': './app/routes',
          '@theme': './app/theme',
          '@types': './app/types',
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
