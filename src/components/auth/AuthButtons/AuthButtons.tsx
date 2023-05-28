import React, { FC } from 'react';
import { Box } from '@mui/material';
import { signInWithGoogle } from '../../../firebase/signIn';
import { LoadingButton } from '@mui/lab';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/config';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import { useTranslation } from 'react-i18next';
import { sxAuthButton, sxAuthButtons } from './AuthButtons.style';

interface IAuthButtonsProps {
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthButtons: FC<IAuthButtonsProps> = ({ setError }) => {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleSignIn = async () => {
    const serverErrorMessage = await signInWithGoogle();
    setError(serverErrorMessage);
  };

  const signup = <>{t('title-signup')}</>;
  const signin = <>{t('title-signin')}</>;
  const login = <>{t('title-login')}</>;

  return (
    <Box sx={sxAuthButtons}>
      <LoadingButton loading={loading} sx={sxAuthButton} type="submit" variant="contained">
        {pathname === ROUTES.LOGIN ? login.props.children : signup.props.children}
      </LoadingButton>
      <LoadingButton
        sx={sxAuthButton}
        onClick={handleSignIn}
        type="button"
        loading={loading}
        variant="contained"
        color="secondary"
      >
        {pathname === ROUTES.LOGIN ? login.props.children : signin.props.children} {t('google')}
      </LoadingButton>
    </Box>
  );
};

export default AuthButtons;
