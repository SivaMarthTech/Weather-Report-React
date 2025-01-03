import React from 'react';

const WeatherReport = ({ data }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-center">{data.name}, {data.sys.country}</h3>
      <div className="flex flex-col sm:flex-row  justify-around mt-4">
        <div className="text-center">
          <p className="text-lg font-bold">Temperature</p>
          <p>{data.main.temp}°C</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Weather</p>
          <p>{data.weather[0].description}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Wind Speed</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="font-bold">More Details:</p>
        <ul>
          <li>Pressure: {data.main.pressure} hPa</li>
          <li>Visibility: {data.visibility / 1000} km</li>
          <li>Feels Like: {data.main.feels_like}°C</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherReport;
