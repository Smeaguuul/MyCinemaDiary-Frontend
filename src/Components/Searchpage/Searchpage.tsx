import { useEffect, useState } from "react";
import { searchMovies } from "../../services/APIService";
import { Movie } from "../MovieLogic";
import SearchTextField from "./SearchTextField";
import MovieList from "../MovieList";
import MovieShowcase from "./MovieShowcase";
import { useLocation } from "react-router-dom";

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
      console.log(movieTitle);
      const data = await searchMovies(movieTitle, 3);
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
      <>
        <SearchTextField />
        <div className="h-full w-full">Loading...</div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full w-full bg-gradient-to-r from-purple-800 via-purple-950 to-purple-600 p-4">
      <h1 className="text-2xl font-bold text-center mb-4 bg-blend-color">
        Movie Search Results
      </h1>
      <SearchTextField />
      <div className="flex flex-row">
        <MovieList
          movies={movies}
          selectMovieFuncProvider={(movie: Movie) => () => setMovie(movie)}
        />
        <MovieShowcase movie={movie} onAddMovie={() => 0} />
      </div>
    </div>
  );
}

export default SearchPage;
