import { useEffect, useState } from "react";
import { searchMovies, addMovie } from "../../services/APIService";
import { Movie } from "../LogicClasses";
import SearchTextField from "./SearchTextField";
import MovieList from "./MovieList";
import MovieShowcase from "./MovieShowcase";
import { useLocation } from "react-router-dom";
import MovieShowcaseSkeleton from "./MovieShowcaseSkeleton";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchPage() {
  // Hooks to handle all situations
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  var query = useQuery().get("query");
  //Fetching movies
  const fetchMovies = async (movieTitle: string) => {
    try {
      if (!movieTitle) movieTitle = "lord of the rings";
      const data = await searchMovies(movieTitle, 5);
      setMovies(data);
      setMovie(data[0]);
    } catch (error) {
      //Nødt til at checke instance, for at ts ved hvilken type error ér
      if (error instanceof Error) setError(error.message);
      else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="h-full w-full bg-gradient-to-r from-purple-800 via-purple-950 to-purple-600 p-4">
        <h1 className="text-2xl font-bold text-center mb-4 bg-blend-color">
          Movie Search Results
        </h1>
        <SearchTextField />
        <div className="flex flex-row">
          <MovieList
            movies={null}
            selectMovieFuncProvider={(movie: Movie) => () => setMovie(movie)}
          />
          <MovieShowcaseSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full w-full bg-gradient-to-r from-purple-800 via-purple-950 to-purple-600 p-4 overflow-hidden">
      <h1 className="text-2xl font-bold text-center mb-4 bg-blend-color">
        Movie Search Results
      </h1>
      <SearchTextField />
      <div className="flex flex-row h-full w-full overflow-hidden">
        <div className="flex flex-col items-start w-full max-w-md overflow-y-auto">
          <MovieList
            movies={movies}
            selectMovieFuncProvider={(movie: Movie) => () => setMovie(movie)}
          />
        </div>
        <div className="flex-grow overflow-hidden">
          <MovieShowcase movie={movie} onAddMovie={addMovie} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
