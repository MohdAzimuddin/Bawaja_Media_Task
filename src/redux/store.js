import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; 

// Create the Redux store with reducers
export const store = configureStore({
  reducer: {
    todos: todoReducer, 
  },
  
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production',
});

