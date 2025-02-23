import { Movie } from '../LogicClasses';

interface Props {
  movie: Movie;
  onClick: () => void;
}

const MovieResult = ({ movie, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[80%] min-h-[235.3px] rounded overflow-hidden shadow-lg bg-gray-800 m-4 text-white flex"
    >
      <img
        className="w-[40%] h-full object-cover"
        src={movie.thumbnail}
        alt={movie.name}
      />
      <div className="p-4 w-[60%]">
        {' '}
        <h2 className="font-bold text-xl mb-2">{movie.name}</h2>
        <h3 className="text-white text-base mb-2">{movie.extendedTitle}</h3>
        <p className="text-white text-sm mb-4 line-clamp-3">{movie.overview}</p>
        <div className="flex justify-between items-center">
          <span className="text-white text-xs">{movie.year}</span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {movie.primaryType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieResult;
