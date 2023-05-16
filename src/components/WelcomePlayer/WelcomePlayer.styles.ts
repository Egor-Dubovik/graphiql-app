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

export const PlayerBox = styled(Box)({
  overflow: 'hidden',
  borderRadius: '15px',
  width: '600px',
  height: '350px',
  [boxTheme.breakpoints.down(750)]: {
    width: '480px',
    height: '270px',
  },
  [boxTheme.breakpoints.down(480)]: {
    width: '350px',
    height: '200px',
  },
  [boxTheme.breakpoints.down(350)]: {
    width: '300px',
    height: '170px',
  },
});

export const OuterBox = styled(Box)({
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  [boxTheme.breakpoints.down(750)]: {
    height: '400px',
  },
  [boxTheme.breakpoints.down(480)]: {
    height: '320px',
  },
  [boxTheme.breakpoints.down(350)]: {
    height: '270px',
  },
});
