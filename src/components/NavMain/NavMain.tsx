import React from 'react';
import { TextField } from '@mui/material';
import 'codemirror/lib/codemirror.css';
import { InputBox } from './NavMain.styles';

const NavMain = () => {
  return (
    <InputBox>
      <TextField
        label=""
        id="outlined-siz"
        defaultValue="https://graphql-pokemon2.vercel.app"
        size="small"
        fullWidth
        disabled
        margin="none"
        color="info"
      />
    </InputBox>
  );
};

export default NavMain;
