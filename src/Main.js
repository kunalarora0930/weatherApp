import axios from 'axios'
import React from 'react'
// import './index.css'
export default function Main() {

    // const [url,setUrl] = React.useState('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2ff96cd200e431bbc435725b99bcdfe6')


    const [data, setData] = React.useState({})
    const [location, setLocation] = React.useState('gurugram')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2ff96cd200e431bbc435725b99bcdfe6`
    React.useEffect(()=>{
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data)
        })
    }, [])
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            })

        }
    }









    return (
        <div>
            
            <div className='search'>
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text" />
            </div>
            {data && <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp}°C</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className='bold'>{data.wind.speed} KPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                }



            </div>}
        </div>)
}