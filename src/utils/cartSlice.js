import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // to set name of slice
  initialState: { items: [] }, // initial state of slice
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// explaination: suppose;
// const cartSlice = {
//   actions: { addItem, clearCart },
//   reducer: reducers,
// };
