import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaData, selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { useSchemaFieldHandler } from '../../hooks/useFieldHandler';

const UnionView: FC = () => {
  const schemaData = useAppSelector(selectSchemaData);
  const { dataArray } = useAppSelector(selectSchemaStack);
  const handleChangeField = useSchemaFieldHandler();
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <div>
      <Typography variant="h4">{currentObject.name}</Typography>
      <List>
        {currentObject.possibleTypes?.map((types) => {
          const name =
            types.name === 'OBJECT' || types.name === 'INPUT_OBJECT'
              ? `${types.name}(...)`
              : types.name;
          return (
            <ListItemButton
              key={types.name}
              onClick={() => handleChangeField(types.name, schemaData)}
            >
              <ListItemText primary={name} secondary={''} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default UnionView;
