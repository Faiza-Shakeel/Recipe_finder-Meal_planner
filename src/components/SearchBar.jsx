import { useState } from "react";

const SearchBar = ({search }) => {
  const [searchquery, setsearchquery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchquery.trim() !== "") {
      search(searchquery);
       
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        value={searchquery}
        onChange={(e) => setsearchquery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

