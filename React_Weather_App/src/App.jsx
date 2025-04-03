import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WeatherApp() {
  const [ city, setCity ] = useState("");
  const [ weather, setWeather ] = useState(null);

  const apiKey = "d2134af2b8284f798b2172621250104";
  const fetchWeatherData = async() =>{
    if(!city.trim()) return;

      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
      const data = await response.json();
      if(data) setWeather(data);
      else   console.error("City not found: ", err); 
      console.log(data);

  };

  return (
    <>
      <div className="formData">
        <label htmlFor="fetchCity">Enter City</label>
        <input
        id="fetchCity"
        value = {city}
        onChange = {(e)=>{setCity(e.target.value)}} 
        />
        <button onClick = {fetchWeatherData}>Get Weather</button>
      </div>
      <div className="displayCityData">
        {
          weather ? (
            <div>
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p>Temperature: {weather.current.temp_c}</p>
            <p>Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="Weather icon"></img>
            </div>
          ) : (
            weather && <p>City not found</p>
          )
         
        }
      
      </div>
    </>
  )
}

export default WeatherApp
