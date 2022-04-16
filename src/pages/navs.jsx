import React from "react";
import { FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "../style/navs.css";
function Navs() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-md bg-white navbar-white">
          <a className="navbar-brand" href="#">
            Medov
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <div className="burger">
              <span>
                <FiMinus color="black" fontSize="30px" />
              </span>
              <span>
                <FiMinus color="black" fontSize="30px" />
              </span>
              <span>
                <FiMinus color="black" fontSize="30px" />
              </span>
            </div>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Bosh Sahifa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="interyuv">
                  Interyuv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="dolzarb">
                  Dolzarb Mavzular
                </NavLink>
              </li>
            </ul>

          </div>

          <button className="btn btn-outline-success"><b>Kirish</b></button>
        </nav>
      </div>
      <hr className="m-0" />
    </>
  );
}

export default Navs;
