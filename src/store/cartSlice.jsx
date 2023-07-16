import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
      state.totalAmount += action.payload.price.value * 100 * (action.payload.numbersOfPieces + 1);
      state.totalCount++;
    },
    remove(state, action) {
      const item = state.data.find((item) => item.code === action.payload.code);
      if (item) {
        state.totalAmount -= item.price.value * 100 * (item.numbersOfPieces + 1);
        state.totalCount--;
      }
      state.data = state.data.filter((item) => item.code !== action.payload.code);
    },
    edit(state, action) {
      const { code, type } = action.payload;
      const item = state.data.find((item) => item.code === code);
      if (item) {
        if (type === 'inc') {
          state.totalAmount += item.price.value * 100;
          item.numbersOfPieces++;
        }
        if (type === 'dec') {
          state.totalAmount -= item.price.value * 100;
          item.numbersOfPieces--;
        }
      }
    },
  },
});

export const { add, remove, edit } = cartSlice.actions;
export default cartSlice.reducer;
