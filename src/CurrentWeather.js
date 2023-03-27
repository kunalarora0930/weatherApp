import React from 'react';
import './currentWeather.css'


function CurrentWeather(props) {
    // const { location, temperature, feelsLike, weatherDescription } = props;

    return (
        <div className='current-weather'>

            <div className='current-weather-container'>


                <div className='image'>
                    <h1 className='cityHeading'>{props.location}</h1>
                    <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt='Weather Icon' />
                    <p className='weatherDescription'>{props.weatherDescription.toUpperCase()}</p>
                </div>

                <div className='temp'>
                    {Math.round(props.temperature)}°
                    <span>FEELS LIKE {Math.round(props.feelsLike)}°</span>
                </div>

                <div className='details'>
                    <ul>
                        <li>LOW {Math.round(props.low)}° </li><li>HIGH {Math.round(props.high)}°</li>
                        <li>HUMIDITY {props.humidity}</li>
                        <li>WIND {props.wind}</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;
