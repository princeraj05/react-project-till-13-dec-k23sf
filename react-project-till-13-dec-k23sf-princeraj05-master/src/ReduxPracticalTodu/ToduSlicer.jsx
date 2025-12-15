// src/ReduxPracticalTodu/ToduSlicer.jsx
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [{ id: 1, text: "Item1" }]
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push({
        id: nanoid(),
        text: action.payload
      });
    },

    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
