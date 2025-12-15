// src/store1.jsx
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ReduxPracticalTodu/ToduSlicer";

export const store1 = configureStore({
  reducer: {
    todoReducer: todoReducer
  }
});
