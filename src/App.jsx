import React, { useState } from 'react'
import './App.css'
import Weatherfrom from './assets/components/weatherfrom';
import ErrorDisplay from './assets/components/ErrorDisplay';
import Weatherdisplay from './assets/components/weatherdisplay';

const App = () => {
  const [weater,setWeather]=useState(null);
  const [error ,setError]=useState();

  const fetchWeather= async (city)=>{
    const apiKey='e04058cd9475c84bd80af0c9306dba11'
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try{ 
      const response= await fetch(api_url);
       if(!response.ok){
        throw new Error("City Not Found");
       }
       const data=await response.json();
       setWeather(data);
       setError('');
    }
    catch(err){
      setError(err.message);
      setWeather(null);
    }
  }

  return (
    <div className='App'>  
      <h1>Weather App</h1>
      <Weatherfrom onSearch={fetchWeather}/>
      {error &&<ErrorDisplay/>}
      {weater&&<Weatherdisplay data={weater}/>}
    </div>
  )
}

export default App