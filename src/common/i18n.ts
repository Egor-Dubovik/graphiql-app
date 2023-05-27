import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          'nav-main': 'Main',
          'nav-about': 'About',
          greetings: 'Welcome!',
          creation: 'Created by HolyCoders Team',
          'title-signup': 'Sign up',
          'title-login': 'Login',
          'title-reset': 'Reset',
        },
      },
      ru: {
        translation: {
          'nav-main': 'Главная',
          'nav-about': 'О нас',
          greetings: 'Привет!',
          creation: 'Создано командой HolyCoders',
          'title-signup': 'Регистрация',
          'title-login': 'Вход',
          'title-reset': 'Сброс',
        },
      },
    },
  });

export default i18n;
