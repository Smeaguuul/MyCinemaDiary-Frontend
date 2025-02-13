import { Movie } from "../LogicClasses";

interface Props {
  movie: Movie;
}

const MovieThumbnail = ({ movie }: Props) => {
  return (
    <div className="w-48 rounded overflow-hidden shadow-lg bg-gray-100/20 backdrop-blur-md m-2">
      <img
        className="w-full h-72 object-cover"
        src={"http://localhost:5253/img/" + movie.thumbnail}
        alt={movie.name}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1 text-white truncate">
          {movie.name}
        </div>
        <p className="text-gray-300 text-sm">
          {movie.year} | {movie.primaryLanguage} | {movie.primaryType}
        </p>
      </div>
    </div>
  );
};

export default MovieThumbnail;
