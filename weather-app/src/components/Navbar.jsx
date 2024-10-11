// src/components/Navbar.jsx
import React, { useState } from 'react';
import GeoLocation from './GeoLocation';

// Defining the Navbar component which takes onSearch and onGetWeather as props
const Navbar = ({ onSearch, onGetWeather }) => {
  // Using the useState hook to manage the city state which is set to empty at first
  const [city, setCity] = useState('');

  // Function to handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (city.trim()) { // Check if the city input is not empty
      onSearch(city); // Call the onSearch prop function with the city name
      setCity(''); // Clear the input field
    }
  };

  return (
   
<nav className="flex justify-between items-center p-4 bg-transparent text-white">
  <a href="/" className="text-3xl font-bold"> Weather App</a>
  <form onSubmit={handleSearch} className="flex items-center">
  <input
  type="text"
  className="w-full py-2.5 px-4 rounded-[16px_0px_16px_0px] border-b-4 border-purple-500 text-antiquewhite bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-violet-500"
  placeholder="Search city..."
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
  </form>
  <GeoLocation onGetWeather={onGetWeather} />
</nav>

  );
};

// Exporting the Navbar component as the default export
export default Navbar;