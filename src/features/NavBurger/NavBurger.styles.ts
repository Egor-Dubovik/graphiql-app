import { Box } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const boxTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const MotionContainer = motion(Box);

export const BurgerContainer = styled(MotionContainer)({
  display: 'none',
  [boxTheme.breakpoints.down(700)]: {
    display: 'flex',
    width: '30px',
    height: '50px',
    margin: 0,
  },
  [boxTheme.breakpoints.down(600)]: {
    width: '80px',
  },
});

const MotionDiv = motion(Box);

export const BurgerMenu = styled(MotionDiv)({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  right: -24,
  bottom: 0,
  width: '320px',
  height: '100vh',
  background: '#1976d2',
  zIndex: 20,
});

export const Shadowfield = styled(MotionDiv)({
  position: 'absolute',
  top: 0,
  right: -24,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  background: 'black',
  opacity: 0.5,
  [boxTheme.breakpoints.down(600)]: {
    right: -16,
  },
});
