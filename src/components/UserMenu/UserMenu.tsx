import React, { FC } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../../firebase/config';
import { ROUTES } from '../../router/routes/routes.constant';
import { logout } from '../../firebase/logIn';

const UserMenu: FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    handleCloseUserMenu();
    const serverErrMessage = await logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {user ? (
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleCloseUserMenu}>
              <NavLink to={ROUTES.LOGIN}>login</NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <NavLink to={ROUTES.REGISTRATION}>sigup</NavLink>
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default UserMenu;
