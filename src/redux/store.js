// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Import your todo slice

// Create the Redux store with your reducers
export const store = configureStore({
  reducer: {
    todos: todoReducer, // Add your todo reducer here
    // You can add more reducers here as your app grows
  },
  
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production',
});

// Optional: Export types for TypeScript or better autocompletion
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;