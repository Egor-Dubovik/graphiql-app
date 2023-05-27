import React from 'react';
import EditorGraphQL from '../EditorGraphQL/EditorGraphQL';
import { useAppSelector } from '../../../app/store/hooks';
import { selectResponse, setUserSchema } from '../../../features/Schema/schemaSlice';
import { useAppDispatch } from '../../../app/store/hooks';

const QueryResponse = () => {
  const userSchema = useAppSelector(selectResponse);
  const response = JSON.stringify(userSchema, null, ' ');

  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(setUserSchema(value));
  };

  return (
    <EditorGraphQL
      value={response || ''}
      height={'auto'}
      lineNumbers={false}
      editable={false}
      foldGutter={false}
      syntaxHighlighting={false}
      onChange={onChange}
    />
  );
};

export default QueryResponse;
