import React, { FC } from 'react';
import { Drawer } from '@mui/material';
import BaseSchemaList from '../../components/schema/BaseSchemaList';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { IRootType } from './types';
import ObjectView from '../../components/schema/ObjectView';
import InputObjectView from '../../components/schema/InputObjectView';
import UnionView from '../../components/schema/UnionView';
import EnumView from '../../components/schema/EnumView';
import ScalarView from '../../components/schema/ScalarView';
import { schemaDrawerTheme, SchemaTitle } from './Schema.style';
import InterfaceView from '../../components/schema/InterfaceView';
import { selectSchemaStack, selectSchemaIsOpen, setIsOpen } from './schemaSlice';
import SchemaHeader from '../../components/schema/SchemaHeader/SchemaHeader';
import { ThemeProvider } from '@mui/material/styles';

const Schema: FC = () => {
  const { path, dataArray } = useAppSelector(selectSchemaStack);
  const isOpen = useAppSelector(selectSchemaIsOpen);
  const dispatch = useAppDispatch();
  const { type } = dataArray[dataArray.length - 1];

  const handleClose = () => {
    dispatch(setIsOpen(false));
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
      case 'INTERFACE':
        return <InterfaceView />;
      default:
        throw new Error('Unknown Type');
    }
  };

  return (
    <ThemeProvider theme={schemaDrawerTheme}>
      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <SchemaHeader />
        <SchemaTitle variant="h5">{type?.name ? type?.name : 'General types'}</SchemaTitle>
        {!path.length ? <BaseSchemaList /> : <>{getCurrentView(type)}</>}
      </Drawer>
    </ThemeProvider>
  );
};

export default Schema;
