import { createTheme, styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
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
  [headerTheme.breakpoints.down(700)]: {
    width: '270px',
  },
  [headerTheme.breakpoints.down(415)]: {
    display: 'none',
  },
});
