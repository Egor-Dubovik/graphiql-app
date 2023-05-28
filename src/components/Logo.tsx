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
          width: '120px',
          textAlign: 'center',
        }}
      >
        GraphiQl
      </Typography>
    </>
  );
};

export default Logo;
