import { createTheme, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const schemaDrawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '320px',
        },
      },
    },
  },
});

export const SchemaTitle = styled(Typography)({ padding: '0 16px', wordWrap: 'break-word' });
