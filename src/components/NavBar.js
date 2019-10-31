import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary Navbar">
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
              <Link className="nav-link" to="/">
                Ayarlar
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-danger" onClick={props.btnChangeBackground}>
                &
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
