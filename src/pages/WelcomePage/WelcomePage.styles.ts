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
  width: '100%',
  height: '100%',
  [welcomeTheme.breakpoints.down(370)]: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export const CustomH2 = styled('h2')({
  fontSize: '50px',
});

export const ShadowBox = styled(Box)({});
