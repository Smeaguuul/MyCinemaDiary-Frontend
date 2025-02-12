const MovieThumbnailSkeleton = () => {
  return (
<div className="w-48 rounded overflow-hidden shadow-lg bg-gray-800/30 backdrop-blur-md m-2 animate-pulse">
      <div className="w-full h-72 bg-gray-700" />
      <div className="px-4 py-2">
        <div className="h-6 bg-gray-700 rounded mb-1" />
        <div className="h-4 bg-gray-600 rounded w-3/4" />
        <div className="h-4 bg-gray-600 rounded w-1/2" />
      </div>
    </div>
  );
};

export default MovieThumbnailSkeleton;
