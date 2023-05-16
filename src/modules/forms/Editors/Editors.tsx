import React from 'react';
import QueryEditor from '../../../components/QueryEditor/QueryEditor';
import { Box } from '@mui/material';
import QueryResponse from '../../../components/QueryResponse/QueryResponse';
import EditorToolBar from '../../../modules/forms/EditorToolBar/EditorToolBar';

const Editors = () => {
  return (
    <Box
      borderRadius="5px"
      boxShadow={3}
      bgcolor="#87b9d8"
      width={1}
      sx={{ display: 'flex', flexDirection: 'row', gap: '5px', padding: '20px' }}
    >
      <Box
        width="100%"
        bgcolor="white"
        borderRadius="10px"
        sx={{ display: 'flex', flex: '3 1 0%', p: 2 }}
      >
        <QueryEditor />
        <EditorToolBar />
      </Box>
      <Box
        width="100%"
        bgcolor="white"
        borderRadius="10px"
        sx={{ display: 'flex', flex: '3 1 0%', p: 2 }}
      >
        <QueryResponse />
      </Box>
    </Box>
  );
};

export default Editors;
