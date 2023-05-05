import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { signInWithGoogle } from '../../../firebase/signIn';
import useAuthButtonsStyles from './AuthButtons.style';

const AuthButtons: FC = () => {
  const classes = useAuthButtonsStyles();

  return (
    <Box className={classes['login-form_buttons']}>
      <Button className={classes['login-form_button']} type="submit" variant="contained">
        Login
      </Button>
      <Button
        className={classes['login-form_button']}
        onClick={signInWithGoogle}
        type="button"
        variant="contained"
        color="secondary"
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default AuthButtons;
