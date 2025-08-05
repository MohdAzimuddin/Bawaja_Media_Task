import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../features/todo/todoSlice';

function TodoList() {
  // Get tasks from Redux store using useSelector
  // 'todos' comes from the reducer key we defined in store.js
  const tasks = useSelector((state) => state.todos.tasks);
  
  // Get dispatch function to send actions to Redux
  const dispatch = useDispatch(); 

  // Handler for deleting a task
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Send the delete action with the task ID
  };

  // If there are no tasks, show a message
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <div className="text-4xl sm:text-5xl mb-4">📝</div>
        <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
          No tasks yet!
        </h3>
        <p className="text-sm sm:text-base text-gray-500">
          Add your first task above to get started with your productivity journey.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {tasks.map((task, index) => (
        <div 
          key={task.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 transition-all duration-200 hover:shadow-md hover:border-gray-300 group"
        >
          <div className="flex items-center justify-between gap-3">
            {/* Task number and text */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                {index + 1}
              </div>
              <span className="text-gray-800 text-sm sm:text-base leading-relaxed break-words flex-1">
                {task.text}
              </span>
            </div>
            
            {/* Delete button */}
            <button
              onClick={() => handleDelete(task.id)}
              className="flex-shrink-0 p-2 sm:p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group-hover:opacity-100 opacity-70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label={`Delete task: ${task.text}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;