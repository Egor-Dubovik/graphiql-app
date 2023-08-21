import { createTheme } from '@mui/material/styles';

export const cardTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: '25vw',
          padding: '20px 0 5px',
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
          width: '60%',
          paddingBottom: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 1118px)': {
            paddingBottom: '90%',
            width: '70%',
          },
          '@media (max-width: 899px)': {
            width: '50%',
            paddingBottom: '60%',
          },
          '@media (max-width: 480px)': {
            width: '80%',
            paddingBottom: '90%',
          },
        },
      },
    },
  },
});
