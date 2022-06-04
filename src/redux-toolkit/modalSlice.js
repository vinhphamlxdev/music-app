import { createSlice } from "@reduxjs/toolkit";
const modalThemeSlice = createSlice({
  name: "modal",
  initialState: {
    openModal: false,
  },
  reducers: {
    openModalTheme: (state, action) => {
      state.openModal = action.payload;
    }, //type: name/setBgHeader
  },
});
export const { openModalTheme } = modalThemeSlice.actions;
export default modalThemeSlice.reducer;
