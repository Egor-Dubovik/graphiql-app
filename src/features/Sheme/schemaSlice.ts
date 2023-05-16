/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { ISchema } from './types';

export interface ISchemaData {
  data: ISchema;
}

const initialState = {} as ISchemaData;

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
