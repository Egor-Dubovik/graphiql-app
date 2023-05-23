import { Box, Container } from '@mui/material';
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

const MotionContainer = motion(Container);

export const BurgerContainer = styled(MotionContainer)({
  display: 'none',
  [boxTheme.breakpoints.down(700)]: {
    display: 'flex',
    width: '50px',
    height: '50px',
    margin: 0,
  },
  [boxTheme.breakpoints.down(600)]: {
    width: '80px',
  },
});

const MotionDiv = motion(Box);

export const BurgerMenu = styled(MotionDiv)({
  position: 'absolute',
  top: -15,
  right: -24,
  bottom: 0,
  width: '320px',
  height: '700px',
  background: '#1976d2',
  borderRadius: '10px',
  zIndex: 20,
  [boxTheme.breakpoints.down(600)]: {
    right: -16,
  },
});

export const Shadowfield = styled(MotionDiv)({
  position: 'absolute',
  top: -15,
  right: -24,
  bottom: 0,
  width: '100vw',
  height: '700px',
  background: 'black',
  opacity: 0.5,
  borderRadius: '10px',
  [boxTheme.breakpoints.down(600)]: {
    right: -16,
  },
});
