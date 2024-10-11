// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WeatherCard from './components/WeatherCard';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import backgroundImage from '../src/assets/images/bg-1.jpg'; // Adjust the path as necessary


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherImage, setWeatherImage] = useState('');
  const [error, setError] = useState(null); // Error state for handling API errors


  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!weatherResponse.ok) throw new Error('City not found');

      const weather = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=minutely&units=metric&appid=${apiKey}`
      );
      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
      setWeatherImage(getImageUrl(weather.weather[0].main.toLowerCase()));
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error('Failed to fetch weather data', error);
    }
  };

  const fetchWeatherDataByCoords = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      const weather = await weatherResponse.json();
      
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${apiKey}`
      );
      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
      setWeatherImage(getImageUrl(weather.weather[0].main.toLowerCase()));
    } catch (error) {
      console.error('Failed to fetch weather data', error);
    }
  };


 

  const getImageUrl = (condition) => {
    switch (condition) {
      case 'sunny': 
        return '../src/assets/images/sunny.png';
      case 'rain': 
        return '../src/assets/images/rain.png';
      case 'thunderstorm': 
        return '../src/assets/images/thunderstorm,png';
      case 'drizzle':
        return '../src/assets/images/drizzle.png';
        case 'snow':
          return '../src/assets/images/snow.png';
        case 'clear':
          return '../src/assets/images/clear.png';
        case 'clouds':
          return '../src/assets/images/clouds.png';
        case 'windy':
          return '../src/assets/images/windy.png';
        case 'mist':
          return '../src/assets/images/mist.png';
        case 'fog':
          return '../src/assets/images/fog.png';
        case 'haze':
          return '../src/assets/images/haze.png';
      // Add other conditions based on your image set
      default: return '../src/assets/images/default.png';
    }
  };

  useEffect(() => {
    fetchWeatherData('New York'); // Default city
  }, []);

  return (
    <div
  className="min-h-screen bg-gray-800 text-white"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      <Navbar onSearch={fetchWeatherData} onGetWeather={fetchWeatherDataByCoords} />
      <div className="container mx-auto">
        {error && <p className="text-pink-500 text-center">{error}</p>} {/* Display error message */}
        <WeatherCard weatherData={weatherData} weatherImage={weatherImage} />
        <HourlyForecast hourlyData={forecastData?.hourly} />
        <DailyForecast dailyData={forecastData?.daily} />
      </div>
    </div>
  );
};
export default App;
