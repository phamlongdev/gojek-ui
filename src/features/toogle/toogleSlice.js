import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const toogleSlice = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    statusToogle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { statusToogle } = toogleSlice.actions;

export const toogleState = (state) => state.toogle.value;

export const toogleReducer = toogleSlice.reducer;
