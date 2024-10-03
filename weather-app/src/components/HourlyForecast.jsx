import React from 'react';

const HourlyForecast = ({ hourlyData }) => {
  if (!hourlyData) return null;

  return (

    <div className='mt-6 p-6 bg-grey rounded-lg shadow-lg'>
       <h3 className="text-2xl font-semibold text-white mb-4">Hourly Forecast</h3>
    <div className="mt-6 grid grid-cols-4 gap-6 p-6  rounded-lg shadow-lg">
      
      {hourlyData.slice(0, 8).map((hour, idx) => (
        <div 
          key={idx} 
          className="text-center bg-violet-800 p-4 rounded-lg min-w-[80px] flex-shrink-0"
        >
          <p className="text-indigo-200 text-lg">
            {new Date(hour.dt * 1000).getHours()}:00
          </p>
          <p className="text-white text-2xl font-bold">
            {Math.round(hour.temp)}°C
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HourlyForecast;
