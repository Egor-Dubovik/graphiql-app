import { NavLink } from 'react-router-dom';
import { createTheme, styled } from '@mui/material/styles';
import { List } from '@mui/material';

export const boxTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const CustomNavLink = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
});

export const CustomList = styled(List)({
  display: 'flex',
  [boxTheme.breakpoints.down(700)]: {
    display: 'none',
  },
});
