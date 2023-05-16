import { createTheme } from '@mui/material';

export const schemaDrawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          minWidth: '300px',
        },
      },
    },
  },
});
