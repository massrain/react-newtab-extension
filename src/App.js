import React, { useState, useEffect } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import Mainpage from "./Mainpage";
import Bookmarks from "./views/Bookmarks";
import History from "./views/History";

import { useLocalStorage, initialLayout, initialLayoutDetails } from "./components/options/methods";
import NavBar from "./components/NavBar";
import OptionsPopup from "./components/OptionsPopup";
import WeatherPopup from "./components/WeatherPopup";
import DigitalClock from "./components/DigitalClock";
import NotesPopup from "./components/NotesPopup";
import { ChooseBgPopup } from "./components/ChooseBgPopup";
//import { wallpaperDataBing } from "./components/options/cachedwallpapers";

const App = props => {
  const TextColors = {
    mains: "light",
    navButtons: "light",
    sides: "#ffffff"
  };
  const initialNavVisibilities = {
    Ekranigizle: true,
    Yardim: true,
    Yorumla: true,
    Havadurumu: false,
    Arkaplan: true,
    Anasayfa: true,
    Yerimleri: true,
    Gecmis: true,
    Notlar: true
  };
  const [imgBackground, setImgBackground] = useLocalStorage("backgroundimg", 5);
  const [imgBackgroundChoice, setImgBackgroundChoice] = useLocalStorage("backgroundimgchoice", "tabext");
  const [weatherCity, setWeatherCity] = useLocalStorage("weathercity", "Ankara");
  const [weatherUnits, setWeatherUnits] = useLocalStorage("weatherunits", "metric");
  const [LayoutData, setLayoutData] = useLocalStorage("freqlayouts", initialLayout);
  const [LayoutDetails, setLayoutDetails] = useLocalStorage("freqlayoutdetails", initialLayoutDetails);
  const [colorTextData, setColorTextData] = useLocalStorage("colortextdata", TextColors);
  const [iconsVisibility, setIconsVisibility] = useLocalStorage("iconsvisibility", "true");
  const [Notes, setNotes] = useLocalStorage("quicknotes", ["İlk Notunuz..."]);
  const [NotesVisibility, setNotesVisibility] = useLocalStorage("notesvisibility", "none");
  const [OptionsVisibility, setOptionsVisibility] = useLocalStorage("optionsvisibility", "none");
  const [WeatherVisibility, setWeatherVisibility] = useLocalStorage("weathervisibility", "none");
  const [BookmarksVisibility, setBookmarksVisibility] = useLocalStorage("bookmarksvisibility", "block");
  const [ChooseBgVisibility, setChooseBgVisibility] = useLocalStorage("choosebgvisibility", "block");
  const [navIconVisibilities, setNavIconVisibilities] = useLocalStorage("naviconvisibilities", initialNavVisibilities);
  const [dateTimeFormat, setDateTimeFormat] = useLocalStorage("datetimeformat", "tr-TR");

  useEffect(() => {
    props.history.push("/");
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
    return () => {
      alert("kkek");
    };
  }, []);

  const showPosition = position => {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    axios
      .get(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`)
      .then(res => {
        if (res.data.city.toLowerCase() !== weatherCity.toLowerCase()) setWeatherCity(res.data.city);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      //navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    } else {
      console.log("location not available");
    }
  };
  const backgroundStyle = {
    backgroundImage:
      imgBackgroundChoice === "tabext"
        ? //? `url("/assets/wallpapers/bing${imgBackground}.jpg")`
          `url("/assets/wallpapers/firewatch${imgBackground}.jpg")`
        : // `url(${wallpaperDataBing.value[imgBackground].contentUrl})`
          "url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US)"
  };
  const btnChangeBackground = () => {
    console.log(backgroundStyle);
    if (imgBackground > 6) {
      setImgBackground(1);
    } else {
      let newNumber = imgBackground + 1;
      setImgBackground(newNumber);
    }
  };
  const changeWeatherVisibility = () => {
    WeatherVisibility === "none" ? setWeatherVisibility("block") : setWeatherVisibility("none");
  };
  const changeBookmarksVisibility = () => {
    BookmarksVisibility === "none" ? setBookmarksVisibility("block") : setBookmarksVisibility("none");
  };
  const changeWeatherCity = newCity => {
    setWeatherCity(newCity);
  };
  const changeWeatherUnits = newUnits => {
    setWeatherUnits(newUnits);
  };
  const btnRefreshBackground = () => {
    if (imgBackground > 6) {
      setImgBackground(1);
    } else {
      let newNumber = imgBackground + 1;
      setImgBackground(newNumber);
    }
  };
  const changeImgBackgroundChoice = e => {
    setImgBackgroundChoice(e.target.value);
  };
  const changeLayoutDetails = data => {
    let originalArray = LayoutDetails;
    let resultArray = originalArray.concat(data);
    setLayoutDetails(resultArray);
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
  const changeNotesVisibility = () => {
    NotesVisibility === "none" ? setNotesVisibility("block") : setNotesVisibility("none");
  };
  const btnChooseBackground = () => {
    ChooseBgVisibility === "none" ? setChooseBgVisibility("block") : setChooseBgVisibility("none");
  };
  const selectImageBackground = value => {
    setImgBackground(value);
  };
  const btnBgImageClick = () => {
    alert("asdasd");
    setOptionsVisibility("none");
    changeWeatherVisibility();
    btnChooseBackground();
    changeBookmarksVisibility();
    changeNotesVisibility();
  };
  //test
  /*   console.log(imgBackground);
  console.log(imgBackgroundChoice);
  console.log(weatherCity);
  console.log(weatherUnits);
  console.log(LayoutData);
  console.log(LayoutDetails);
  console.log(colorTextData);
  console.log(iconsVisibility); */
  return (
    <>
      <div className="pageOverlay z-index-98"></div>
      <div className="bg-img BodyContent z-index-97" style={backgroundStyle} onClick={btnBgImageClick}></div>
      <div className="container-fluid p-0 BodyContent d-flex flex-column z-index-99">
        <div className="row no-gutters h-100">
          <div className="col-1">
            <div className="row no-gutters flex-column h-100 justify-content-between Navbar">
              <NavBar
                colorTextData={colorTextData}
                iconsVisibility={iconsVisibility}
                btnChangeBackground={btnChangeBackground}
                setOptionsVisibility={setOptionsVisibility}
                changeWeatherVisibility={changeWeatherVisibility}
                changeBookmarksVisibility={changeBookmarksVisibility}
                BookmarksVisibility={BookmarksVisibility}
                changeNotesVisibility={changeNotesVisibility}
                btnRefreshBackground={btnRefreshBackground}
                btnChooseBackground={btnChooseBackground}
                navIconVisibilities={navIconVisibilities}
              />
            </div>
          </div>
          <div className="col-10 d-flex flex-column">
            <div className="row no-gutters flex-grow-1 align-items-start">
              <div className="container py-3 mb-5 ContentContainer" style={{ display: BookmarksVisibility }}>
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
                        LayoutDetails={LayoutDetails}
                        changeLayoutDetails={changeLayoutDetails}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/bookmarks"
                    render={props => <Bookmarks {...props} colorTextData={colorTextData} />}
                  />
                  <Route exact path="/history" render={props => <History {...props} colorTextData={colorTextData} />} />
                </Switch>
              </div>
            </div>
            <div className="row no-gutters flex-grow-0 align-items-center">
              <div className="container">
                <div className="row no-gutters justify-content-center">
                  <div className="col-12 text-center">
                    <h3 className={`display-4 text-${colorTextData.mains}`}>
                      <DigitalClock dateTimeFormat={dateTimeFormat} setDateTimeFormat={setDateTimeFormat} />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
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
        navIconVisibilities={navIconVisibilities}
        setNavIconVisibilities={setNavIconVisibilities}
        dateTimeFormat={dateTimeFormat}
        setDateTimeFormat={setDateTimeFormat}
      />
      <NotesPopup NotesVisibility={NotesVisibility} colorTextData={colorTextData} Notes={Notes} setNotes={setNotes} />
      <ChooseBgPopup
        setImgBackground={setImgBackground}
        imgBackground={imgBackground}
        ChooseBgVisibility={ChooseBgVisibility}
        setChooseBgVisibility={setChooseBgVisibility}
        selectImageBackground={selectImageBackground}
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
??SAAT
++NAVBAR SOL
++NAVBAR BG HOVER
++İCONS HOVER BÜYÜME

++FREQUENTS STYLE
++SIK KULLANILANLAR STYLE
++ARAMA STYLE

++OPTIONS STYLE SOL

++BOOKMARKS İCONS
++HİSTORY İCONS

++FREQUENTS EKLEME
++BOOKMARK SİLME
WALLPAPER API
*/
/*

--v3
++arama butonuna yazıp aratınca ENTER
+resolution icons + grid
++freq drag and drop, always draggable
freq right click menu
freq add freq mainstream options
++freq singlelayout click name or icon hover pointer
++weather autolocation
++quick notes
yer imlerini senkronize et
++ wallpapers random + selective
++ options menu add buttons single visiblity + date-time format
++ help modal
++ sidebar uzantıya yorum help btn
++ click closes modals,image click close others
++ notes popup css
++ tekil todo gösterimi
*/

/* "icons": {
  "16": "icons/16.png",
  "32": "icons/32.png",
  "48": "icons/48.png",
  "128": "icons/128.png"
}, */
