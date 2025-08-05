// src/pages/Todo.jsx
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoInput from '../components/Todo/TodoInput';
import TodoList from '../components/Todo/TodoList';
import { selectTaskCount } from '../features/todo/todoSelectors';

function Todo() {
  // Get total task count using our selector
  const taskCount = useSelector(selectTaskCount);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        {/* Header with back button and title */}
        <div className="flex items-center mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="mr-3 sm:mr-4 p-2 sm:p-3 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors group"
            aria-label="Go back to home"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-hover:text-gray-700 transition-colors" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            My Tasks
          </h1>
        </div>

        {/* Task counter */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-sm sm:text-base text-blue-700 font-medium">
              {taskCount === 0 
                ? "No tasks yet" 
                : `${taskCount} ${taskCount === 1 ? 'task' : 'tasks'}`
              }
            </span>
          </div>
        </div>

        {/* Input component for adding new tasks */}
        <div className="mb-6 sm:mb-8">
          <TodoInput />
        </div>

        {/* List component that shows all tasks */}
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;