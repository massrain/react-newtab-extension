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

  const TextColors = { mains: "white", navButtons: "outline", sides: "#ffffff" };
  const [imgBackground, setImgBackground] = useLocalStorage("backgroundimg", 1);
  const [imgBackgroundChoice, setImgBackgroundChoice] = useLocalStorage("backgroundimgchoice", "tabext");
  const [OptionsVisibility, setOptionsVisibility] = useState("none");
  const [WeatherVisibility, setWeatherVisibility] = useState("none");
  const [weatherCity, setWeatherCity] = useLocalStorage("weathercity", "Fethiye");
  const [weatherUnits, setWeatherUnits] = useLocalStorage("weatherunits", "metric");
  const [LayoutData, setLayoutData] = useLocalStorage("freqlayouts", initialLayout);
  const [colorTextData, setColorTextData] = useLocalStorage("colortextdata", TextColors);
  const [iconsVisibility, setIconsVisibility] = useLocalStorage("iconsvisibility", "true");

  useEffect(() => {
    props.history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundStyle = {
    backgroundImage:
      imgBackgroundChoice === "tabext"
        ? `url("/assets/wallpapers/firewatch${imgBackground}.jpg")`
        : "url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US)"
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
  const changeWeatherUnits = newUnits => {
    setWeatherUnits(newUnits);
  };
  const changeImgBackgroundChoice = e => {
    setImgBackgroundChoice(e.target.value);
  };
  const changeIconsVisibility = e => {
    iconsVisibility === "true" ? setIconsVisibility("false") : setIconsVisibility("true");
  };
  const changeColorTextData = (newColor, keyColor) => {
    console.log(newColor);
    let resultWord;
    switch (newColor) {
      case "#2c3e50":
        resultWord = "primary";
        break;
      case "#95a5a6":
        resultWord = "secondary";
        break;
      case "#18bc9c":
        resultWord = "success";
        break;
      case "#3498db":
        resultWord = "info";
        break;
      case "#f39c12":
        resultWord = "warning";
        break;
      case "#e74c3c":
        resultWord = "danger";
        break;
      case "#ecf0f1":
        resultWord = "light";
        break;
      default:
        break;
    }
    let colorPack = colorTextData;
    colorPack[keyColor] = resultWord;
    setColorTextData(colorPack);
  };
  //test

  return (
    <>
      <div className="bg-img BodyContent" style={backgroundStyle}></div>
      <div className="container-fluid p-0 BodyContent d-flex flex-column">
        <div className="row no-gutters h-100">
          <div className="col-1">
            <div className="row no-gutters flex-column h-100 justify-content-between Navbar">
              <NavBar
                colorTextData={colorTextData}
                iconsVisibility={iconsVisibility}
                btnChangeBackground={btnChangeBackground}
                setOptionsVisibility={setOptionsVisibility}
                changeWeatherVisibility={changeWeatherVisibility}
              />
            </div>
          </div>
          <div className="col-11">
            <div className="row no-gutters flex-grow-1 align-items-center">
              <div className="container py-3 mb-5 ContentContainer">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <Mainpage
                        {...props}
                        LayoutData={LayoutData}
                        setLayoutData={setLayoutData}
                        colorTextData={colorTextData}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/bookmarks"
                    render={props => (
                      <Bookmarks
                        {...props}
                        LayoutData={LayoutData}
                        setLayoutData={setLayoutData}
                        colorTextData={colorTextData}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/history"
                    render={props => (
                      <History
                        {...props}
                        LayoutData={LayoutData}
                        setLayoutData={setLayoutData}
                        colorTextData={colorTextData}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WeatherPopup
        WeatherVisibility={WeatherVisibility}
        weatherCity={weatherCity}
        setWeatherUnits={setWeatherUnits}
        weatherUnits={weatherUnits}
      />
      <OptionsPopup
        OptionsVisibility={OptionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
        weatherCity={weatherCity}
        changeWeatherCity={changeWeatherCity}
        LayoutData={LayoutData}
        setLayoutData={setLayoutData}
        changeWeatherUnits={changeWeatherUnits}
        weatherUnits={weatherUnits}
        imgBackgroundChoice={imgBackgroundChoice}
        changeImgBackgroundChoice={changeImgBackgroundChoice}
        changeColorTextData={changeColorTextData}
        colorTextData={colorTextData}
        iconsVisibility={iconsVisibility}
        changeIconsVisibility={changeIconsVisibility}
      />
    </>
  );
};

export default withRouter(App);

/*
TODO: 
SIKKULLANILANLAR YENİ EKLE
ARKAPLAN API + KATEGORİ
++ SANTİGRAT FAHRENHEİT
++ YANDEX ARAMA
++ BİNG ARAMA
++ WEBSİTE İÇERİSİNDE ARAMA
++ SIK KULLANILANLAR BORDERCOLOR
++ BİNG ARKAPLANLARI

++ YER İMLERİ VE HİSTORY ÇEKİM BUTONLA
++ HİSTORY VE BOOKMARK LİNK FULL CARDTA

++ TEXTLER DİNAMİK
++ TEXTLER RENKLİ COLORPICKER
++ BUTON RENKLERİ
++ BUTON RENKLERI COLORPICKER

NAVBAR BUTON İKON
SIK KULLANILANLAR İKONLARI
HİSTORY VE BOOKMARK İCON

HAVADURUMU VISIBILITY PERSISTENT STATE
BOOKMARK + HISTORY WEBSITE ICONS
DATA IMPORT
export filename

-- V2
SAAT
++NAVBAR SOL
NAVBAR BG HOVER
İCONS HOVER BÜYÜME
FREQUENTS STYLE
SIK KULLANILANLAR STYLE
ARAMA STYLE
OPTIONS STYLE SOL
BOOKMARKS İCONS
HİSTORY İCONS
FREQUENTS EKLEME
*/

/* "icons": {
  "16": "icons/16.png",
  "32": "icons/32.png",
  "48": "icons/48.png",
  "128": "icons/128.png"
}, */
