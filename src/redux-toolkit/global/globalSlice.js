import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lonDonTheme } from "~/themes/ThemeData";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isSticky: false,
    theme: darkTheme,
    showModalTheme: false,
  },
  reducers: {
    setBgHeader: (state, action) => {
      state.isSticky = action.payload;
    },
    setThemeBg: (state, action) => {
      state.theme = action.payload;
    },
    setShowModalTheme: (state, action) => {
      state.showModalTheme = action.payload;
    },
  },
});
export const { setBgHeader, setThemeBg, setShowModalTheme } =
  globalSlice.actions;
export default globalSlice.reducer;
