import React, { useState, useEffect } from "react";
import axios from "axios";
import { unixToDay } from "./options/methods";

const responsekek = {
  coord: { lon: 29.12, lat: 36.62 },
  weather: [{ id: 800, main: "Clear", description: "açık", icon: "01d" }],
  base: "stations",
  main: { temp: 26, pressure: 1018, humidity: 41, temp_min: 26, temp_max: 26 },
  visibility: 10000,
  wind: { speed: 2.1, deg: 210 },
  clouds: { all: 0 },
  dt: 1573298661,
  sys: { type: 1, id: 6984, country: "TR", sunrise: 1573274077, sunset: 1573311604 },
  timezone: 10800,
  id: 314967,
  name: "Fethiye",
  cod: 200
};

const WeatherPopup = props => {
  const [WeatherData, setWeatherData] = useState(responsekek);

  useEffect(() => {
    let apiKey = "&APPID=de2bc1df4881bd9386c18266a8b5a378";
    let endpoint =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      props.weatherCity +
      "&units=" +
      props.weatherUnits +
      "&lang=tr" +
      apiKey;
    //setWeatherData(responsekek);
    axios
      .get(endpoint)
      .then(res => {
        setWeatherData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="container-fluid p-4 WeatherPopup text-white text-center"
        style={{ display: props.WeatherVisibility }}
      >
        <div className="row no-gutters">
          <div className="col-12">
            <h4>
              {WeatherData.name} - {WeatherData.sys.country}
            </h4>
            <h5>
              <img src={"http://openweathermap.org/img/w/" + WeatherData.weather[0].icon + ".png"} alt="" />-{" "}
              {WeatherData.weather[0].description}
            </h5>
            <h3>{Math.floor(WeatherData.main.temp)}&deg;</h3>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 p-0">
            {/* First Row */}
            <div className="row no-gutters">
              <div className="col-2">Ayarlar</div>
              <div className="col-8">{city.name}</div>
              <div className="col-2">C*</div>
            </div>
            {/* Second Row */}
            <div className="row no-gutters">
              <div className="col">
                <div className="row no-gutters">Temp</div>
                <div className="row no-gutters">{list[0].main.temp}</div>
                <div className="row no-gutters">*C</div>
              </div>

              <div className="col">
                <div className="row no-gutters">Humidity</div>
                <div className="row no-gutters">{list[0].main.humidity}</div>
                <div className="row no-gutters">%</div>
              </div>
              <div className="col">
                <div className="row no-gutters">Wind</div>
                <div className="row no-gutters">{list[0].wind.speek}</div>
                <div className="row no-gutters">km/h</div>
              </div>
            </div>

            {/* Third Row */}
            <div className="row no-gutters">
              <div className="col">
                <div className="row no-gutters">{unixToDay(list[0].dt)}</div>
                <div className="row no-gutters">{list[0].weather.icon}</div>
                <div className="row no-gutters">{list[0].main.temp_max}</div>
                <div className="row no-gutters">{list[0].main.temp_min}</div>
              </div>
              <div className="col">
                <div className="row no-gutters">{unixToDay(list[1].dt)}</div>
                <div className="row no-gutters">{list[1].weather.icon}</div>
                <div className="row no-gutters">{list[1].main.temp_max}</div>
                <div className="row no-gutters">{list[1].main.temp_min}</div>
              </div>
              <div className="col">
                <div className="row no-gutters">{unixToDay(list[2].dt)}</div>
                <div className="row no-gutters">{list[2].weather.icon}</div>
                <div className="row no-gutters">{list[2].main.temp_max}</div>
                <div className="row no-gutters">{list[2].main.temp_min}</div>
              </div>
              <div className="col">
                <div className="row no-gutters">{unixToDay(list[3].dt)}</div>
                <div className="row no-gutters">{list[3].weather.icon}</div>
                <div className="row no-gutters">{list[3].main.temp_max}</div>
                <div className="row no-gutters">{list[3].main.temp_min}</div>
              </div>
              <div className="col">
                <div className="row no-gutters">{unixToDay(list[4].dt)}</div>
                <div className="row no-gutters">{list[4].weather.icon}</div>
                <div className="row no-gutters">{list[4].main.temp_max}</div>
                <div className="row no-gutters">{list[4].main.temp_min}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPopup;
