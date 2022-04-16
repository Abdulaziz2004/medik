import React from "react";

import "../style/homepages.css";
import homepages2 from "./homegapes2";
import { Link, NavLink, Outlet } from "react-router-dom";
import Shifokorlar from "./shifokorlar";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <ul class="nav flex-column">
            <li class="nav-item">
              <NavLink class="nav-link" to="shifokorlar">
                Shifokorlar
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="xizmatlar">
                Xizmatlar
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="yonalish">
                Yonalish
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="#">
                Link4
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
