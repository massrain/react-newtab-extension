import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [WeatherData, setWeatherData] = useState(null);
  const [defaultCity, setDefaultCity] = useState("314967");

  useEffect(() => {
    let apiKey = "&APPID=de2bc1df4881bd9386c18266a8b5a378";
    let endpoint =
      "http://api.openweathermap.org/data/2.5/weather?id=" + defaultCity + "&units=metric&lang=tr" + apiKey;

    /*   axios
      .get(endpoint)
      .then(res => {
        setWeatherData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
   */
  }, []);

  return (
    <>
      <div className="container-fluid p-4 WeatherPopup text-white text-center" style={{ display: props.WeatherVisibility }}>
        <div className="row no-gutters">
          <div className="col-12">
            <h4>
              {responsekek.name} - {responsekek.sys.country}
            </h4>
            <h5>
              <img src={"http://openweathermap.org/img/w/" + responsekek.weather[0].icon + ".png"} alt="" />-{" "}
              {responsekek.weather[0].description}
            </h5>
            <h3>{responsekek.main.temp}&deg;</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPopup;
