import {
  IconSortAscending,
  IconSortDescending,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  onSort: (criteria: string, ascending: boolean) => void;
}

const MovieSorter = ({ onSort }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (criteria: string) => {
    onSort(criteria, true);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left items-center p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-purple-700 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sort By
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-purple-800 ring-1 ring-black ring-opacity-5">
          <ul
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li
              onClick={() => handleSort("country")}
              className="block px-4 py-2 text-sm text-white hover:bg-purple-700 cursor-pointer"
            >
              Contry of Origin
            </li>
            <li
              onClick={() => handleSort("year")}
              className="block px-4 py-2 text-sm text-white hover:bg-purple-700 cursor-pointer"
            >
              Year
            </li>
            <li
              onClick={() => handleSort("name")}
              className="block px-4 py-2 text-sm text-white hover:bg-purple-700 cursor-pointer"
            >
              Name
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieSorter;
