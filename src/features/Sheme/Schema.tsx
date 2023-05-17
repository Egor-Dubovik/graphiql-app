import React, { FC } from 'react';
import { Box, Drawer, IconButton, ThemeProvider } from '@mui/material';
import BaseSchemaList from '../../components/schema/BaseSchemaList';
import SchemaPath from '../../components/schema/SchemaPath';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { IRootType } from './types';
import ObjectView from '../../components/schema/ObjectView';
import InputObjectView from '../../components/schema/InputObjectView';
import UnionView from '../../components/schema/UnionView';
import EnumView from '../../components/schema/EnumView';
import ScalarView from '../../components/schema/ScalarView';
import { schemaDrawerTheme } from './Schema.style';
import {
  popFromPath,
  popObjFromStack,
  selectSchemaStack,
  selectSchemaIsOpen,
  setIsOpen,
} from './schemaSlice';

const Schema: FC = () => {
  const { path, dataArray } = useAppSelector(selectSchemaStack);
  const isOpen = useAppSelector(selectSchemaIsOpen);
  const dispatch = useAppDispatch();
  const currentObject = dataArray[dataArray.length - 1];
  console.log(currentObject);

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const handleBackClick = () => {
    dispatch(popFromPath());
    dispatch(popObjFromStack());
  };

  const getCurrentView = (object: IRootType) => {
    switch (object.kind) {
      case 'OBJECT':
        return <ObjectView />;
      case 'INPUT_OBJECT':
        return <InputObjectView />;
      case 'UNION':
        return <UnionView />;
      case 'ENUM':
        return <EnumView />;
      case 'SCALAR':
        return <ScalarView />;
      default:
        throw new Error('Unknown Type');
    }
  };

  return (
    <ThemeProvider theme={schemaDrawerTheme}>
      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <SchemaPath />
        <Box sx={{ p: ' 0 5px', marginBottom: 1 }}>
          <IconButton color="secondary" disabled={!path.length} onClick={handleBackClick}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Box>
        <Box>
          {/* ????????????? */}
          {/* <Typography variant="h4" sx={{ p: '0 10px' }}>
            {currentObject.name}
          </Typography> */}
          {!path.length ? <BaseSchemaList /> : <>{getCurrentView(currentObject)}</>}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Schema;
