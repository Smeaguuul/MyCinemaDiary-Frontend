const MovieResultSkeleton = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 m-4 text-white flex h-fit animate-pulse">
      <div className="bg-gray-700 w-70 h-96"></div>
      <div className="p-4 w-2/3">
        <div className="bg-gray-700 h-6 w-3/4 mb-2 rounded"></div>
        <div className="bg-gray-700 h-5 w-2/3 mb-2 rounded"></div>
        <div className="bg-gray-700 h-4 w-full mb-4 rounded"></div>
        <div className="flex justify-between items-center">
          <div className="bg-gray-700 h-4 w-1/4 rounded"></div>
          <div className="bg-blue-500 h-4 w-1/3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieResultSkeleton;
