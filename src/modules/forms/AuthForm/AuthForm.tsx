import React, { FC } from 'react';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AuthTitleWithIcon from '../../../components/auth/AuthTitleWithIcon/AuthTitleWithIcon';

const AuthForm: FC = () => {
  return (
    <Paper sx={{ minWidth: { sm: '500px', xs: '280px' }, padding: '20px 15px' }}>
      <AuthTitleWithIcon />
      <Outlet />
    </Paper>
  );
};

export default AuthForm;
