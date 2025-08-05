import { createSlice } from '@reduxjs/toolkit';

// Helper function to generate a simple ID
const generateId = () => Math.random().toString(36).substring(2, 9);

// Initial state with 3 default tasks
const initialState = {
  tasks: [
    {
      id: generateId(),
      text: "Complete React project",
      createdAt: new Date().toISOString()
    },
    {
      id: generateId(),
      text: "Learn Redux Toolkit",
      createdAt: new Date().toISOString()
    },
    {
      id: generateId(),
      text: "Build portfolio website",
      createdAt: new Date().toISOString()
    }
  ]
};

// Create the todo slice
const todoSlice = createSlice({
  name: 'todo', // Slice name (used in action types)
  initialState, // Initial state
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const newTask = {
        id: generateId(),
        text: action.payload, // The task text comes from the action payload
        createdAt: new Date().toISOString()
      };
      state.tasks.push(newTask); // Immer (built into Redux Toolkit) lets us "mutate" state
    },
    
    // Delete a task by ID
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    }
  }
});

// Export the generated action creators
export const { addTask, deleteTask } = todoSlice.actions;

// Export the reducer to be included in the store
export default todoSlice.reducer;