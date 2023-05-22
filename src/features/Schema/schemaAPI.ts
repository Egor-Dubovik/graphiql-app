import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery } from 'graphql';
import { IError, ITypeError } from '../../common/interfaces/rtkQueyError';
import { ISchema } from './types';

export interface ISchemaData {
  __schema: ISchema;
}

export interface ISchemaResponse {
  data: ISchemaData;
}

const introspectionQuery = getIntrospectionQuery();
export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.mutation<ISchemaData, string>({
      query: (url: string) => ({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: introspectionQuery,
        }),
      }),
      transformResponse: (response: ISchemaResponse): ISchemaData => {
        console.log(response);
        return response.data;
      },
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
  }),
});

export const { useGetSchemaMutation } = schemaApi;
