import React, { FC } from 'react';
import { Box } from '@mui/material';
import AuthForm from '../../modules/forms/AuthForm/AuthForm';
import { BackgroundImage, sxAuthContainer } from './AuthPage.style';

const AuthPage: FC = () => {
  return (
    <main className="main">
      <Box sx={sxAuthContainer}>
        <Box component="section">
          <BackgroundImage src="/auth.svg" alt="auth background" />
          <AuthForm />
        </Box>
      </Box>
    </main>
  );
};

export default AuthPage;
