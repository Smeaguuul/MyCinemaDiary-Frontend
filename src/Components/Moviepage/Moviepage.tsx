import { useEffect, useState } from "react";
import { Movie } from "../MovieLogic";
import { getMovies } from "../../services/APIService";
import Movielist from "./Movielist";
import SearchBar from "./SearchBar";
import MovieSorter from "./MovieSorter";

const Moviepage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const filterMovies = (title: string) => {
    setMovies(movies.filter((movie) => movie.name.includes(title)));
  };
  
  const sortMovies = (type: string, ascending: boolean) => {
    console.log('Sorting');
    const sortedMovies = [...movies].sort((a, b) => {
      let number = 0;
      if (type === "year" || type === "id") {
        number = a[type] - b[type];
      } else if (type === "country" || type === "name") {
        number = a[type].localeCompare(b[type]);
      }
      return ascending ? number : number * -1;
    });
    
    setMovies(sortedMovies);
  };
  
  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);
  
  return (
    <div
      className="h-full w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/purple-background.jpg')" }}
    >
      <div className="absolute z-10 w-full bg-gray-50/20 backdrop-blur-md flex flex-row">
        <SearchBar onSearch={(filterMovies)} onRedo={fetchMovies} />
        <MovieSorter onSort={sortMovies} />
      </div>
      <div className="relative z-0">
      <Movielist movies={movies} loading={loading} />
      </div>
    </div>
  );
};

export default Moviepage;
