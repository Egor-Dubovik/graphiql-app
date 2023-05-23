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
          zIndex: 100,
          [typoTheme.breakpoints.down(600)]: {
            textAlign: 'right',
            paddingRight: '20px',
          },
        }}
      >
        GraphiQl
      </Typography>
    </>
  );
};

export default Logo;
