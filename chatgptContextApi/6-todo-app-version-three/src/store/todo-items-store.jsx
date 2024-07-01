// // src/store/todo-items-store.js
// import { createContext } from "react";

// export const TodoItemsContext = createContext({
//   todoItems: [],
//   addNewItem: () => {},
//   deleteItem: () => {},
// });

import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Action Types
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// Reducer function
const todoItemsReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { name: action.payload.name, dueDate: action.payload.dueDate }];
    case DELETE_ITEM:
      return state.filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
};

// Context creation
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// Context Provider component
export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, []);

  const addNewItem = (name, dueDate) => {
    dispatch({ type: ADD_ITEM, payload: { name, dueDate } });
  };

  const deleteItem = (name) => {
    dispatch({ type: DELETE_ITEM, payload: { name } });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

// PropTypes validation
TodoItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
