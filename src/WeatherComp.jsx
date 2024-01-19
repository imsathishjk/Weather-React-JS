import { useState } from "react";
import axios from "axios";

function WeatherComp() {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState("Sunny");
    const [temp, setTemp] = useState(25);
    const [desc, setDesc] = useState("No Rain");
    const [wind, setWind] = useState(25);
    const [humidity, sethumdity] = useState(50);
    const [cityName, setCityName] = useState("Trichy");
    const [country, setCountry] = useState("IN")

    function handleChange(e) {
        setCity(e.target.value);
    }
    function handleCheck() {

        var weatherReport = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28427ad02920f71f399bbbc6c69af233`)

        weatherReport.then(function (getWeather) {
            console.log(getWeather.data)
            setWeather(getWeather.data.weather[0].main);
            setTemp((Math.round(getWeather.data.main.temp)) / 10);
            setDesc(getWeather.data.weather[0].description);
            setWind(getWeather.data.wind.speed);
            sethumdity(getWeather.data.main.humidity);
            setCityName(getWeather.data.name);
            setCountry(getWeather.data.sys.country);
            // const current = new Date();
            // const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
            // setCurrentDate(date)
        });
        setCity("");
    }

    return (
        <div className=" m-5 p-5 border rounded-md bg-green-300 text-black">
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-2xl text-left font-bold">Weather Report</h1>
                </div>
                <div className="mt-5">
                    <div className="border border-black w-fit rounded-md flex gap-2 items-center">
                        <input type="text" value={city} placeholder="Enter a Location" onChange={handleChange} className="bg-transparent placeholder-gray-400 p-2 
                        focus:outline-none text-black text-md font-medium]]" />
                        <i class="fa-solid fa-location-dot text-black text-opacity-60 text-xl"></i>
                        <button className="bg-black text-lime-400 p-2 rounded-md text-lg font-semibold px-5}" onClick={handleCheck}>Check</button>
                    </div>
                    <p className="mt-5 text-md font-bold">Please enter a valid location to find results :)</p>
                </div>
            </div>
            <div className="mt-5 flex justify-around  text-lime-400 bg-black rounded-md gap-3 shadow-2xl font-quicksand">
                <div className=" p-5 flex flex-col items-center justify-center">
                    <h2 className="text-lime-400 text-5xl font-semibold">{temp} &deg; C</h2>
                    <h2 className="text-green-400 text-2xl tracking-wider">{cityName}, {country}  <i class="fa-solid fa-location-dot text-green-400  text-lg"></i></h2>
                </div>
                <div className="flex flex-col flex-wrap gap-4 p-2 m-3">
                    <div className="">
                        <h2 className="text-xl text-white">{weather}</h2>
                        <p className="text-lime-400">Weather</p>
                    </div>
                    <div className="">
                        <h2 className="text-xl text-white">{humidity} &deg; C</h2>
                        <p className="text-lime-400">Humidity</p>
                    </div>
                    <div className="">
                        <h2 className="text-xl text-white">{wind} Km/h</h2>
                        <p className="text-lime-400">Wind Speed</p>
                    </div>
                    <div className="">
                        <h2 className="text-xl text-white">{desc}</h2>
                        <p className="text-lime-400">Description</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WeatherComp;