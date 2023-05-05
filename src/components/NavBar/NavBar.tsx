import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes/routes.constant';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { logout } from '../../firebase/logIn';

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem component="li">
          <NavLink to={ROUTES.MAIN}>Main</NavLink>
        </ListItem>
        <ListItem component="li">
          <NavLink to={ROUTES.WELCOME}>About</NavLink>
        </ListItem>
        {!user ? (
          <ListItem component="li">
            <NavLink to={ROUTES.LOGIN}>Auth</NavLink>
          </ListItem>
        ) : (
          <Button variant="contained" onClick={logout}>
            log out
          </Button>
        )}
      </List>
    </nav>
  );
};

export default NavBar;
