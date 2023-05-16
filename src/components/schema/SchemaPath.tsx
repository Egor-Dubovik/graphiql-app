import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';

const SchemaPath: FC = () => {
  const { path } = useAppSelector(selectSchemaStack);

  return (
    <Typography sx={{ p: '10px 16px' }}>
      {path.reduce((acc, pathItem) => {
        return (acc += `${pathItem}/`);
      }, '')}
    </Typography>
  );
};

export default SchemaPath;
