import React from "react";
import { Movie } from "../LogicClasses";
import MovieResult from "./MovieResult";
import MovieResultSkeleton from "./MovieResultSkeleton";

interface Props {
  movies: Movie[] | null;
  selectMovieFuncProvider: (movie: Movie) => () => void;
}

function MovieList({ movies, selectMovieFuncProvider }: Props) {
  if (movies == null) {
    const skeletons = [];

    for (let index = 0; index < 3; index++) {
      skeletons.push(<MovieResultSkeleton key={index} />);
    }

    return (
      <div className="flex flex-col items-start w-full max-w-md overflow-y-auto">
        {skeletons}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start w-full max-w-md overflow-y-auto">
      {movies.map((movie) => (
        <MovieResult
          key={movie.imdbId}
          movie={movie}
          onClick={selectMovieFuncProvider(movie)}
        />
      ))}
    </div>
  );
}

export default MovieList;
