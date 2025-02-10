import "./App.css";
import { Movie } from "./Components/MovieLogic";
import MovieList from "./Components/MovieList";
import { searchMovies } from "./services/APIService";
import { useEffect, useState } from "react";

function App() {
  // Hooks to handle all situations
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //Fetching movies
  const fetchMovies = async () => {
    try {
      const data = await searchMovies("Lord of the rings", 3);
      console.log(data)
      setMovies(data);
    } catch (error) {
      //Nødt til at checke instance, for at ts ved hvilken type error ér
        if (error instanceof Error) setError(error.message);
        else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Denne function kaldes, når componenten mountes
  // Den tomme dependency ([]) sikrer at den kun kører en gang / når den ændres (det gør den ikke)
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-purple-950 p-4">
      <h1 className="text-2xl font-bold text-center mb-4 bg-blend-color">
        Movie Search Results
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
