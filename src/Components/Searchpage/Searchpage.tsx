import { useState } from "react";
import { searchMovies } from "../../services/APIService";
import { Movie } from "../MovieLogic";
import SearchTextField from "./SearchTextField";
import MovieList from "../MovieList";

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
          <div>Loading...</div>
        </>
      );
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className="min-h-screen bg-purple-950 p-4">
        <h1 className="text-2xl font-bold text-center mb-4 bg-blend-color">
          Movie Search Results
        </h1>
        <SearchTextField search={fetchMovies} />
        <MovieList movies={movies} />
      </div>
    );
  }
  
  export default SearchPage;
  