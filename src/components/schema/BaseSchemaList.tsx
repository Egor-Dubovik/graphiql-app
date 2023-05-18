import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData } from '../../features/Schema/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const BaseSchemaList: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const handleChangeField = useSchemaFieldHandler();

  return (
    <List>
      {schemaData.queryType?.name && (
        <ListItemButton onClick={() => handleChangeField(schemaData.queryType?.name, schemaData)}>
          <ListItemText primary={`${schemaData.queryType?.name}(...)`} secondary={'object'} />
        </ListItemButton>
      )}
      {schemaData.mutationType?.name && (
        <ListItemButton
          onClick={() => handleChangeField(schemaData.mutationType?.name, schemaData)}
        >
          <ListItemText primary={`${schemaData.mutationType?.name}(...)`} secondary={'object'} />
        </ListItemButton>
      )}
      {schemaData.subscriptionType?.name && (
        <ListItemButton
          onClick={() => handleChangeField(schemaData.subscriptionType?.name, schemaData)}
        >
          <ListItemText
            primary={`${schemaData.subscriptionType?.name}(...)`}
            secondary={'object'}
          />
        </ListItemButton>
      )}
    </List>
  );
};

export default BaseSchemaList;
