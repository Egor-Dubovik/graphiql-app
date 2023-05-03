import React from 'react';
import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes/routes.constant';

const NavBar = () => {
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
          <NavLink to={ROUTES.LOGIN}>Auth</NavLink>
        </ListItem>
      </List>
    </nav>
  );
};

export default NavBar;
