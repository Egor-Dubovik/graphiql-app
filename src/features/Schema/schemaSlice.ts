/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IntrospectionQuery } from 'graphql';
import { RootState } from '../../app/store/store';
import { isObject } from '../../utils/isObject';
import { IData, ISchemaStackObject } from './types';

export interface ISchemaSlice {
  data: IntrospectionQuery;
  stack: ISchemaStackObject;
  currentOject?: any;
  isOpen: boolean;
  isError: boolean;
}

const initialState: ISchemaSlice = {
  data: {} as IntrospectionQuery,
  stack: {
    path: [] as string[],
    dataArray: [{ type: {} }] as IData[],
  },
  isOpen: false,
  isError: false,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
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
    setPath: (state, action: PayloadAction<string[]>) => {
      state.stack.path = action.payload;
    },
    addObjToStack: (state, action: PayloadAction<IData>) => {
      if (isObject(action.payload)) {
        state.stack.dataArray.push(action.payload);
      }
    },
    popObjFromStack: (state) => {
      state.stack.dataArray.pop();
    },
    setStackDataArray: (state, action: PayloadAction<IData[]>) => {
      state.stack.dataArray = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  setIsError,
  setData,
  addToPath,
  popFromPath,
  setPath,
  addObjToStack,
  popObjFromStack,
  setStackDataArray,
  setIsOpen,
} = schemaSlice.actions;

export const selectSchemaError = (state: RootState) => state.schema.isError;
export const selectSchemaData = (state: RootState) => state.schema.data;
export const selectSchemaStack = (state: RootState) => state.schema.stack;
export const selectSchemaIsOpen = (state: RootState) => state.schema.isOpen;
export default schemaSlice.reducer;
