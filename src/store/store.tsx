import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const initialState = {} as RootState;

export const createReduxStore = (state = initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
