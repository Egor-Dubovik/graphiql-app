import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/store/hooks';
import { BASE_GRAPHQL_URL } from '../../../common/constant/api';
import { useGetSchemaMutation } from '../../../features/Schema/schemaAPI';
import { setData, setIsError } from '../../../features/Schema/schemaSlice';
import InputField from '../../InputField/InputField';
import { isObject } from '../../../utils/isObject';

const GraphqlUrlInput: FC = () => {
  const [url, setUrl] = useState(BASE_GRAPHQL_URL);
  const [debouncedurl, setDebouncedUrl] = useState(BASE_GRAPHQL_URL);
  const [getSchema, { data, error, isError }] = useGetSchemaMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUrl(url);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [url]);

  useEffect(() => {
    getSchema(debouncedurl);
  }, [debouncedurl, getSchema]);

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setIsError(isError));
  }, [isError, dispatch]);

  return (
    <InputField
      error={isError}
      value={url}
      sx={{ minWidth: { xs: '260px', sm: '480px' } }}
      onChange={(event) => setUrl(event.target.value)}
      fullWidth
      size="small"
      required
      label="schema url"
      autoFocus
      helperText={isObject(error) ? '' : (error as string)}
    />
  );
};

export default GraphqlUrlInput;
