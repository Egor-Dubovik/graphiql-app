import { Box } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';

export const welcomeTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const CustomSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '120px',
  maxWidth: 'xl',
  [welcomeTheme.breakpoints.down(900)]: {
    height: '100px',
  },
  [welcomeTheme.breakpoints.down(392)]: {
    height: '160px',
  },
});

export const ShadowBox = styled(Box)({});
