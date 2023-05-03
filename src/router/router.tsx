import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Root from './Root';
import { ROUTES } from './routes/routes.constant';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.WELCOME} element={<WelcomePage />} />
      <Route path={ROUTES.REGISTRATION} element={<AuthPage />} />
      <Route path={ROUTES.LOGIN} element={<AuthPage />} />
    </Route>
  )
);

export default router;
