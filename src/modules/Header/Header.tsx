import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';

const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ p: 0 }}>
          <Logo />
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
