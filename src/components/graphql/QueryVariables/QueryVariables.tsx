import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { saveVariables, selectVariables } from '../../../features/Schema/schemaSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';

const QueryVariables = () => {
  const variables = useAppSelector(selectVariables);

  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(saveVariables(value));
  };

  return (
    <EditorGraphQL
      value={variables || ''}
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
