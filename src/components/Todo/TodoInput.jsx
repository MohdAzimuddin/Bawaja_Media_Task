import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/todo/todoSlice';

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation - don't allow empty tasks
    if (!inputValue.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    // Dispatch the addTask action with the input value
    // Redux Toolkit will handle creating the full task object in the reducer
    dispatch(addTask(inputValue));
    
    // Clear the input and any errors
    setInputValue('');
    setError('');
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-3 sm:py-2 border border-gray-300 rounded-lg text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium text-base sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ✚ Add Task
          </button>
        </div>
        
        {error && (
          <div className="flex items-center mt-2 text-sm text-red-600">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default TodoInput;