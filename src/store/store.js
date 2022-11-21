import { configureStore } from "@reduxjs/toolkit";
import { fileSlice } from "./file";

export const store = configureStore({
  reducer: {
    files: fileSlice.reducer
  }
});