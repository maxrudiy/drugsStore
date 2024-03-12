import { createSlice } from "@reduxjs/toolkit";

const initialState = { mainNavbarSelected: 0 };

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    setMainNavbarSelected: (state, action) => {
      state.mainNavbarSelected = action.payload;
    },
  },
});

export const { setMainNavbarSelected } = otherSlice.actions;

export default otherSlice.reducer;
