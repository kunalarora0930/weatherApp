// import logo from './logo.svg';
// import './App.css';
// import SearchBar from './search';
// import CurrentWeather from './currentWeather';

// function App() {
//     return (
//         <div className="App">
//             <h1>WEATHER</h1>
//             <SearchBar />
//             <CurrentWeather />
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import SearchBar from './SearchBar';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState('Gurugram');

    useEffect(() => {
        async function fetchWeatherData() {
            const apiKey = '304c933f5d7109f2f355035ecf10e72b';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
        }

        async function fetchForecastData() {
            const apiKey = '304c933f5d7109f2f355035ecf10e72b';
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setForecastData(data);
        }

        fetchWeatherData();
        fetchForecastData();
    }, [location]);

    if (!weatherData || !forecastData) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className="App">
            <h1 className='logo'>WEATHER</h1>
            <SearchBar 
                onLocationChange={setLocation}
            />
            {weatherData && <CurrentWeather 
                location={weatherData.name}
                temperature={weatherData.main.temp}
                feelsLike={weatherData.main.feels_like}
                weatherDescription={weatherData.weather[0].description}
                low={weatherData.main.temp_min}
                high={weatherData.main.temp_max}
                humidity={weatherData.main.humidity}
                wind={weatherData.wind.speed}
                icon={weatherData.weather[0].icon}
            />}
            {forecastData && <HourlyForecast hourlyData={forecastData.list} />}
        </div>
    );
}

export default App;