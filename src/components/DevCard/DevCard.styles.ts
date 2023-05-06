import { createTheme } from '@mui/material/styles';

export const cardTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: '25vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
  },
});

export const cardMediaTheme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: '250px',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
});
