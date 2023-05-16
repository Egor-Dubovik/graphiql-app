import React, { FC } from 'react';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const InputObjectView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <div>
      <Typography variant="h4" sx={{ p: '0 10px' }}>
        {currentObject.name}
      </Typography>
      <List>
        {currentObject.inputFields?.map((inputField) => {
          return (
            <ListItemButton
              key={inputField.name}
              onClick={() => handleChangeField(inputField.type.name, schemaData)}
            >
              <ListItemText
                primary={`${inputField.name}(...)`}
                secondary={`type: ${inputField.type.name}`}
              />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default InputObjectView;
