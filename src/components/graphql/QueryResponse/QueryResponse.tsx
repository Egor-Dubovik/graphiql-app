import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { useAppSelector } from '../../../app/store/hooks';
import { selectResponse } from '../../../features/Schema/schemaSlice';

const QueryResponse = () => {
  const userSchema = useAppSelector(selectResponse);

  return (
    <EditorGraphQL
      value={JSON.stringify(userSchema, null, ' ') || ''}
      height={'auto'}
      lineNumbers={false}
      editable={false}
      foldGutter={false}
      syntaxHighlighting={false}
    />
  );
};

export default QueryResponse;
