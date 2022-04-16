import React from "react";

import "../style/homepages.css";
import homepages2 from "./homegapes2";
import { Link, NavLink, Outlet } from "react-router-dom";
import Shifokorlar from "./shifokorlar";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <ul class="nav flex-column">
              <li class="nav-item">
                <NavLink class="nav-link" to="shifokorlar">
                  <button className="btn btn-success">Shifokorlar <span className="badge badge-light">12</span></button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="xizmatlar">
                  <button className="btn btn-success">Xizmatlar</button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="yonalish">
                  <button className="btn btn-success">Yonalish</button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="#">
                  <button className="btn btn-success"> Link4</button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
