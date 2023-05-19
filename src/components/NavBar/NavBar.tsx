import React from 'react';
import { List, ListItem } from '@mui/material';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';
import { CustomNavLink } from './NavBar.styles';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem component="li">
          <CustomNavLink to={ROUTES.MAIN}>Main</CustomNavLink>
        </ListItem>
        <ListItem component="li">
          <CustomNavLink to={ROUTES.WELCOME}>About</CustomNavLink>
        </ListItem>
        <ListItem component="li">
          <UserMenu />
        </ListItem>
      </List>
    </nav>
  );
};

export default NavBar;
