import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './files/en';
import zh from './files/zh';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 回退语言
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
