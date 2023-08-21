import React from 'react';
import { Box } from '@mui/material';
import { sxContainer, sxSection } from './GraphqlTools.style';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';
import EditorTools from './EditorTools/EditorTools';

const GraphqlTools = (): JSX.Element => {
  return (
    <Box component="section" sx={sxSection}>
      <Box sx={sxContainer}>
        <GraphqlUrlInput />
        <EditorTools />
      </Box>
    </Box>
  );
};

export default GraphqlTools;
