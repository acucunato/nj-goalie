import React from "react";
import { Link } from "react-router-dom";
import lrglogoblue from "../img/njgoalkeeperlrg.png";

//  navigation bar
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-4">
      <div className="container-fluid">
        <Link to="/">
          <a class="navbar-brand" href="#top">
            <img src={lrglogoblue} alt="" width="200px" height="62px" />
          </a>
        </Link>
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="/about">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff">
                <a className="nav-link" href="/staff">
                  Staff
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training">
                <a className="nav-link" href="/training">
                  Training
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
