import React,{useContext} from 'react'
import { WeatherContext } from '../../../context'
import { FormattedMessage } from 'react-intl';
import './weather.scss';
import { TranslationContext } from '../../../context/Translation';
import { TiWeatherPartlySunny } from "react-icons/ti";
import Switcher from '../../switcher/switcher';

// This component displays weather details including weather condition, temperature, rainfall, cloud cover, and fog.
const Weather = () => {
  // Accesses the weather data and error from the WeatherContext using the useContext hook.
  const {data, error} = useContext(WeatherContext);

  // Returns the JSX elements representing weather details.
  return (
    <div className='weather-container'>
      {/* Weather elements */}
      <div className='weather-elements'>
        {/* Weather icon */}
        <TiWeatherPartlySunny size={50} className='icon' />
        {/* Language switcher */}
        <Switcher/>
        {/* Weather title */}
        <h4><FormattedMessage id='weather.title'/></h4>
        {/* Weather information */}
        <div className='weather-info'>
          {/* Mapping through weather data to display weather details */}
          {data
            ? data.weather.map((item)=>(
              <div key={item.id}>
                <img 
                  width={'240px'}
                  height={'240px'}
                  id="wicon" 
                  src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`}
                  alt="weather icon"/>
                <h1>{item.main}</h1>
                <h4>{item.description}</h4>
              </div>
            ))
            : <FormattedMessage id="data.title"/>
          }
        </div> 
      </div>
      {/* Weather element details */}
      <div className='weather-element-details'>
        {/* Rainfall */}
        <div className='element-details'>
          <FormattedMessage id='rainfall.title'/>:
          {data
            ? (data.rain
              ? Object.values(data?.rain).map((item)=>(
                  <h1 key={item}>{item}mm</h1>
                )) : (<h1><FormattedMessage id="noRain.title"/></h1>))
            : (
              <FormattedMessage id="data.title"/>
            )}
        </div>
        {/* Cloud cover */}
        <div className='element-details'>
          <FormattedMessage id='cloudCover.title'/>:
          {data
            ? Object.values(data.clouds).map((item)=>(
                <h1 key={item}>{item}%</h1>
              ))
            :(
              <FormattedMessage id="data.title"/>
            )}
        </div>
        {/* Fog */}
        <div className='element-details'>
          <FormattedMessage id='fog.title'/>:
          <h1>
            {data
              ? data.visibility
              : <FormattedMessage id="data.title"/>
            }
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Weather;
