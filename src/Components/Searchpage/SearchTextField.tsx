interface Props {
  search: (formData: FormData) => Promise<void>; // Method is/should be async
}

const SearchTextField = ({ search }: Props) => {
  return (
    <div>
      <form action={search} className="flex items-center space-x-4 p-4 bg-blend-color rounded-lg shadow-md" >
        <input
          name="query" type="text" placeholder="Search..."
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
