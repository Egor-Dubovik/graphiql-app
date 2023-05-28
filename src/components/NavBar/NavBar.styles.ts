import { NavLink } from 'react-router-dom';
import { createTheme, styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material';

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
  width: '70%',
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

export const CustomBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
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
  justifyContent: 'space-around',
  width: '100%',
});

export const CustomListItem = styled(ListItem)({
  width: '32%',
  textAlign: 'center',
  paddingLeft: 7,
  paddingRight: 7,
  [boxTheme.breakpoints.down(700)]: {
    display: 'none',
  },
});

export const CustomListItemNext = styled(ListItem)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'left',
  width: '22%',
  paddingLeft: 7,
  paddingRight: 7,
});
