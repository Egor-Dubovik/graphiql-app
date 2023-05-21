import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';
import { CustomList, CustomListItem, CustomNav, CustomNavLink, boxTheme } from './NavBar.styles';

const NavBar = (): JSX.Element => {
  return (
    <CustomNav>
      <ThemeProvider theme={boxTheme}>
        <Container sx={{ display: 'flex' }}>
          <CustomList>
            <CustomListItem>
              <CustomNavLink to={ROUTES.MAIN}>Main</CustomNavLink>
            </CustomListItem>
            <CustomListItem>
              <CustomNavLink to={ROUTES.WELCOME}>About</CustomNavLink>
            </CustomListItem>
            <CustomListItem>
              <UserMenu />
            </CustomListItem>
          </CustomList>
        </Container>
      </ThemeProvider>
    </CustomNav>
  );
};

export default NavBar;
