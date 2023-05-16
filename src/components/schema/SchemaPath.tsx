import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../app/store/hooks';
import { selectSchemaStack } from '../../features/Sheme/schemaSlice';
import { Breadcrumbs } from '@mui/material';

const SchemaPath: FC = () => {
  const { path } = useAppSelector(selectSchemaStack);

  return (
    <Breadcrumbs separator="›" sx={{ p: '10px 16px' }}>
      {path.map((pathItem) => (
        <Typography key={pathItem}>{pathItem}</Typography>
      ))}
    </Breadcrumbs>
  );
};

export default SchemaPath;
