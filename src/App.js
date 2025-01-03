import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherReport from "./components/WeatherReport";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isNight, setIsNight] = useState(false); // State for theme toggle

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setWeatherData(null);
      setError("Could not fetch weather data. Please try again.");
    }
  };

  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      );
    }
    return stars;
  };

  const generateRaindrops = (count) => {
    const raindrops = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const delay = Math.random() * 5;
      raindrops.push(
        <div
          key={i}
          className="raindrop"
          style={{
            left: `${x}%`,
            animationDelay: `${delay}s`,
          }}
        ></div>
      );
    }
    return raindrops;
  };

  return (
    <div className={`App ${isNight ? "night" : "day"}`}>
      {/* Stars for Night Mode */}
      {isNight && (
        <div className="stars">
          {generateStars(100)}   
        </div>
      )}

      {/* Theme Toggle Button */}
      <div className="toggle-button">
        <button onClick={toggleTheme}>
          {isNight ? "Day" : "Night"}
        </button>
      </div>

      {/* Sky Elements */}
      <div className={isNight ? "moon" : "sun"}></div>

      {/* Raindrops for Day Mode */}
{!isNight && (
  <div className="rain">
    {generateRaindrops(100)}   
  </div>
)}

      {/* Header Section */}
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Weather Report</h1>
        <h2 className="text-lg">
        Get the latest weather updates for your city today!
        </h2>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weatherData && <WeatherReport data={weatherData} />}
      </div>
    </div>
  );
}

async function fetchWeatherData(city) {
  const apiKey = "ff39c3d446e093bea5373de8b9edd59f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    throw error;
  }
}


export default App;
