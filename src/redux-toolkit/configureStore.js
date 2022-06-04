import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modalSlice";
const store = configureStore({
  reducer: {
    modalTheme: themeReducer,
  },
});
export default store;
