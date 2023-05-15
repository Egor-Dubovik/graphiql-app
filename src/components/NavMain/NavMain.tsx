import React from 'react';
import { TextField } from '@mui/material';
import 'codemirror/lib/codemirror.css';

const NavMain = () => {
  return (
    <>
      <TextField
        id="filled-basic"
        label="https://graphql-pokemon2.vercel.app"
        disabled
        variant="filled"
        margin="normal"
        color="secondary"
      />
    </>
  );
};

export default NavMain;
