import React, { FC } from 'react';
import { List, ListItemText } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Shema/schemaSlice';

const ScalarView: FC = () => {
  const { dataArray } = useAppSelector(selectSchemaStack);
  const { type } = dataArray[dataArray.length - 1];

  return (
    <List style={{ maxWidth: '280px' }}>
      <ListItemText sx={{ p: '0 16px', wordWrap: 'break-word' }}>{type.description}</ListItemText>
    </List>
  );
};

export default ScalarView;
