import React from 'react';

const HourlyForecast = ({ hourlyData }) => {
  if (!hourlyData) return null;

  return (
    <div className="mt-6 overflow-x-auto flex space-x-6 p-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-lg shadow-lg">
      {hourlyData.slice(0, 8).map((hour, idx) => (
        <div 
          key={idx} 
          className="text-center bg-indigo-800 p-4 rounded-lg min-w-[80px] flex-shrink-0"
        >
          <p className="text-indigo-300 text-lg">
            {new Date(hour.dt * 1000).getHours()}:00
          </p>
          <p className="text-white text-2xl font-bold">
            {Math.round(hour.temp)}°C
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
