import React, { useState } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import Mainpage from "./Mainpage";
import Bookmarks from "./views/Bookmarks";
import History from "./views/History";

import NavBar from "./components/NavBar";
import OptionsPopup from "./components/OptionsPopup";
import WeatherPopup from "./components/WeatherPopup";

const App = props => {
  const [imgBackground, setImgBackground] = useState(1);
  const [OptionsVisibility, setOptionsVisibility] = useState("none");
  const [WeatherVisibility, setWeatherVisibility] = useState("none");

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
              <Route exact path={"/"} component={Mainpage} />
              <Route exact path={"/bookmarks"} component={Bookmarks} />
              <Route exact path={"/history"} component={History} />
            </Switch>
          </div>
        </div>
      </div>

      <WeatherPopup WeatherVisibility={WeatherVisibility} />
      <OptionsPopup OptionsVisibility={OptionsVisibility} setOptionsVisibility={setOptionsVisibility} />
    </>
  );
};

export default withRouter(App);
