import React from 'react';

const DailyForecast = ({ dailyData }) => {
  if (!dailyData) return null;

  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">Daily Forecast</h3>
      <div className="grid grid-cols-2 gap-6">
        {dailyData.slice(1, 6).map((day, idx) => (
          <div 
            key={idx} 
            className="text-center bg-indigo-800 p-4 rounded-lg"
          >
            <p className="text-indigo-300 text-lg">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
            </p>
            <p className="text-white text-4xl font-bold">
              {Math.round(day.temp.day)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
