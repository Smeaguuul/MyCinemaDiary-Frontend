import { Movie } from "../MovieLogic";
import MovieThumbnail from "./MovieThumbnail";
import MovieThumbnailSkeleton from "./MovieThumbnailSkeleton";

interface Props {
  movies: Movie[];
  loading: boolean;
}
const Movielist = ({ movies, loading }: Props) => {
  return (
    <div className="flex flex-wrap items-start h-200">
      {loading
        ? Array.from({ length: 25 }).map((_, index) => (
            <MovieThumbnailSkeleton key={index} />
          ))
        : movies.map((movie) => (
            <MovieThumbnail key={movie.id} movie={movie} />
          ))}
    </div>
  );
};

export default Movielist;
