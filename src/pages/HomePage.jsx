import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Boshsahifa from "./boshSahifa";
import "../style/homepages.css";

const HomePage = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-3 mt-3">
            <ul class="nav flex-column ">
              <li class="nav-item">
                <NavLink class="nav-link" to="shifokorlar">
                  <button className="btn">
                    Shifokorlar <span className="badge badge-light float-right text-muted p-2">112</span>
                  </button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="xizmatlar">
                  <button className="btn ">Xizmatlar <span className="badge badge-light float-right text-muted p-2">32</span></button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="yonalish">
                  <button className="btn ">Yonalish <span className="badge badge-light float-right text-muted p-2">877</span></button>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="#">
                  <button className="btn"> Link4 <span className="badge badge-light float-right text-muted p-2">10</span></button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-3 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
