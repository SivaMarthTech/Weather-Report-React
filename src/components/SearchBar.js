import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-2 ">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded mt-2 p-2 w-1/2"/>
      <button
        onClick={handleSearchClick}
        className="ml-2 bg-blue-500 text-white mt-2 p-2 rounded"
      >
        Get Report
      </button>
    </div>
  );
};

export default SearchBar;
