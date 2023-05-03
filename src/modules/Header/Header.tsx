import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';

const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <NavBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
