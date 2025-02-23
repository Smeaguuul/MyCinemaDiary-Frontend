import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query) {
      // Redirect to the search results page with the query
      navigate(`?query=${query}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center w-full"
      >
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-6 w-3/4 text-2xl text-center"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded-lg p-4 w-3/4 text-2xl hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
