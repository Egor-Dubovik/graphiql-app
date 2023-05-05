import React, { FC } from 'react';
import { Box } from '@mui/material';
import { signInWithGoogle } from '../../../firebase/signIn';
import { LoadingButton } from '@mui/lab';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/config';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import { sxAuthButton, sxAuthButtons } from './AuthButtons.style';

interface IAuthButtonsProps {
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthButtons: FC<IAuthButtonsProps> = ({ setError }) => {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();

  const handleSignIn = async () => {
    const serverErrorMessage = await signInWithGoogle();
    setError(serverErrorMessage);
  };

  return (
    <Box sx={sxAuthButtons}>
      <LoadingButton loading={loading} sx={sxAuthButton} type="submit" variant="contained">
        {pathname === ROUTES.LOGIN ? 'Login' : 'Sigup'}
      </LoadingButton>
      <LoadingButton
        sx={sxAuthButton}
        onClick={handleSignIn}
        type="button"
        loading={loading}
        variant="contained"
        color="secondary"
      >
        {pathname === ROUTES.LOGIN ? 'Login' : 'Sigin'} with Google
      </LoadingButton>
    </Box>
  );
};

export default AuthButtons;
