import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from './context';
import Dashboard from './components/dashboard/dashboard';



// Function component for the main App
function App() {
  // Accesses weather data and loading state from the WeatherContext using the useContext hook
  const { data, isLoading } = useContext(WeatherContext);
  
  // If data is still loading, display a loading message
  if (isLoading) {
    return <div className='loader'>Loading...</div>;
  }

  // Return the main App UI
  return (
    <div className='app'>
      <div className='main-container'>
        {/* Render the Dashboard component */}
        <div className='dashboard-container'>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}


export default App;
