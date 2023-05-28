import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData } from '../../features/Schema/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const BaseSchemaList: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const handleChangeField = useSchemaFieldHandler();
  const schema = schemaData.__schema;

  return (
    <List>
      {schema.queryType?.name && (
        <ListItemButton onClick={() => handleChangeField(schema.queryType?.name, schemaData)}>
          <ListItemText primary={`${schema.queryType?.name}(...)`} secondary={'object'} />
        </ListItemButton>
      )}
      {schema.mutationType?.name && (
        <ListItemButton onClick={() => handleChangeField(schema.mutationType?.name, schemaData)}>
          <ListItemText primary={`${schema.mutationType?.name}(...)`} secondary={'object'} />
        </ListItemButton>
      )}
      {schema.subscriptionType?.name && (
        <ListItemButton
          onClick={() => handleChangeField(schema.subscriptionType?.name, schemaData)}
        >
          <ListItemText primary={`${schema.subscriptionType?.name}(...)`} secondary={'object'} />
        </ListItemButton>
      )}
    </List>
  );
};

export default BaseSchemaList;
