// src/components/GeoLocation.jsx

import React from 'react';

// Defining the GeoLocation component which takes onGetWeather as a prop
const GeoLocation = ({ onGetWeather }) => {
  // Function to get the user's current location
  const getLocation = () => {
    // Check if geolocation is available in the navigator object
    if ('geolocation' in navigator) {
      // Use the geolocation API to get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Destructure latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          // Call the onGetWeather function with the latitude and longitude
          onGetWeather(latitude, longitude);
        },
        (error) => {
          // Log an error message if there is an issue getting the location
          console.error('Error getting user location:', error.message);
          // Fallback to default city coordinates if geolocation fails
          onGetWeather('default_city_latitude', 'default_city_longitude'); // Replace with actual defaults
        }
      );
    } else {
      // Log a message if geolocation is not supported by the browser
      console.log('Geolocation is not supported by this browser.');
      // Handle unsupported browser case, possibly fallback
    }
  };

  return (
    // Render a button that calls getLocation when clicked
    <button onClick={getLocation} className="ml-4">
      {/* Font Awesome icon for location */}
      <i className="fas fa-location-dot text-white"></i>
    </button>
  );
};

// Exporting the GeoLocation component as the default export
export default GeoLocation;