import React, { FC } from 'react';
import { Box } from '@mui/material';
import AuthForm from '../../modules/forms/AuthForm/AuthForm';
import useAuthPageStyles from './AuthPage.style';

const AuthPage: FC = () => {
  const classes = useAuthPageStyles();

  return (
    <main className="main">
      <Box className={classes.container}>
        <Box component="section" className={'auth'}>
          <AuthForm />
        </Box>
      </Box>
    </main>
  );
};

export default AuthPage;
