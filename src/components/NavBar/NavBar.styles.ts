import { NavLink } from 'react-router-dom';
import { createTheme, styled } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';

export const boxTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const CustomNav = styled('nav')({
  display: 'flex',
  width: '230px',
});

export const CustomNavLink = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
});

export const CustomList = styled(List)({
  display: 'flex',
  width: '100%',
  [boxTheme.breakpoints.down(700)]: {
    display: 'none',
  },
});

export const CustomListItem = styled(ListItem)({
  width: '33%',
});
