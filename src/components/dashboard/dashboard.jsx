import React, { useContext } from 'react'
import { WeatherContext } from '../../context';
import './dashboard.scss'
import Temp from '../elements/temp/temp';
import Wind from '../elements/wind/wind';
import Humidity from '../elements/humidity/humidity';
import Weather from '../elements/weather/weather';
import LocationDetails from '../elements/location/locationDetails';

// This component represents the main dashboard of the weather application.
const Dashboard = () => {
// Accesses the weather data from the WeatherContext using the useContext hook.
  const {data} = useContext(WeatherContext);
// Returns the JSX elements representing the dashboard layout.
  return (
    <div className='dash-container'>
      {/* Displays the weather details component */}
      <div className='weather-details'>
       <Weather/>
      </div>
      {/* Displays the location details component */}
      <div className='location-details'>
        <LocationDetails/>
      </div>
      {/* Displays the wind details component */}  
      <div className='wind-details'>
        <Wind/>
      </div>
      {/* Displays the temperature details component */}
      <div className='pressure-details'>
        <Temp/>
      </div>
      {/* Displays the humidity details component */}
      <div className='humidity-details'>
        <Humidity/>
      </div>
    </div>
  )
}
export default Dashboard;
