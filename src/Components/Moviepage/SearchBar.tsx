import { useState } from "react";
import { IconSearch, IconReload } from "@tabler/icons-react";

interface Props {
  onSearch: (title: string) => void;
  onRedo: () => void;
}

const SearchBar = ({ onSearch, onRedo }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex justify-baseline items-center p-4">
      <div className="bg-gray-100/10 backdrop-blur-md rounded-lg shadow-lg flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 bg-transparent text-white placeholder-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={() => onSearch(searchTerm)}
          className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition duration-200"
        >
          <IconSearch size={20} /> {/* Search icon */}
        </button>
        <button
            onClick={() => {
                onRedo();
                setSearchTerm("");
            }}
          className="bg-gray-600 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700 transition duration-200 ml-2 flex items-center"
        >
          <IconReload size={20} /> {/* Reload icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
