import React, {useState} from "react";
import './../styles/App.css';
import WeatherDislay from "./WeatherDisplay"


const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDislay weather={weather}/>
    </div>
  )
}

export default App
