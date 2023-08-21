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
  gap: 15px;
  @media (max-width: 899px) {
    flex-direction: column;
    gap: 30px;
  }
`;
