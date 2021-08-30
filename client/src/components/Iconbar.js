import React from "react";
import "../style/Iconbar.css";
import campIcon from "../assets/images/camp-icon.png";
import compassIcon from "../assets/images/compass-icon.png";
import waterIcon from "../assets/images/water-icon.png";
import snowIcon from "../assets/images/snow-icon.png";
import climbingIcon from "../assets/images/climbing-icon.png";
import miscIcon from "../assets/images/misc-icon.png";

function Iconbar() {
  return (
    <nav className="nav-icon">
      <div className="container">
        <ul className="nav nav-icon">
          <li className="nav-item">
            <a href="#">
              <img src={campIcon} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={compassIcon} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={waterIcon} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={snowIcon} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={climbingIcon} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={miscIcon} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Iconbar;
