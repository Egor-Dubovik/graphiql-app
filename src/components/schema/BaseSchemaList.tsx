import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData } from '../../features/Sheme/schemaSlice';

const BaseSchemaList: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);

  return (
    <List>
      <ListItemButton
      // onClick={() => handlePropertyClick(fieldName)}
      >
        <ListItemText primary={schemaData.queryType?.name} secondary={``} />
      </ListItemButton>
      <ListItemButton
      // onClick={() => handlePropertyClick(fieldName)}
      >
        <ListItemText primary={schemaData.mutationType?.name} secondary={``} />
      </ListItemButton>
    </List>
  );
};

export default BaseSchemaList;
