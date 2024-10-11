import React, { useState } from 'react';

const WeatherCard = ({ weatherData, weatherImage }) => {
  if (!weatherData) {
    return <p className="text-center">Loading...</p>;
  }

  const { name, main, weather, wind, sys } = weatherData;

  // State to manage the temperature unit
  const [isCelsius, setIsCelsius] = useState(true);

  // Function to toggle the temperature unit
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  // Determine the temperature to display based on the selected unit
  const temperature = isCelsius ? Math.round(main.temp) : Math.round(convertToFahrenheit(main.temp));

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white p-6 rounded-lg mt-6 shadow-lg">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl font-bold text-violet-400">{name}</h2>
          <p className="text-xl text-indigo-200">{new Date().toLocaleTimeString()}</p>
        </div>
        <div>
          <img src={weatherImage} alt={weather[0].description} className="w-24" />
        </div>
      </div>
      
      {/* Temperature Display */}
      <div 
        className="text-6xl font-bold mt-4 text-magenta-400 cursor-pointer hover:text-magenta-500 transition duration-200"
        onClick={toggleTemperatureUnit}
      >
        {temperature}°{isCelsius ? 'C' : 'F'}
      </div>

      <p className="capitalize text-xl text-purple-300 mt-2">{weather[0].description}</p>

      {/* Weather details */}
      <div className="mt-4 flex justify-between text-indigo-200">
        <div>
          <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
        <div>
          <p>Wind: {wind.speed} m/s</p>
          <p>Humidity: {main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
