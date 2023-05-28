import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Schema/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';

const InputObjectView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { type } = dataArray[dataArray.length - 1];

  return (
    <List>
      {type.inputFields?.map((inputField) => {
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
  );
};

export default InputObjectView;
