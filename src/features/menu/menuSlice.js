import { createSlice } from "@reduxjs/toolkit";
import logoGoRide from "../../assets/image/goride.png";
import logoFood from "../../assets/image/gofood.png";
import logoSend from "../../assets/image/gosend.png";
import logoCar from "../../assets/image/gocar.png";

const initialState = [
  {
    icon: null,
    title: "About Us",
    dropdown: [],
  },
  {
    icon: null,
    title: "Services",
    dropdown: [logoGoRide, logoFood, logoSend, logoCar],
  },
  {
    icon: null,
    title: "Driver",
    dropdown: [
      "Driver Landing Page",
      "GoRide Registration",
      "GoCar Registration",
      "Driver's Blog",
      "GoCaptain",
    ],
  },
  {
    icon: null,
    title: "Merchant",
    dropdown: [
      "Merchant Landing Page",
      "Merchant Registration",
      "Claim GoBiz Account",
      "Merchant's Blog",
    ],
  },
  {
    icon: null,
    title: "Blog",
    dropdown: [],
  },
  {
    icon: null,
    title: "Help Center",
    dropdown: [],
  },
];

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export const menuState = (state) => state.menu;

export const menuReducer = menuSlice.reducer;
