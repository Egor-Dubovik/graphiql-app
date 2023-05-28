import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IBurger {
  burger: boolean;
}

const initialState: IBurger = {
  burger: false,
};

const navBurgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggleBurger(state, action: PayloadAction<boolean>) {
      state.burger = action.payload;
    },
  },
});

export const { toggleBurger } = navBurgerSlice.actions;
export const navBurgerReducer = navBurgerSlice.reducer;
