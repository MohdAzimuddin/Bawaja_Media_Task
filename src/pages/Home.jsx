import { useNavigate } from 'react-router-dom';

function Home() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handleTodoClick = () => {
    navigate('/todo'); // Navigates to the To-Do page
  };

  const handleGitHubClick = () => {
    navigate('/github'); // Navigates to the GitHub page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome section */}
      <div className="text-center mb-8 sm:mb-12 max-w-md sm:max-w-lg lg:max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
          Welcome to My App
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Choose where you'd like to go:
        </p>
      </div>

      {/* Buttons container */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md lg:max-w-lg">
        {/* To-Do Button */}
        <button
          onClick={handleTodoClick}
          className="w-full px-6 py-4 sm:py-3 lg:py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 font-medium text-base sm:text-lg"
        >
          📝 To-Do App
        </button>

        {/* GitHub Button */}
        <button
          onClick={handleGitHubClick}
          className="w-full px-6 py-4 sm:py-3 lg:py-4 bg-gray-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 active:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-700 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 font-medium text-base sm:text-lg"
        >
          🔍 GitHub Search
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-xs sm:text-sm text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default Home;