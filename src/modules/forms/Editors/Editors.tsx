import React from 'react';
import { Box, Grid } from '@mui/material';
import QueryResponse from '../../../components/QueryResponse/QueryResponse';
import EditorToolBar from '../../../components/EditorToolbar/EditorToolbar';
import QueryEditor from '../../../components/QueryEditor/QueryEditor';
import EditorTools from '../EditTools/EditTools';
import { CustomBox } from './Editors.styles';

const Editors = () => {
  return (
    <CustomBox>
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
    </CustomBox>
  );
};

export default Editors;
