import React from "react";
import { FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

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
            <ul className="navbar-nav ml-5">
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
          <div className="dropdown mr-3">
            <button type="button" className="btn" data-toggle="dropdown">
              Ўзбекча
            </button>
            <div className="dropdown-menu ">
              <div className="row mx-0 ">
                <div className="col-lg-6">
                  <a className="dropdown-item" href="#">
                  Русский
                  </a>
                </div>
                <div className="col-lg-6">
                  <a className="dropdown-item" href="#">
                  Ўзбекча
                  </a>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="savol">
            <button className="btn btn-success savol mr-3 px-3 py-2">
              <b>Savol Yuborish</b>
            </button>
          </NavLink>
          <NavLink to="kirish" className="kirish">
            <button className="btn btn-outline-success d-flex">
              <BsPersonFill fontSize="20px" />
              <b className="pl-1">Kirish</b>
            </button>
          </NavLink>
        </nav>
      </div>
      <hr className="m-0" />
    </>
  );
}

export default Navs;
