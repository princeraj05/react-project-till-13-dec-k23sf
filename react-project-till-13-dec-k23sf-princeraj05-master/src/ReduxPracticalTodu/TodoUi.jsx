// src/ReduxPracticalTodu/TodoUi.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./ToduSlicer";

const TodoUi = () => {
  const [todoValue, setTodoValue] = useState("");

  const todoItems = useSelector(
    (state) => state.todoReducer.todoItems
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoValue.trim()) return;

    dispatch(addTodo(todoValue));
    setTodoValue("");
  };

  return (
    <div>
      <h2>Redux Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>
           {item.text}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUi;
