import React, { useState, useEffect } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import Mainpage from "./Mainpage";
import Bookmarks from "./views/Bookmarks";
import History from "./views/History";

import { useLocalStorage } from "./components/options/methods";
import NavBar from "./components/NavBar";
import OptionsPopup from "./components/OptionsPopup";
import WeatherPopup from "./components/WeatherPopup";

const App = props => {
  const initialLayout = [
    { i: "b", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "a", x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "d", x: 6, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "e", x: 8, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true }
  ];

  const [imgBackground, setImgBackground] = useLocalStorage("backgroundimg", 1);
  const [OptionsVisibility, setOptionsVisibility] = useState("none");
  const [WeatherVisibility, setWeatherVisibility] = useState("none");
  const [weatherCity, setWeatherCity] = useLocalStorage("weathercity","Fethiye");
  const [LayoutData, setLayoutData] = useLocalStorage("freqlayouts", initialLayout);

  useEffect(() => {
    props.history.push("/");
  }, []);

  const backgroundStyle = {
    backgroundImage: `url("/assets/wallpapers/firewatch${imgBackground}.jpg")`
  };

  const btnChangeBackground = () => {
    console.log(backgroundStyle);
    if (imgBackground > 4) {
      setImgBackground(1);
    } else {
      let newNumber = imgBackground + 1;
      setImgBackground(newNumber);
    }
  };

  const changeWeatherVisibility = () => {
    WeatherVisibility === "none" ? setWeatherVisibility("block") : setWeatherVisibility("none");
  };
  const changeWeatherCity = newCity => {
    setWeatherCity(newCity);
  };
  //test

  return (
    <>
      <div className="bg-img BodyContent" style={backgroundStyle}></div>
      <div className="container-fluid p-0 BodyContent d-flex flex-column">
        <div className="row no-gutters">
          <NavBar
            btnChangeBackground={btnChangeBackground}
            setOptionsVisibility={setOptionsVisibility}
            changeWeatherVisibility={changeWeatherVisibility}
          />
        </div>
        <div className="row no-gutters flex-grow-1 align-items-center">
          <div className="container py-3 mb-5 ContentContainer">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Mainpage {...props} LayoutData={LayoutData} setLayoutData={setLayoutData} />}
              />
              <Route
                exact
                path="/bookmarks"
                render={props => <Bookmarks {...props} LayoutData={LayoutData} setLayoutData={setLayoutData} />}
              />
              <Route
                exact
                path="/history"
                render={props => <History {...props} LayoutData={LayoutData} setLayoutData={setLayoutData} />}
              />
            </Switch>
          </div>
        </div>
      </div>

      <WeatherPopup WeatherVisibility={WeatherVisibility} weatherCity={weatherCity} />
      <OptionsPopup
        OptionsVisibility={OptionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
        changeWeatherCity={changeWeatherCity}
        weatherCity={weatherCity}
        LayoutData={LayoutData}
        setLayoutData={setLayoutData}
      />
    </>
  );
};

export default withRouter(App);


/*
TODO: 
NAVBAR BUTON İKON
YER İMLERİ VE HİSTORY ÇEKİM BUTONLA
SANTİGRAT FAHRENHEİT
SIK KULLANILANLAR İKON
YANDEX ARAMA
WEBSİTE İÇERİSİNDE ARAMA
BUTON RENKLERİ
BİNG ARKAPLANLARI
SIKKULLANILANLAR YENİ EKLE
HİSTORY VE BOOKMARK LİNK FULL CARDTA
HİSTORY VE BOOKMARK İCON
TEXTLER RENKLİ COLORPİCKER
ARKAPLAN KATEGORİ

*/
