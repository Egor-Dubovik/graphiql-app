import React from 'react';
import QueryEditor from '../../../components/QueryEditor/QueryEditor';
import { Box } from '@mui/material';
import QueryResponse from '../../../components/QueryResponse/QueryResponse';

const Editors = () => {
  return (
    <Box
      borderRadius="5px"
      boxShadow={3}
      bgcolor="#87b9d8"
      width={1}
      sx={{ display: 'flex', flexDirection: 'row', gap: '5px', padding: '20px' }}
    >
      <QueryEditor />
      <QueryResponse />
    </Box>
  );
};

export default Editors;
