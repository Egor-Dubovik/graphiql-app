import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { useAppSelector } from '../../app/store/hooks';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';

const ObjectView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const currentObject = dataArray[dataArray.length - 1];

  console.log(schemaData);

  return (
    <List>
      {currentObject.fields?.map((field) => {
        const object = getSchemaListObjectfromFields(field);
        return (
          <ListItemButton
            key={field.name}
            onClick={() => handleChangeField(object.typeName, schemaData)}
          >
            <ListItemText primary={object.name} secondary={`type: ${object.typeName}`} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default ObjectView;
