import { createTheme, styled } from '@mui/material/styles';

export const footerTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '70px',
          backgroundColor: '#1976d2',
          display: 'flex',
          justifyContent: 'space-around',
        },
      },
    },
  },
});

export const GhImage = styled('img')`
  width: 50px;
  height: 50px;
`;
