import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';

const ScalarView: FC = () => {
  const { dataArray } = useAppSelector(selectSchemaStack);
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <div style={{ maxWidth: '400px' }}>
      <Typography variant="h4" sx={{ p: '0 10px' }}>
        {currentObject.name}
      </Typography>
      <Typography>{currentObject.description}</Typography>
    </div>
  );
};

export default ScalarView;
