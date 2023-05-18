import { combineReducers } from '@reduxjs/toolkit';
import { schemaApi } from '../../features/Schema/schemaAPI';
import schemaSlice from '../../features/Schema/schemaSlice';

const rootReducer = combineReducers({
  schema: schemaSlice,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

export default rootReducer;
