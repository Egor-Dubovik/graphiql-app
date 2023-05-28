import React, { FC, useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import { useTranslation } from 'react-i18next';
import sxAuthTitleWithIcon from './AuthTitleWithIcon.style';

const AuthTitleWithIcon: FC = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');
  const { t } = useTranslation();

  const signup = <>{t('title-signup')}</>;
  const login = <>{t('title-login')}</>;
  const reset = <>{t('title-reset')}</>;

  useEffect(() => {
    switch (pathname) {
      case ROUTES.REGISTRATION:
        setTitle(signup.props.children);
        break;
      case ROUTES.LOGIN:
        setTitle(login.props.children);
        break;
      case ROUTES.RESET:
        setTitle(reset.props.children);
        break;
      default:
        document.title = 'Login';
        break;
    }
  }, [login.props.children, pathname, reset.props.children, signup.props.children]);

  return (
    <Box sx={sxAuthTitleWithIcon['auth__title-block']}>
      <Box sx={sxAuthTitleWithIcon['title-block_icon']}>
        <LockOutlinedIcon />
      </Box>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default AuthTitleWithIcon;
