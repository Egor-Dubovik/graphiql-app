import React, { FC, useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import sxAuthTitleWithIcon from './AuthTitleWithIcon.style';

const AuthTitleWithIcon: FC = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (pathname) {
      case ROUTES.REGISTRATION:
        setTitle('Sign up');
        break;
      case ROUTES.LOGIN:
        setTitle('Login');
        break;
      case ROUTES.RESET:
        setTitle('Reset');
        break;
      default:
        document.title = 'Login';
        break;
    }
  }, [pathname]);

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
