import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <>
      <div className="container">
        <button
          className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
          onClick={props.changeWeatherVisibility}
        >
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/partly.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Hava Durumu"
          )}
        </button>
        <button
          className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
          onClick={props.btnChangeBackground}
        >
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/photo.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Arkaplan"
          )}
        </button>
      </div>
      <div className="container">
        <Link className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`} to="/">
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/home.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Anasayfa"
          )}
        </Link>
        <Link className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`} to="/bookmarks">
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/bookmark.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Yer imleri"
          )}
        </Link>
        <Link className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`} to="/history">
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/time.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Geçmiş"
          )}
        </Link>
        <button
          className={`btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
          onClick={() => {
            props.setOptionsVisibility("block");
          }}
        >
          {props.iconsVisibility === "true" ? (
            <img src={"/assets/site/settings.png"} className="img-fluid" alt="" width={24} />
          ) : (
            "Ayarlar"
          )}
        </button>
      </div>
    </>
  );
};

export default withRouter(NavBar);
