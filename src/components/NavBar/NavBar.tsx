import React from 'react';
import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem component="li">
          <NavLink to={ROUTES.MAIN}>Main</NavLink>
        </ListItem>
        <ListItem component="li">
          <NavLink to={ROUTES.WELCOME}>About</NavLink>
        </ListItem>
        <ListItem component="li">
          <UserMenu />
        </ListItem>
      </List>
    </nav>
  );
};

export default NavBar;
