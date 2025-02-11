import React from "react";
import { Movie } from "./MovieLogic";
import MovieResult from "./Searchpage/MovieResult";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="flex flex-col items-center">
    {movies.map((movie) => (
        <MovieResult key={movie.imdbId} movie={movie} />
    ))}
</div>
  );
};

export default MovieList;
