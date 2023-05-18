import { configureStore } from '@reduxjs/toolkit';
import { schemaApi } from '../../features/Shema/schemaAPI';
import rootReducer from './rootReducer';

const initialState = {} as RootState;

export const createReduxStore = (state = initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: state,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(schemaApi.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
