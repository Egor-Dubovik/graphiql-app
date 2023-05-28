import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { saveHeaders, selectHeaders } from '../../../features/Schema/schemaSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';

const QueryHeaders = () => {
  const dispatch = useAppDispatch();
  const headers = useAppSelector(selectHeaders);

  const onChange = (value: string) => {
    dispatch(saveHeaders(value));
  };
  return (
    <EditorGraphQL
      value={headers || ''}
      height={'120px'}
      lineNumbers={true}
      editable={true}
      foldGutter={true}
      syntaxHighlighting={true}
      onChange={onChange}
    />
  );
};

export default QueryHeaders;
