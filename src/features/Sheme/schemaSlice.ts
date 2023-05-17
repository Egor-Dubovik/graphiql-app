/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { isObject } from '../../utils/isObject';
import { IData, ISchema, ISchemaStackObject } from './types';

export interface ISchemaSlice {
  data: ISchema;
  stack: ISchemaStackObject;
  currentOject?: any;
  isOpen: boolean;
}

const initialState: ISchemaSlice = {
  data: {} as ISchema,
  stack: {
    path: [] as string[],
    dataArray: [{ type: {} }] as IData[],
  },
  isOpen: false,
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
    addObjToStack: (state, action: PayloadAction<IData>) => {
      if (isObject(action.payload)) {
        state.stack.dataArray.push(action.payload);
      }
    },
    popObjFromStack: (state) => {
      state.stack.dataArray.pop();
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setData, addToPath, popFromPath, addObjToStack, popObjFromStack, setIsOpen } =
  schemaSlice.actions;

export const selectSchemaData = (state: RootState) => state.schema.data;
export const selectSchemaStack = (state: RootState) => state.schema.stack;
export const selectSchemaIsOpen = (state: RootState) => state.schema.isOpen;
export default schemaSlice.reducer;
