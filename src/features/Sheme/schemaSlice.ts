/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { IField, IRootType, KindType } from './types';

export interface ISchema {
  data: {
    directives: any[];
    mutationType: { name: string } | null;
    queryType: { name: string } | null;
    subscriptionType: any;
    types: IRootType[];
  };
}

const initialState = {} as ISchema;

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = schemaSlice.actions;
export const selectSchemaData = (state: RootState) => state.schema.data;
export default schemaSlice.reducer;
