import { useContext, createContext, useEffect, useState } from "react";


// API key for accessing OpenWeatherMap API
const API_KEY = 'ca718b71afb835bb73a7140d0aad7aa4';

// createContext() creates a context object to pass data through the component tree
export const WeatherContext = createContext();

// WeatherContextProvider component provides weather data through the WeatherContext
export const WeatherContextProvider = ({ children }) => {
  // State variables to store weather data, loading state, and error message
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch weather data when the component mounts
  useEffect(() => {
    // fetchData function to fetch weather data asynchronously
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-1.286389&lon=36.817223&appid=${API_KEY}`);
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error('Data Error');
        }
        // Parse response data
        const responseData = await response.json();
        setData(responseData); // Set weather data
        setIsLoading(false); // Set loading state to false
      } catch (error) {
        setError(error.message); // Set error message
        setIsLoading(false); // Set loading state to false
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array ensures useEffect runs only once

  // Provide weather data, loading state, and error message to children components
  return (
    <WeatherContext.Provider value={{ data, error, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
};
