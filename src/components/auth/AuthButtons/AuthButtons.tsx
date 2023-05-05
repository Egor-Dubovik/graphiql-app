import React, { FC } from 'react';
import { Box } from '@mui/material';
import { signInWithGoogle } from '../../../firebase/signIn';
import useAuthButtonsStyles from './AuthButtons.style';
import { LoadingButton } from '@mui/lab';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/config';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';

const AuthButtons: FC = () => {
  const [user, loading] = useAuthState(auth);
  const classes = useAuthButtonsStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes['login-form_buttons']}>
      <LoadingButton
        loading={loading}
        className={classes['login-form_button']}
        type="submit"
        variant="contained"
      >
        {pathname === ROUTES.LOGIN ? 'Login' : 'Sigup'}
      </LoadingButton>
      <LoadingButton
        className={classes['login-form_button']}
        onClick={signInWithGoogle}
        type="button"
        loading={loading}
        variant="contained"
        color="secondary"
      >
        Login with Google
      </LoadingButton>
    </Box>
  );
};

export default AuthButtons;
