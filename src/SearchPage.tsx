import { Movie } from "./Components/MovieLogic";
import MovieList from "./Components/MovieList";
import SearchTextField from "./Components/Searchpage/SearchTextField";
import { searchMovies } from "./services/APIService";
import { useEffect, useState } from "react";

function SearchPage() {
  // Hooks to handle all situations
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //Fetching movies
  const fetchMovies = async (formData: FormData) => {
    try {
      var movieTitle = formData.get("query")?.toString();
      if (!movieTitle) movieTitle = "lord of the rings";
      console.log(movieTitle);
      const data = await searchMovies(movieTitle, 3);
      setMovies(data);
    } catch (error) {
      //Nødt til at checke instance, for at ts ved hvilken type error ér
      if (error instanceof Error) setError(error.message);
      else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <SearchTextField search={fetchMovies} />
        <div>dsfsfsfs...</div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
}

export default SearchPage;
