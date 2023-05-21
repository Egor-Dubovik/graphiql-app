import { Container } from '@mui/material';
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
    height: '50px',
  },
});

const MotionDiv = motion('div');

export const BurgerMenu = styled(MotionDiv)({
  position: 'absolute',
  top: -15,
  right: -200,
  bottom: 0,
  width: '300px',
  height: '500px',
  background: '#2196f3',
  borderRadius: '10px',
  zIndex: 20,
});
