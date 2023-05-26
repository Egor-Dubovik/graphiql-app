import React from 'react';
import { Box } from '@mui/material';
import './QueryEditorStyles.css';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { setUserSchema } from '../../../features/Schema/schemaSlice';
import { useAppDispatch } from '../../../app/store/hooks';

const QueryEditor = () => {
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(setUserSchema(value));
  };

  return (
    <Box textAlign="left" letterSpacing={2} sx={{ width: 1 }}>
      <EditorGraphQL
        height={'auto'}
        value={''}
        lineNumbers={true}
        editable={true}
        foldGutter={true}
        syntaxHighlighting={true}
        onChange={onChange}
      />
    </Box>
  );
};
export default QueryEditor;
