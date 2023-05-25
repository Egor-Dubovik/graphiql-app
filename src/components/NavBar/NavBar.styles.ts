import { NavLink } from 'react-router-dom';
import { createTheme, styled } from '@mui/material/styles';
import { Container, List, ListItem } from '@mui/material';

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
  [boxTheme.breakpoints.down(700)]: {
    width: '50px',
    height: '50px',
    padding: '0 auto',
  },
  [boxTheme.breakpoints.down(600)]: {
    width: '80px',
    justifyContent: 'start',
  },
});

export const CustomContainer = styled(Container)({
  display: 'flex',
  [boxTheme.breakpoints.down(700)]: {
    width: '50px',
    padding: 0,
  },
  [boxTheme.breakpoints.down(600)]: {
    width: '80px',
    justifyContent: 'start',
  },
});

export const CustomNavLink = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
  fontFamily: 'sans-serif',
});

export const CustomList = styled(List)({
  display: 'flex',
  width: '100%',
});

export const CustomListItem = styled(ListItem)({
  width: '33%',
  [boxTheme.breakpoints.down(700)]: {
    display: 'none',
  },
});

export const CustomListItemNext = styled(ListItem)({
  width: '33%',
});
