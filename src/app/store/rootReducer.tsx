import { combineReducers } from '@reduxjs/toolkit';
import { schemaApi } from '../../features/Sheme/schemaAPI';
import schemaSlice from '../../features/Sheme/schemaSlice';

const rootReducer = combineReducers({
  schema: schemaSlice,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

export default rootReducer;
