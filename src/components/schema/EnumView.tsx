import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';

const EnumView: FC = () => {
  const { dataArray } = useAppSelector(selectSchemaStack);
  const currentObject = dataArray[dataArray.length - 1];

  return (
    <ul>
      {currentObject.enumValues?.map((value) => (
        <li key={value.name}>{value.name}</li>
      ))}
    </ul>
  );
};

export default EnumView;
