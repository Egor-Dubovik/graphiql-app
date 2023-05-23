import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';

const QueryVariables = () => {
  return (
    <EditorGraphQL
      value={''}
      height={'120px'}
      lineNumbers={true}
      editable={true}
      foldGutter={true}
      syntaxHighlighting={true}
    />
  );
};

export default QueryVariables;
