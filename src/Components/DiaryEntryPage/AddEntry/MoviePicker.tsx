import { useState } from "react";
import { Movie } from "../../LogicClasses";

interface Props {
  movies: Movie[];
  onSelect: (movieId: number) => void;
}

function MoviePicker({ movies, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredMovies(
      movies.filter((movie) => movie.name.toLowerCase().includes(term))
    );
  };

  const handleSelect = (movie: Movie) => {
    onSelect(movie.id);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Select a movie
      </button>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-800 p-4 rounded shadow-md w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for movies"
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
            <ul>
              {filteredMovies.map((movie) => (
                <li key={movie.id} className="py-2 border-b border-gray-600">
                  <button
                    className="text-purple-500 hover:text-purple-600"
                    onClick={() => handleSelect(movie)}
                  >
                    {movie.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviePicker;
