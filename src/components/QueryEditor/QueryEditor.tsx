import React from 'react';
import { Box } from '@mui/material';
import './QueryEditorStyles.css';
import EditorGraphQL from '../../components/EditorGraphQL/EditorGraphQL';

const QueryEditor = () => {
  return (
    <Box textAlign="left" letterSpacing={2} sx={{ width: 1 }}>
      <EditorGraphQL
        height={'auto'}
        value={''}
        lineNumbers={true}
        editable={true}
        foldGutter={true}
        syntaxHighlighting={true}
      />
    </Box>
  );
};
export default QueryEditor;
