import { combineReducers } from '@reduxjs/toolkit';
import { schemaApi } from '../../features/Shema/schemaAPI';
import schemaSlice from '../../features/Shema/schemaSlice';

const rootReducer = combineReducers({
  schema: schemaSlice,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

export default rootReducer;
