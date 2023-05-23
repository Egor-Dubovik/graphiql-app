import { combineReducers } from '@reduxjs/toolkit';
import { navBurgerReducer } from '../features/NavBurger/navBurgerSlice';

const rootReducer = combineReducers({
  burger: navBurgerReducer,
});

export default rootReducer;
