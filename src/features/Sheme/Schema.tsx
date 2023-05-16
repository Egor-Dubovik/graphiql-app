import React, { FC, useState } from 'react';
import { Box, Drawer, IconButton, ThemeProvider } from '@mui/material';
import BaseSchemaList from '../../components/schema/BaseSchemaList';
import SchemaPath from '../../components/schema/SchemaPath';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { popFromPath, popObjFromStack, selectSchemaStack } from './schemaSlice';
import { IRootType } from './types';
import ObjectView from '../../components/schema/ObjectView';
import InputObjectView from '../../components/schema/InputObjectView';
import UnionView from '../../components/schema/UnionView';
import EnumView from '../../components/schema/EnumView';
import ScalarView from '../../components/schema/ScalarView';
import { schemaDrawerTheme } from './Schema.style';

const Schema: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { path, dataArray } = useAppSelector(selectSchemaStack);
  const dispatch = useAppDispatch();
  const currentObject = dataArray[dataArray.length - 1];

  const handleOpen = async () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
    <>
      <button onClick={handleOpen}>Открыть редактор схемы GraphQL</button>
      <ThemeProvider theme={schemaDrawerTheme}>
        <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
          <SchemaPath />
          <Box sx={{ p: ' 0 5px', marginBottom: 1 }}>
            <IconButton color="secondary" disabled={!path.length} onClick={handleBackClick}>
              <KeyboardBackspaceIcon />
            </IconButton>
          </Box>

          {!path.length ? (
            <div className="start preview">
              <BaseSchemaList />
            </div>
          ) : (
            <>{getCurrentView(currentObject)}</>
          )}
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Schema;
