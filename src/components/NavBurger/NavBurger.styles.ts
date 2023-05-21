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
