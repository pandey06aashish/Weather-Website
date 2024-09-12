import React from 'react'

const Weatherdisplay = ({data}) => {
  return (
    <div className='weather-display'>
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <p>Temperature:{data.main.temp}°C</p>
        <p>Humidity :{data.main.humidity}%</p>
        <p>Wind Speed:{data.wind.speed}m/s</p>
    </div>
  )
}

export default Weatherdisplay