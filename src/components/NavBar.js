import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <>
      <div className="container">
        <div className="row no-gutters mt-3">
          <div className="col-6 d-flex flex-column navButtons">
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
              onClick={props.changeBookmarksVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/focus.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Ekranı Gizle"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
              onClick={props.changeWeatherVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/partly.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Hava Durumu"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
              onClick={props.btnChangeBackground}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/photo.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Arkaplan"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row no-gutters mb-3">
          <div className="col-6 d-flex flex-column navButtons">
            <Link
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
              to="/"
              onClick={props.BookmarksVisibility === "none" ? props.changeBookmarksVisibility : null}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/home.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Anasayfa"
              )}
            </Link>
            <Link
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
              to="/bookmarks"
              onClick={props.BookmarksVisibility === "none" ? props.changeBookmarksVisibility : null}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/bookmark.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Yer imleri"
              )}
            </Link>
            <Link className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`} to="/history">
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/time.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Geçmiş"
              )}
            </Link>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons}`}
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
        </div>
      </div>
    </>
  );
};

export default withRouter(NavBar);
