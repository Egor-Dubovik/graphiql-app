import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import {
  popFromPath,
  popObjFromStack,
  selectSchemaStack,
  setIsOpen,
} from '../../../features/Sheme/schemaSlice';
import { sxTools, sxTypography } from './SchemaTools.style';

const SchemaTools: FC = () => {
  const { path } = useAppSelector(selectSchemaStack);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const handleBackClick = () => {
    dispatch(popFromPath());
    dispatch(popObjFromStack());
  };

  return (
    <Box sx={sxTools}>
      <IconButton color="secondary" disabled={!path.length} onClick={handleBackClick}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Typography sx={sxTypography}>Schema</Typography>
      <IconButton color="error" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default SchemaTools;
