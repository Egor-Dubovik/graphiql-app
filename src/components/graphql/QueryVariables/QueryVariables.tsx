import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { saveVariables } from '../../../features/Schema/schemaSlice';
import { useAppDispatch } from '../../../app/store/hooks';

const QueryVariables = () => {
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(saveVariables(value));
  };

  return (
    <EditorGraphQL
      value={''}
      height={'120px'}
      lineNumbers={true}
      editable={true}
      foldGutter={true}
      syntaxHighlighting={true}
      onChange={onChange}
    />
  );
};

export default QueryVariables;
