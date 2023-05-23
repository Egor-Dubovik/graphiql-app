import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { selectSchemaData, selectSchemaStack } from '../../features/Schema/schemaSlice';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';
import { SchemaTitle } from '../../features/Schema/Schema.style';

const ArgsList: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { args } = dataArray[dataArray.length - 1];

  return (
    <div>
      <SchemaTitle variant="h5">Arguments</SchemaTitle>
      <List>
        {args?.map((arg) => {
          const object = getSchemaListObjectfromFields(arg);
          return (
            <ListItemButton
              key={arg.name}
              onClick={() => handleChangeField(object.typeName, schemaData)}
            >
              <ListItemText primary={object.name} secondary={`type: ${object.typeName}`} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default ArgsList;
