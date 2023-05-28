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
  width: '220px',
  textAlign: 'right',
  [headerTheme.breakpoints.down(800)]: {
    width: '160px',
  },
  [headerTheme.breakpoints.down(550)]: {
    display: 'none',
  },
});

export const ThirdHeaderBox = styled(Box)({
  display: 'flex',
  width: '290px',
  [headerTheme.breakpoints.down(700)]: {
    width: '210px',
    justifyContent: 'space-around',
  },
  [headerTheme.breakpoints.down(600)]: {
    marginRight: '-25px',
  },
});
