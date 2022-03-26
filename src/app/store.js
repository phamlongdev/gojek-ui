import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, toogleReducer } from "../features/reducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    toogle: toogleReducer,
  },
});
