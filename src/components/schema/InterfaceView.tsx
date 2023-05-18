import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { selectSchemaData, selectSchemaStack } from '../../features/Schema/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { useAppSelector } from '../../app/store/hooks';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';
import { getSchemaListObjectfromPossibleTypes } from '../../helpers/schema/getSchemaListObjectfromPossibleTypes';
import ArgsList from './ArgsList';
import { SchemaTitle } from '../../features/Schema/Schema.style';

const InterfaceView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { type, args } = dataArray[dataArray.length - 1];

  return (
    <>
      <div>
        <List>
          {type.fields?.map((field) => {
            const object = getSchemaListObjectfromFields(field);
            const { args } = field;
            return (
              <ListItemButton
                key={field.name}
                onClick={() => handleChangeField(object.typeName, schemaData, args)}
              >
                <ListItemText primary={object.name} secondary={`type: ${object.typeName}`} />
              </ListItemButton>
            );
          })}
        </List>
        {args && <ArgsList />}
      </div>
      <div>
        <SchemaTitle variant="h5">Implementations</SchemaTitle>
        <List>
          {type.possibleTypes?.map((type) => {
            const object = getSchemaListObjectfromPossibleTypes(type);
            return (
              <ListItemButton
                key={type.name}
                onClick={() => handleChangeField(type.name, schemaData)}
              >
                <ListItemText primary={object.name} secondary={`type: ${object.typeName}`} />
              </ListItemButton>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default InterfaceView;
