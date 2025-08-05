import { useState } from 'react';
import GitHubCard from '../components/GitHub/GitHubCard';

function GitHub() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch GitHub user data
  const fetchUser = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    // Reset previous states
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username.trim()}`
      );

      // Check if response is successful
      if (!response.ok) {
        throw new Error(
          response.status === 404 
            ? 'User not found' 
            : 'Failed to fetch user data'
        );
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null); // Clear any previous user data
    } finally {
      setLoading(false);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    fetchUser();
  };

  // Handle Enter key in input field
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchUser();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
          GitHub User Search
        </h1>
        
        {/* Search input and button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-6 sm:mb-8">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="eg: MohdAzimuddin"
            className="flex-1 px-4 py-3 sm:py-2 border border-gray-300 rounded-lg text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors font-medium text-base sm:text-sm"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Error message display */}
        {error && (
          <div className="p-4 mb-6 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm sm:text-base">
            {error}
          </div>
        )}

        {/* Content area that changes based on state */}
        <div className="min-h-[200px] sm:min-h-[250px]">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="ml-3 text-gray-600">Loading...</p>
            </div>
          ) : userData ? (
            <GitHubCard user={userData} />
          ) : !error ? (
            <div className="text-center py-12">
              <div className="text-4xl sm:text-5xl mb-4">👤</div>
              <p className="text-gray-500 text-base sm:text-lg">
                Search a GitHub user to get started
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default GitHub;