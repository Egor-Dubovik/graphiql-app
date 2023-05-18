import { createTheme, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const schemaDrawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          minWidth: '300px',
          maxWidth: '300px',
        },
      },
    },
  },
});

export const SxemaTitle = styled(Typography)({ padding: '0 16px', wordWrap: 'break-word' });
