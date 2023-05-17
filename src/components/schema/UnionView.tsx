import React, { FC } from 'react';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { getSchemaListObjectfromPossibleTypes } from '../../helpers/schema/getSchemaListObjectfromPossibleTypes';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const UnionView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <List>
      {currentObject.possibleTypes?.map((type) => {
        const object = getSchemaListObjectfromPossibleTypes(type);
        return (
          <ListItemButton
            key={object.name}
            onClick={() => handleChangeField(type.name, schemaData)}
          >
            <ListItemText primary={object.name} secondary={object.typeName} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default UnionView;
