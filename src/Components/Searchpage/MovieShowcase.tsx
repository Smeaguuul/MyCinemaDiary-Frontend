import { Movie } from '../LogicClasses';

interface Props {
  movie: Movie | undefined;
  onAddMovie: (movie: Movie) => void;
}

const MovieShowcase = ({ movie, onAddMovie }: Props) => {
  if (movie == undefined) return <div></div>;
  return (
    <div className="p-4 w-fit">
      <h1 className="text-2xl font-bold mb-4">{movie.name}</h1>
      <div className="flex">
        <div className="w-1/3">
          <div className="aspect-[0.68]">
            <img
              className="w-full h-full object-cover"
              src={movie.imageUrl}
              alt={movie.name}
            />
          </div>
        </div>
        <div className="p-4 w-2/3">
          <h2 className="font-bold text-xl mb-2">{movie.extendedTitle}</h2>
          <p className="text-gray-300 text-sm mb-4">{movie.overview}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">{movie.year}</span>
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {movie.primaryType}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-400 text-xs">
              Director: {movie.director}
            </span>
            <br />
            <span className="text-gray-400 text-xs">
              Country: {movie.country}
            </span>
            <br />
            <span className="text-gray-400 text-xs">
              Language: {movie.primaryLanguage}
            </span>
            <br />
            <span className="text-gray-400 text-xs">
              Status: {movie.status}
            </span>
          </div>
          <button
            onClick={() => onAddMovie(movie)}
            className="mt-4 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieShowcase;
