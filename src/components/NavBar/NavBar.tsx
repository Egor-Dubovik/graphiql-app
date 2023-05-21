import React from 'react';
import { Container, ListItem, ThemeProvider } from '@mui/material';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';
import { CustomList, CustomNavLink, boxTheme } from './NavBar.styles';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ThemeProvider theme={boxTheme}>
        <Container>
          <CustomList>
            <ListItem component="li">
              <CustomNavLink to={ROUTES.MAIN}>Main</CustomNavLink>
            </ListItem>
            <ListItem component="li">
              <CustomNavLink to={ROUTES.WELCOME}>About</CustomNavLink>
            </ListItem>
            <ListItem component="li">
              <UserMenu />
            </ListItem>
          </CustomList>
        </Container>
      </ThemeProvider>
    </nav>
  );
};

export default NavBar;
