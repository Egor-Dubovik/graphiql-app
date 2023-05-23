import { createTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const headerTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const MotionHeader = motion(AppBar);
export const FinalHeader = styled(MotionHeader)({});

const MotionToolBar = motion(Toolbar);
export const FinalToolbar = styled(MotionToolBar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const MotionTypography = motion(Typography);
export const FinalTypography = styled(MotionTypography)({
  width: '130px',
  textAlign: 'right',
  zIndex: 100,
  [headerTheme.breakpoints.down(700)]: {
    textAlign: 'center',
  },
  [headerTheme.breakpoints.down(700)]: {
    width: '80px',
  },
  [headerTheme.breakpoints.down(470)]: {
    display: 'none',
  },
});

export const ThirdHeaderBox = styled(Box)({
  display: 'flex',
  [headerTheme.breakpoints.down(700)]: {
    width: '190px',
    justifyContent: 'space-around',
  },
  [headerTheme.breakpoints.down(600)]: {
    width: '210px',
    justifyContent: 'center',
  },
});
