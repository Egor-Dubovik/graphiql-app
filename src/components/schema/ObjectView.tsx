import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { useAppSelector } from '../../app/store/hooks';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';
import { IArg } from '../../features/Sheme/types';
import ArgsList from './ArgsList';

const ObjectView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { type, args } = dataArray[dataArray.length - 1];

  return (
    <div>
      <List>
        {type.fields?.map((field) => {
          const object = getSchemaListObjectfromFields(field);
          const fieldArgs = field.args as IArg[];
          return (
            <ListItemButton
              key={field.name}
              onClick={() => handleChangeField(object.typeName, schemaData, fieldArgs)}
            >
              <ListItemText primary={object.name} secondary={`type: ${object.typeName}`} />
            </ListItemButton>
          );
        })}
      </List>
      {args && <ArgsList />}
    </div>
  );
};

export default ObjectView;
