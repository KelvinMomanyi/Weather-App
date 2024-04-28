import React,{useContext} from 'react'
import { WeatherContext } from '../../../context'
import { FaTemperatureHalf } from "react-icons/fa6";
import {RiTempColdLine} from "@remixicon/react";
import './temp.scss'
import { FormattedMessage } from 'react-intl';

// This component displays temperature details including current temperature, maximum temperature, and minimum temperature.
const Temp = () => {
  // Accesses the weather data from the WeatherContext using the useContext hook.
  const {data} = useContext(WeatherContext);

  // Returns the JSX elements representing temperature details.
  return (
    <div className='temp-container'>
      {/* Temperature icon */}
      <div className='temp-elements-details'>
        <RiTempColdLine className='faTemp'  size={20}/>
      </div>
      {/* Temperature details */}
      <div className='element-details'>
        {/* Current temperature */}
        <h3><FormattedMessage id='temperature.title'/>: {data ? data.main.temp : <FormattedMessage id="data.title"/>} &deg;C</h3> 
        {/* Maximum temperature */}
        <h3><FormattedMessage id='maxTemperature.title'/>: {data ? data.main.temp_max : <FormattedMessage id="data.title"/>} &deg;C</h3>
        {/* Minimum temperature */}
        <h3><FormattedMessage id='minTemperature.title'/>: {data ? data.main.temp_min : <FormattedMessage id="data.title"/>} &deg;C</h3>
      </div>
    </div>
  )
}

export default Temp;
