import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <>
      <div className="col-md-4">
        <button className="btn btn-sm btn-outline-light" onClick={props.changeWeatherVisibility}>
          Hava Durumu
        </button>
        <button className="ml-2 btn btn-sm btn-outline-light" onClick={props.btnChangeBackground}>
          Arkaplan
        </button>
      </div>
      <div className="col-md-8 justify-content-end text-right">
        <Link className="btn btn-sm btn-outline-light mr-2" to="/">
          Anasayfa
        </Link>
        <Link className="btn btn-sm btn-outline-light mr-2" to="/bookmarks">
          Yer imleri
        </Link>
        <Link className="btn btn-sm btn-outline-light mr-2" to="/history">
          Geçmiş
        </Link>
        <button
          className="btn btn-sm btn-success"
          onClick={() => {
            props.setOptionsVisibility("block");
          }}
        >
          Ayarlar
        </button>
      </div>
      {/*       <nav className="navbar navbar-expand-lg navbar-dark bg-primary Navbar">
        <Link className="navbar-brand" to="/">
          Deneme..
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookmarks">
                Bookmarklar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">
                Geçmiş
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => {props.setOptionsVisibility("block")}}>
                Ayarlar
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-danger" onClick={props.btnChangeBackground}>
                &
              </button>
            </li>
          </ul>
        </div>
      </nav>
  */}
    </>
  );
};

export default withRouter(NavBar);
