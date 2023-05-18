import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';

const EnumView: FC = () => {
  const { dataArray } = useAppSelector(selectSchemaStack);
  const { type } = dataArray[dataArray.length - 1];

  return (
    <List sx={{ fontFamily: 'sans-serif' }}>
      <ListItem sx={{ p: '0 16px 10px 16px' }}>{`ENUM: {`}</ListItem>
      {type.enumValues?.map((value) => (
        <ListItem key={value.name} sx={{ p: '0 0 10px 24px' }}>
          {value.name}
        </ListItem>
      ))}
      <ListItem sx={{ p: '0 16px' }}>{`}`}</ListItem>
    </List>
  );
};

export default EnumView;
