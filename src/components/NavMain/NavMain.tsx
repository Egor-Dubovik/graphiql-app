import React from 'react';
import { Box, TextField } from '@mui/material';
import 'codemirror/lib/codemirror.css';

const NavMain = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        m: '10px',
        width: '49%',
      }}
    >
      <TextField
        fullWidth
        label="https://graphql-pokemon2.vercel.app"
        disabled
        variant="filled"
        margin="none"
        color="secondary"
        size="small"
      />
    </Box>
  );
};

export default NavMain;
