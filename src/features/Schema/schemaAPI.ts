import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';
import { IError, ITypeError } from '../../common/interfaces/rtkQueyError';
import { BASE_GRAPHQL_URL } from '../../common/constant/api';
import { IReqData } from '../Schema/types';

export interface IResponseData {
  data: IntrospectionQuery;
}

type Test = Record<string, string>;

const introspectionQuery = getIntrospectionQuery();
export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.mutation<IntrospectionQuery, string>({
      query: (url: string) => ({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: introspectionQuery,
        }),
      }),
      transformResponse: (response: IResponseData): IntrospectionQuery => response.data,
      transformErrorResponse: (error) => {
        const err = error as IError | ITypeError;

        if ('data' in err && err.data) {
          return typeof err.data === 'string' ? err.data : err.data.message;
        }
        if ('status' in err && err.status) {
          return err.status.toString();
        }
        if ('message' in err && err.message) {
          return err.message;
        }
        return 'Unknown error occurred';
      },
    }),
    getUserSchema: builder.mutation<IntrospectionQuery, { data: IReqData; headers: Test }>({
      query: ({ data, headers }) => ({
        url: BASE_GRAPHQL_URL,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify(data),
      }),
      transformResponse: (response: IResponseData): IntrospectionQuery => response.data,
      transformErrorResponse: (error) => {
        const err = error as IError | ITypeError;

        return err;
      },
    }),
  }),
});

export const { useGetSchemaMutation, useGetUserSchemaMutation } = schemaApi;
