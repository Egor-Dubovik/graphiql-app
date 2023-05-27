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
          'title-signin': 'Sign in',
          'title-login': 'Login',
          'title-reset': 'Reset',
          google: 'with Google',
          'form-email': 'Email address',
          'form-password': 'Password',
          'form-name': 'Full name',
          'not-account': 'Don`t have an account?',
          account: 'Already have an account?',
          register: 'Register',
          now: 'now.',
          forgot: 'Forgot password',
          entry: 'Login',
        },
      },
      ru: {
        translation: {
          'nav-main': 'Главная',
          'nav-about': 'О нас',
          greetings: 'Привет!',
          creation: 'Создано командой HolyCoders',
          'title-signup': 'Регистрация',
          'title-signin': 'Вход',
          'title-login': 'Вход',
          'title-reset': 'Сброс',
          google: 'через Google',
          'form-email': 'Адрес эл.почты',
          'form-password': 'Пароль',
          'form-name': 'Имя полностью',
          'not-account': 'Нет аккаунта?',
          account: 'Уже есть аккаунт?',
          register: 'Зарегистрируйтесь.',
          now: '',
          forgot: 'Забыли пароль',
          entry: 'Войти.',
        },
      },
    },
  });

export default i18n;
