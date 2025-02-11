import React from "react";
import { Movie } from "./MovieLogic";
import MovieResult from "./Searchpage/MovieResult";

interface Props {
  movies: Movie[];
  selectMovieFuncProvider : (movie : Movie) => () => void
}

const MovieList: React.FC<Props> = ({ movies, selectMovieFuncProvider } : Props) => {
  return (
    <div className="flex flex-col items-start w-fit">
    {movies.map((movie) => (
        <MovieResult key={movie.imdbId} movie={movie} onClick={selectMovieFuncProvider(movie)} />
    ))}
</div>
  );
};

export default MovieList;
