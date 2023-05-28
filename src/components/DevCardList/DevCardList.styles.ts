import { createTheme, styled } from '@mui/material/styles';

export const divTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const CustomDiv = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
