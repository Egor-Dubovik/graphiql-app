import React from 'react';
import { Box, Grid } from '@mui/material';
import QueryResponse from '../../../components/QueryResponse/QueryResponse';
import EditorToolBar from '../../../components/EditorToolbar/EditorToolbar';
import QueryEditor from '../../../components/QueryEditor/QueryEditor';
import EditorTools from '../EditTools/EditTools';

const Editors = () => {
  return (
    <Grid
      borderRadius="5px"
      boxShadow={3}
      bgcolor="#87b9d8"
      width={1}
      height={1}
      sx={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '20px' }}
    >
      <Box
        width="55%"
        borderRadius="10px"
        bgcolor="#fff"
        sx={{ display: 'flex', flexDirection: 'column', p: 2, position: 'relative' }}
      >
        <Grid width="100%" sx={{ display: 'flex' }}>
          <QueryEditor />
          <EditorToolBar />
        </Grid>
        <EditorTools />
      </Box>
      <QueryResponse />
    </Grid>
  );
};

export default Editors;
