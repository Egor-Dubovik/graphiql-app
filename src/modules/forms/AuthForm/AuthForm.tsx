import React, { FC } from 'react';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AuthTitleWithIcon from '../../../components/auth/AuthTitleWithIcon/AuthTitleWithIcon';
import useAuthFormStyles from './AuthForm.style';

const AuthForm: FC = () => {
  const classes = useAuthFormStyles();

  return (
    <Paper className={classes.auth__form}>
      <AuthTitleWithIcon />
      <Outlet />
    </Paper>
  );
};

export default AuthForm;
