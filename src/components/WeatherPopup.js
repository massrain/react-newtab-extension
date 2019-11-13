import React, { useState, useEffect } from "react";
import axios from "axios";
import { unixToDay } from "./options/methods";
import { responseWeatherList } from "./options/cachedweathers";

const WeatherPopup = props => {
  const [WeatherData, setWeatherData] = useState(responseWeatherList);

  useEffect(() => {
    let apiKey = "&APPID=de2bc1df4881bd9386c18266a8b5a378";
    let endpoint =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
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
          {/*           <div className="col-12">
            <h4>
              {WeatherData.name} - {WeatherData.city.country}
            </h4>
            <h5>
              <img src={"http://openweathermap.org/img/w/" + WeatherData.weather[0].icon + ".png"} alt="" />-{" "}
              {WeatherData.weather[0].description}
            </h5>
            <h3>{Math.floor(WeatherData.main.temp)}&deg;</h3>
          </div> */}
        </div>
        <div className="row no-gutters">
          <div className="col-12 p-0">
            {/* First Row */}
            <div className="row no-gutters">
              <div className="col-2">*</div>
              <div className="col-8">{WeatherData.city.name}</div>
              <div className="col-2">C*</div>
            </div>
            {/* Second Row */}
            <hr className="border-light my-2" />
            <div className="row no-gutters">
              <div className="col-4 px-3">
                <div className="row no-gutters justify-content-center text-secondary">Temp</div>
                <div className="row no-gutters justify-content-center">{Math.floor(WeatherData.list[0].main.temp)}</div>
                <div className="row no-gutters justify-content-center text-secondary">*C</div>
              </div>

              <div className="col-4 px-3">
                <div className="row no-gutters justify-content-center text-secondary">Humidity</div>
                <div className="row no-gutters justify-content-center">{WeatherData.list[0].main.humidity}</div>
                <div className="row no-gutters justify-content-center text-secondary">%</div>
              </div>
              <div className="col-4 px-3">
                <div className="row no-gutters justify-content-center text-secondary">Wind</div>
                <div className="row no-gutters justify-content-center">
                  {Math.floor(WeatherData.list[0].wind.speed)}
                </div>
                <div className="row no-gutters justify-content-center text-secondary">km/h</div>
              </div>
            </div>

            {/* Third Row */}
            <hr className="border-light my-2" />
            <div className="row no-gutters">
              <div className="col px-3">
                <div className="row no-gutters justify-content-center text-secondary">
                  {unixToDay(WeatherData.list[0].dt)}
                </div>
                <div className="row no-gutters justify-content-center">
                  <img
                    src={"http://openweathermap.org/img/w/" + WeatherData.list[0].weather[0].icon + ".png"}
                    alt=""
                    height={32}
                  />
                </div>
                <div className="row no-gutters justify-content-center">
                  {Math.floor(WeatherData.list[0].main.temp_max)}
                </div>
                <div className="row no-gutters justify-content-center text-info">
                  {Math.floor(WeatherData.list[0].main.temp_min)}
                </div>
              </div>
              <div className="col px-3">
                <div className="row no-gutters justify-content-center text-secondary">
                  {unixToDay(WeatherData.list[8].dt)}
                </div>
                <div className="row no-gutters justify-content-center">
                  <img
                    src={"http://openweathermap.org/img/w/" + WeatherData.list[8].weather[0].icon + ".png"}
                    alt=""
                    height={32}
                  />
                </div>
                <div className="row no-gutters justify-content-center">
                  {Math.floor(WeatherData.list[8].main.temp_max)}
                </div>
                <div className="row no-gutters justify-content-center text-info">
                  {Math.floor(WeatherData.list[8].main.temp_min)}
                </div>
              </div>
              <div className="col px-3">
                <div className="row no-gutters justify-content text-secondary">
                  {unixToDay(WeatherData.list[16].dt)}
                </div>
                <div className="row no-gutters justify-content">
                  <img
                    src={"http://openweathermap.org/img/w/" + WeatherData.list[16].weather[0].icon + ".png"}
                    alt=""
                    height={32}
                  />
                </div>
                <div className="row no-gutters justify-content">{Math.floor(WeatherData.list[16].main.temp_max)}</div>
                <div className="row no-gutters justify-content text-info">
                  {Math.floor(WeatherData.list[16].main.temp_min)}
                </div>
              </div>
              <div className="col px-3">
                <div className="row no-gutters justify-content-center text-secondary">
                  {unixToDay(WeatherData.list[24].dt)}
                </div>
                <div className="row no-gutters justify-content-center">
                  <img
                    src={"http://openweathermap.org/img/w/" + WeatherData.list[24].weather[0].icon + ".png"}
                    alt=""
                    height={32}
                  />
                </div>
                <div className="row no-gutters justify-content-center">
                  {Math.floor(WeatherData.list[24].main.temp_max)}
                </div>
                <div className="row no-gutters justify-content-center text-info">
                  {Math.floor(WeatherData.list[24].main.temp_min)}
                </div>
              </div>
              <div className="col px-3">
                <div className="row no-gutters justify-content-center text-secondary">
                  {unixToDay(WeatherData.list[32].dt)}
                </div>
                <div className="row no-gutters justify-content-center">
                  <img
                    src={"http://openweathermap.org/img/w/" + WeatherData.list[32].weather[0].icon + ".png"}
                    alt=""
                    height={32}
                  />
                </div>
                <div className="row no-gutters justify-content-center">
                  {Math.floor(WeatherData.list[32].main.temp_max)}
                </div>
                <div className="row no-gutters justify-content-center text-info">
                  {Math.floor(WeatherData.list[32].main.temp_min)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPopup;
