import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center max-w-md sm:max-w-lg lg:max-w-xl">
        {/* 404 Icon */}
        <div className="mb-6 sm:mb-8">
          <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">🤔</div>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800 mb-4 sm:mb-6">
          404
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
          Oops! The page you're looking for doesn't exist.
        </p>
        
        {/* Return Button */}
        <Link 
          to="/" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 font-medium text-base sm:text-lg"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Return to Home
        </Link>
      </div>
      
      {/* Footer */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-xs sm:text-sm text-gray-400">
          Lost? No worries, we'll get you back on track!
        </p>
      </div>
    </div>
  );
}