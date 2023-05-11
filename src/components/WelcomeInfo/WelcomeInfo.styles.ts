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

export const CustomBox = styled('div')`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FitImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
