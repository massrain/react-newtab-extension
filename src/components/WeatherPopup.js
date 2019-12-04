import React, { useState, useEffect } from "react";
import axios from "axios";
import { unixToDay, useLocalStorage } from "./options/methods";
import { responseWeatherList } from "./options/cachedweathers";
import Draggable from "react-draggable";

import { useTranslation } from "react-i18next";

const WeatherPopup = props => {
  const [WeatherData, setWeatherData] = useState(responseWeatherList);
  let defaultpositions = { x: 0, y: 0 };
  const [weatherPopupPosition, setWeatherPopupPosition] = useLocalStorage("weatherdragpositions", defaultpositions);
  const { t } = useTranslation();

  useEffect(() => {
    let apiKey = process.env.REACT_APP_API_KEY;
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
  }, [props.weatherCity]);

  const handleStop = (e, position) => {
    let newpositions = { x: position.x, y: position.y };
    setWeatherPopupPosition(newpositions);
  };

  const translationDays = day => {
    let returnedDay = unixToDay(day);
    let resultDay;
    switch (returnedDay) {
      case "Paz":
        resultDay = t("weather.days.sunday");
        break;
      case "Pzt":
        resultDay = t("weather.days.monday");
        break;
      case "Sal":
        resultDay = t("weather.days.tuesday");
        break;
      case "Çar":
        resultDay = t("weather.days.wednesday");
        break;
      case "Per":
        resultDay = t("weather.days.thursday");
        break;
      case "Cum":
        resultDay = t("weather.days.friday");
        break;
      case "Cmt":
        resultDay = t("weather.days.saturday");
        break;
      default:
        resultDay = "1";
        break;
    }
    return resultDay;
  };
  return (
    <>
      <Draggable onStop={handleStop} defaultPosition={weatherPopupPosition}>
        <div
          className="container-fluid p-4 WeatherPopup text-white text-center"
          style={{ display: props.WeatherVisibility }}
        >
          <div className="row no gutters"></div>
          <div className="row no-gutters">
            <div className="col-12 p-0">
              {/* First Row */}
              <div className="row no-gutters">
                <div className="col-2">&deg;</div>
                <div className="col-8">{WeatherData.city.name}</div>
                <div className="col-2">
                  {props.weatherUnits === "imperial" ? <span>&deg;F</span> : <span>&deg;C</span>}
                </div>
              </div>
              {/* Second Row */}
              <hr className="border-light my-2" />
              <div className="row no-gutters">
                <div className="col-4 px-3">
                  <div className="row no-gutters justify-content-center text-secondary">{t("weather.temp")}</div>
                  <div className="row no-gutters justify-content-center">
                    {Math.floor(WeatherData.list[0].main.temp)}
                  </div>
                  <div className="row no-gutters justify-content-center text-secondary">
                    {props.weatherUnits === "imperial" ? <span>&deg;F</span> : <span>&deg;C</span>}
                  </div>
                </div>

                <div className="col-4 px-3">
                  <div className="row no-gutters justify-content-center text-secondary">{t("weather.humidity")}</div>
                  <div className="row no-gutters justify-content-center">{WeatherData.list[0].main.humidity}</div>
                  <div className="row no-gutters justify-content-center text-secondary">%</div>
                </div>
                <div className="col-4 px-3">
                  <div className="row no-gutters justify-content-center text-secondary">{t("weather.wind")}</div>
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
                    {translationDays(WeatherData.list[0].dt)}
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
                    {translationDays(WeatherData.list[8].dt)}
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
                    {translationDays(WeatherData.list[16].dt)}
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
                    {translationDays(WeatherData.list[24].dt)}
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
                    {translationDays(WeatherData.list[32].dt)}
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
      </Draggable>
    </>
  );
};

export default WeatherPopup;
