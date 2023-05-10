import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderBox } from './Loader.style';

const Loader = () => {
  return (
    <LoaderBox>
      <CircularProgress />
    </LoaderBox>
  );
};

export default Loader;
