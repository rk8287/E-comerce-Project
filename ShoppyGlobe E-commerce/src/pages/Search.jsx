import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6 text-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/2"
      />
    </div>
  );
}

export default Search;
