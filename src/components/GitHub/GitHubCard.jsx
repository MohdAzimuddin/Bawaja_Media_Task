import { useState } from 'react';

function GitHubCard({ user }) {
  // State for handling image loading errors
  const [imageError, setImageError] = useState(false);

  // Destructure the user props with fallback values
  const {
    avatar_url = '',
    name = '',
    login = '',
    bio = '',
    location = '',
    followers = 0,
    public_repos = 0
  } = user || {};

  // Display name falls back to username if name isn't available
  const displayName = name || login;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      {/* User avatar with error handling */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
        {imageError ? (
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs sm:text-sm mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
            No Image
          </div>
        ) : (
          <img
            src={avatar_url}
            alt={`${displayName}'s avatar`}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mb-3 sm:mb-0 sm:mr-4 flex-shrink-0"
            onError={() => setImageError(true)}
          />
        )}
        <div className="text-center sm:text-left flex-grow min-w-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 break-words">
            {displayName}
          </h2>
          {login && name && (
            <p className="text-gray-500 text-sm sm:text-base break-words">@{login}</p>
          )}
        </div>
      </div>

      {/* User details */}
      <div className="space-y-3 sm:space-y-4">
        {/* Bio - only shown if available */}
        {bio && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Bio</h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed break-words">
              {bio}
            </p>
          </div>
        )}

        {/* Location - only shown if available */}
        {location && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
            <p className="text-gray-800 text-sm sm:text-base break-words">{location}</p>
          </div>
        )}

        {/* Stats row */}
        <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 pt-2 sm:pt-3">
          <div className="text-center">
            <p className="text-gray-800 font-semibold text-lg sm:text-xl">
              {followers.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-semibold text-lg sm:text-xl">
              {public_repos.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Public Repos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubCard;