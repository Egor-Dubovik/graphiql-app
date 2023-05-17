import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { introspectionQuery } from '../../common/constant/introspectionQuery';
import { ISchema } from './types';

interface ISchemaResponse {
  data: {
    __schema: ISchema;
  };
}

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.mutation<ISchema, string>({
      query: (url: string) => ({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: introspectionQuery,
        }),
      }),
      transformResponse: (response: ISchemaResponse): ISchema => response.data.__schema,
    }),
  }),
});

export const { useGetSchemaMutation } = schemaApi;
