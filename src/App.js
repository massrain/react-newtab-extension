import React, { useState } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import Mainpage from "./Mainpage";
import Bookmarks from "./views/Bookmarks";
import History from "./views/History";

import NavBar from "./components/NavBar";
import OptionsPopup from "./components/OptionsPopup";

const App = props => {
  const [imgBackground, setImgBackground] = useState(1);
  const [OptionsVisibility, setOptionsVisibility] = useState("none");

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

  //test
  return (
    <>
      <div>
        <div className="container-fluid p-0 Navbar">
          <NavBar btnChangeBackground={btnChangeBackground} setOptionsVisibility={setOptionsVisibility} />
        </div>
        <div className="bg-img BodyContent" style={backgroundStyle}></div>
        <div className="container-fluid p-0 pt-5 BodyContent">
          <div className="container pt-3 ContentContainer">
            <Switch>
              <Route exact path={"/"} component={Mainpage} />
              <Route exact path={"/bookmarks"} component={Bookmarks} />
              <Route exact path={"/history"} component={History} />
            </Switch>
          </div>
        </div>

        <OptionsPopup OptionsVisibility={OptionsVisibility} setOptionsVisibility={setOptionsVisibility} />
      </div>
    </>
  );
};

export default withRouter(App);
