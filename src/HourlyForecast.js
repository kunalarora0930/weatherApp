import React from 'react';
import './HourlyForecast.css';

function HourlyForecast(props) {
    const dataList = props.hourlyData;
    console.log(props.hourlyData);
    const cardList = dataList.map((data) => {
        return (
            <div className='hourly-card'>
                <h3>{new Date(data.dt * 1000).toLocaleTimeString()}</h3>
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].main}
                />
                <p>{Math.round(data.main.temp)}°C</p>
            </div>
        )
    });

    return (
        <div className='hourly-weather-container'>
            {cardList}
        </div>
    );
}

export default HourlyForecast;
