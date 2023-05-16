/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { isObject } from '../../utils/isObject';
import { IRootType, ISchema } from './types';

interface ISchemaStackObject {
  path: string[];
  dataArray: IRootType[];
}

export interface ISchemaData {
  data: ISchema;
  stack: ISchemaStackObject;
  currentOject?: any;
}

const initialState: ISchemaData = {
  data: {} as ISchema,
  stack: {
    path: [] as string[],
    dataArray: [] as IRootType[],
  },
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    addToPath: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.stack.path.push(name);
    },
    popFromPath: (state) => {
      state.stack.path.pop();
    },
    addObjToStack: (state, action: PayloadAction<any>) => {
      if (isObject(action.payload)) {
        state.stack.dataArray.push(action.payload);
      }
    },
    popObjFromStack: (state) => {
      state.stack.dataArray.pop();
    },
  },
});

export const { setData, addToPath, popFromPath, addObjToStack, popObjFromStack } =
  schemaSlice.actions;
export const selectSchemaData = (state: RootState) => state.schema.data;
export const selectSchemaStack = (state: RootState) => state.schema.stack;
export default schemaSlice.reducer;
