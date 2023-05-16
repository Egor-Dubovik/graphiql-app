import React, { FC, useEffect, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useAppDispatch } from '../../../app/store/hooks';
import { BASE_GRAPHQL_URL } from '../../../common/constant/api';
import { useGetSchemaMutation } from '../../../features/Sheme/schemaAPI';
import { setData } from '../../../features/Sheme/schemaSlice';
import InputField from '../../InputField/InputField';

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

  return (
    <InputField
      error={isError}
      value={url}
      sx={{ minWidth: { xs: '260px', sm: '480px' } }}
      onChange={(event) => setUrl(event.target.value)}
      fullWidth
      required
      label="schema url"
      autoFocus
      helperText={(error as FetchBaseQueryError)?.status as string}
    />
  );
};

export default GraphqlUrlInput;
