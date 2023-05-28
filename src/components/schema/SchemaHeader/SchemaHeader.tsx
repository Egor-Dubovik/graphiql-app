import { Box } from '@mui/material';
import React from 'react';
import SchemaPath from '../SchemaPath/SchemaPath';
import SchemaTools from '../SchemaTools/SchemaTools';
import { sxSchemaHeader } from './SchemaHeader.style';

const SchemaHeader = (): JSX.Element => {
  return (
    <Box sx={sxSchemaHeader}>
      <SchemaTools />
      <SchemaPath />
    </Box>
  );
};

export default SchemaHeader;
