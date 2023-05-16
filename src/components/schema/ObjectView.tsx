import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { useAppSelector } from '../../app/store/hooks';

const ObjectView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <>
      <Typography variant="h4" sx={{ p: '0 10px' }}>
        {currentObject.name}
      </Typography>
      <List>
        {currentObject.fields?.map((field) => {
          const name = field.type.kind === 'OBJECT' ? `${field.name}(...)` : field.name;
          return (
            <ListItemButton
              key={field.name}
              onClick={() => handleChangeField(field.type.name, schemaData)}
            >
              <ListItemText primary={name} secondary={`type: ${field.type.name}`} />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default ObjectView;
