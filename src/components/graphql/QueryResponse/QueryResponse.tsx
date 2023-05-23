import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';

const QueryResponse = () => {
  return (
    <EditorGraphQL
      value={'Here will be the response'}
      height={'auto'}
      lineNumbers={false}
      editable={false}
      foldGutter={false}
      syntaxHighlighting={false}
    />
  );
};

export default QueryResponse;
