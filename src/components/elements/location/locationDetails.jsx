import React, { useContext } from 'react'
import './locationDetails.scss'
import { WeatherContext } from '../../../context'
import { GiSunset, GiSunrise } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {FormattedMessage} from  'react-intl';
import { TbWorldLongitude, TbWorldLatitude  } from "react-icons/tb";

// This component displays location details such as country, city, date, sunrise, sunset, longitude, and latitude.
const LocationDetails = () => {
  // Accesses the weather data from the WeatherContext using the useContext hook.
  const {data} = useContext(WeatherContext);

  // Function to format the time in a readable format.
  const formatTime = (time) => {
    const milliseconds = time * 1000;
    const date = new Date(milliseconds);
    const options = { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      timeZoneName: 'short' 
    };
    return date.toLocaleTimeString('en-US', options);
  }

  // Function to convert timestamp to a formatted date string.
  function convertTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    date.setHours(date.getHours() + 3); // Convert to Eastern Time Zone
    // Options for formatting the date
    const options = {
      weekday: 'long', // Full day name (e.g., "Monday")
      year: 'numeric', // Full year (e.g., "2024")
      month: 'long', // Full month name (e.g., "April")
      day: 'numeric', // Day of the month (e.g., "26")
      hour: 'numeric', // Hour (e.g., "13" for 1:00 PM)
      minute: 'numeric', // Minute (e.g., "45")
      second: 'numeric', // Second (e.g., "42")
      timeZone: 'UTC' // Time zone (e.g., "UTC")
    };
    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  // Returns the JSX elements representing location details.
  return (
    <div className='location-container'>
      <ul>
        {/* Country */}
        <li><FormattedMessage id='country.title'/>: {data ? data.sys.country : <FormattedMessage id="data.title"/>}</li>
        {/* City */}
        <li><FaLocationDot className='icon'/> <FormattedMessage id='location.title'/>: {data ? data.name : <FormattedMessage id="data.title"/>}</li>
        {/* Date */}
        <li><MdDateRange  className='icon'/> <FormattedMessage id='date.title'/>: {data ? convertTimestamp(data.dt) : <FormattedMessage id="data.title"/>}</li>
        {/* Sunrise */}
        <li><GiSunrise  className='icon'/> <FormattedMessage id='sunrise.title'/>: {data ? formatTime(data.sys.sunrise) : <FormattedMessage id="data.title"/>}</li>
        {/* Sunset */}
        <li><GiSunset  className='icon'/> <FormattedMessage id='sunset.title'/>: {data ? formatTime(data.sys.sunset) : <FormattedMessage id="data.title"/>}</li>
        {/* Longitude */}
        <li><TbWorldLongitude className='icon'/> <FormattedMessage id='lon.title'/>:  {data ? data.coord.lon : <FormattedMessage id="data.title"/>}</li>
        {/* Latitude */}
        <li><TbWorldLatitude className='icon'/> <FormattedMessage id='lat.title'/>:  {data ? data.coord.lat : <FormattedMessage id="data.title"/>}</li>
      </ul>
    </div>
  )
}

export default LocationDetails;
