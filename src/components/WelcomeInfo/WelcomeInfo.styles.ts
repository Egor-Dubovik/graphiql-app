import { Box } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';

export const boxTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const MainBox = styled(Box)({
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  [boxTheme.breakpoints.down('md')]: {
    height: '1100px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  [boxTheme.breakpoints.down(400)]: {
    height: '1400px',
  },
  [boxTheme.breakpoints.down(350)]: {
    height: '1500px',
  },
});

export const MiddleBox = styled(Box)({
  width: '100%',
  height: '40%',
  display: 'flex',
  justifyContent: 'space-around',
  [boxTheme.breakpoints.down('md')]: {
    width: '90%',
    height: '50%',
    flexDirection: 'column',
  },
});

export const TextBox = styled(Box)({
  width: '25vw',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  [boxTheme.breakpoints.down('md')]: {
    width: '100%',
    height: '30%',
  },
});

export const ImageBox = styled(Box)({
  width: '25vw',
  height: '100%',
  [boxTheme.breakpoints.down('md')]: {
    width: '100%',
    height: '30%',
  },
});

export const FitImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
