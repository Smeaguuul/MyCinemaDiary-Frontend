const MovieShowcaseSkeleton = () => {
  return (
    <div className="p-4 w-full max-w-4xl animate-pulse">
      <h1 className="text-3xl font-bold mb-4 bg-gray-700 h-8 w-1/2 rounded"></h1>
      <div className="flex">
        <div className="w-1/3">
          <div className="aspect-[0.68] bg-gray-700">
            <div className="w-full h-full object-cover"></div>
          </div>
        </div>
        <div className="p-4 w-2/3">
          <h2 className="font-bold text-xl mb-2 bg-gray-700 h-6 w-3/4 rounded"></h2>
          <p className="text-gray-300 text-sm mb-4 bg-gray-700 h-4 w-full rounded"></p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs bg-gray-700 h-4 w-1/4 rounded"></span>
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded h-4 w-1/3"></span>
          </div>
          <div className="mt-4">
            <span className="text-gray-400 text-xs bg-gray-700 h-4 w-1/2 rounded"></span>
            <br />
            <span className="text-gray-400 text-xs bg-gray-700 h-4 w-1/2 rounded"></span>
            <br />
            <span className="text-gray-400 text-xs bg-gray-700 h-4 w-1/2 rounded"></span>
            <br />
            <span className="text-gray-400 text-xs bg-gray-700 h-4 w-1/2 rounded"></span>
          </div>
          <button className="mt-4 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <span className="bg-gray-700 h-4 w-1/2 rounded"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieShowcaseSkeleton;
