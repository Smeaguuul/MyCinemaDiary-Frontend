import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchTextField = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the URL with the search query
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4 bg-blend-color rounded-lg shadow-md" >
        <input
          name="query" type="text" placeholder="Search for movies..." value={query} onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchTextField;
