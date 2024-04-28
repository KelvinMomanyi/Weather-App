import React, { useContext } from 'react'
import { WeatherContext } from '../../../context'
import {PiWind} from 'react-icons/pi'
import { RiWindyLine, RiCompass3Fill, RiSpeedUpFill } from '@remixicon/react'
import './wind.scss'
import {FormattedMessage} from 'react-intl'


// This component displays wind details including wind direction and wind speed.
const Wind = () => {
  // Accesses the weather data from the WeatherContext using the useContext hook.
  const {data} = useContext(WeatherContext);

  // Returns the JSX elements representing wind details.
  return (
    <div className='wind-container'>
      {/* Wind icon */}
      <PiWind className='riWindy' size={20}/> 
      {/* Wind detail elements */}
      <div className='wind-detail-elements'>
        {/* Wind direction */}
        <h3><RiCompass3Fill className='icon' size={40}/> <FormattedMessage id='windDirection.title'/>: {data ? data.wind.deg : <FormattedMessage id="data.title"/>} &deg;</h3>
        {/* Wind speed */}
        <h3><RiSpeedUpFill className='icon' size={40}/> <FormattedMessage id='windSpeed.title'/>: {data ? data.wind.speed : <FormattedMessage id="data.title"/>} m/s</h3>
      </div>
    </div>
  )
}

export default Wind;
