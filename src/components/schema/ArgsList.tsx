import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { getSchemaListObjectfromFields } from '../../helpers/schema/getSchemaListObjectfromFields';
import { SxemaTitle } from '../../features/Sheme/Schema.style';

const ArgsList: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { args } = dataArray[dataArray.length - 1];

  return (
    <div>
      <SxemaTitle variant="h5">Arguments</SxemaTitle>
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
