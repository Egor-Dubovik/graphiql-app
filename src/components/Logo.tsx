import React from 'react';
import { Typography, createTheme } from '@mui/material';

export const typoTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const Logo = (): JSX.Element => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          width: '170px',
          textAlign: 'center',
          [typoTheme.breakpoints.down(600)]: {
            width: '300px',
          },
        }}
      >
        GraphiQl
      </Typography>
    </>
  );
};

export default Logo;
