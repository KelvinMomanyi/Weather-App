import React, { useContext } from 'react'
import { WeatherContext } from '../../../context'
import { WiHumidity } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";
import './humidity.scss'
import { FormattedMessage } from 'react-intl';

// This component displays humidity and atmospheric pressure details.
const Humidity = () => {
  // Accesses the weather data from the WeatherContext using the useContext hook.
  const {data} = useContext(WeatherContext);

  // Returns the JSX elements representing humidity and atmospheric pressure details.
  return (
    <div className='humidity-container'>
      {/* Humidity details */}
      <div className='humidity-container-details'>
        {/* Displays humidity icon */}
        <WiHumidity size={30} className='humidity-icon'/>
        {/* Displays humidity title and value */}
        <h3><FormattedMessage id='humidiy.title'/>: {data ? data.main.humidity : <FormattedMessage id="data.title"/>} % </h3> 
      </div>
      {/* Atmospheric pressure details */}
      <div className='humidity-container-details'>    
        {/* Displays atmospheric pressure icon */}
        <WiWindy size={30} className='humidity-icon'/>    
        {/* Displays atmospheric pressure title and value */}
        <h3><FormattedMessage id='atmosphericPressure.title'/>: {data ? data.main.pressure : <FormattedMessage id="data.title"/>} hPa</h3>
      </div>
    </div>
  )
}

export default Humidity;
