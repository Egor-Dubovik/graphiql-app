import React, { FC } from 'react';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';

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
          const object = getSchemaListObjectfromFields(inputField);
          return (
            <ListItemButton
              key={inputField.name}
              onClick={() => handleChangeField(object.typeName, schemaData)}
            >
              <ListItemText primary={object.name} secondary={object.typeName} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default InputObjectView;
