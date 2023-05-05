import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LoginForm from '../modules/forms/LoginForm/LoginForm';
import RegistrationForm from '../modules/forms/RegistrationForm/RegistrationForm';
import ResetForm from '../modules/forms/ResetForm/ResetForm';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Root from './Root';
import ProtectedRoute from './routes/ProtectedRoute';
import { ROUTES } from './routes/routes.constant';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<ProtectedRoute redirectPath={ROUTES.REDIRECT} />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Route>
      <Route path={ROUTES.WELCOME} element={<WelcomePage />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />}>
        <Route path={ROUTES.REGISTRATION} element={<RegistrationForm />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        <Route path={ROUTES.RESET} element={<ResetForm />} />
      </Route>

      <Route path={ROUTES.BAD} element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
