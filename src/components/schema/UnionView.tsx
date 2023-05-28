import React, { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Schema/schemaSlice';
import { getSchemaListObjectfromPossibleTypes } from '../../helpers/schema/getSchemaListObjectfromPossibleTypes';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const UnionView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const { type } = dataArray[dataArray.length - 1];

  return (
    <List>
      {type.possibleTypes?.map((type) => {
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
