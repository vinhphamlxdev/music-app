import { createSlice } from "@reduxjs/toolkit";
import { themes } from "~/themes/ThemeData";
const { lonDonTheme } = themes;
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isSticky: false,
    theme: lonDonTheme,
    showModalTheme: false,
  },
  reducers: {
    setBgHeader: (state, action) => {
      state.isSticky = action.payload;
    },
    setThemeBg: (state, action) => {
      state.theme = action.payload;
      // localStorage.setItem("THEME_KEY", JSON.stringify(state.theme));
    },
    setShowModalTheme: (state, action) => {
      state.showModalTheme = action.payload;
    },
  },
});
export const { setBgHeader, setThemeBg, setShowModalTheme } =
  globalSlice.actions;
export default globalSlice.reducer;
