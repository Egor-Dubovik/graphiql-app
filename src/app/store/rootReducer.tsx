import { combineReducers } from '@reduxjs/toolkit';
import { schemaApi } from '../../features/Schema/schemaAPI';
import schemaSlice from '../../features/Schema/schemaSlice';
import { navBurgerReducer } from '../../features/NavBurger/navBurgerSlice';

const rootReducer = combineReducers({
  burger: navBurgerReducer,
  schema: schemaSlice,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

export default rootReducer;
