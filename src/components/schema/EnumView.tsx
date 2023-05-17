import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';

const EnumView: FC = () => {
  const { dataArray } = useAppSelector(selectSchemaStack);
  const { type } = dataArray[dataArray.length - 1];

  return (
    <List>
      {type.enumValues?.map((value) => (
        <ListItem key={value.name} sx={{ p: '0 16px' }}>
          {value.name}
        </ListItem>
      ))}
    </List>
  );
};

export default EnumView;
