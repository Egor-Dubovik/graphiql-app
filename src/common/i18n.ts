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
          exit: 'Logout',
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
          'project-one':
            'This is a final project of RS School React course and generally dedicated to editor of GraphQL requests. Using it, you can try and practice different GraphQL requests, get responses from API, explore API schema, set variables and headers.',
          'project-two':
            'Besides main functionality here are several other features, made with React: Material UI atyled components, Framer Motion animation, registration / authorisation and localization. Also, at the bottom of this page is a video with project presentation.',
          'react-course':
            'React course of RS School - is actually a final stage of the whole complex frontend education, prepared by school founders and teachers. All we gain from this education are modern and useful parts of latest approaches to React development and provides us an open way to IT career.',
          read: 'Read more',
          'egor-tooltip': 'E.Dubovik github',
          'olga-tooltip': 'O.Grishanova github',
          'artem-tooltip': 'A.Prygunov github',
          'school-tooltip': 'RSS web site',
          schema: 'schema',
          'schema-url': 'schema url',
          show: 'Show more',
        },
      },
      ru: {
        translation: {
          'nav-main': 'Главная',
          'nav-about': 'О нас',
          exit: 'Выйти',
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
          'project-one':
            'Это завершающий проект курса RS School React, посвященный редактору запросов GraphQL. Используя его, вы можете пробовать и практиковать различные запросы GraphQL, получать ответы от API, исследовать схему API, устанавливать variables и headers.',
          'project-two':
            'Кроме основного функционала, в нем есть еше несколько фич, реализованных с помощью React: стилизованные компоненты Material UI, анимация Framer Motion, регистрация / авторизация и локализация. Также внизу этой страницы есть видео с презентацией проекта.',
          'react-course':
            'React курс от RS School это фактически финальный этап всего обучения фронтенду от основателей и преподователей школы. Все полученное от этого обучения - последние и современные подходы к разработке на React, открывают нам путь к карьере в сфере айти-технологий.',
          read: 'Подробнее',
          'egor-tooltip': 'Гитхаб Е.Дубовика',
          'olga-tooltip': 'Гитхаб О.Гришановой',
          'artem-tooltip': 'Гитхаб А.Прыгунова',
          'school-tooltip': 'Сайт RSS',
          schema: 'схема',
          'schema-url': 'url схемы',
          show: 'Показать больше',
        },
      },
    },
  });

export default i18n;
