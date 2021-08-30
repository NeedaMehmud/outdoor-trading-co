import React from "react";
import "../style/Iconbar.css";
import campIcon from "../assets/images/camp-icon.png";
import compassIcon from "../assets/images/compass-icon.png";
import waterIcon from "../assets/images/water-icon.png";
import snowIcon from "../assets/images/snow-icon.png";
import climbingIcon from "../assets/images/climbing-icon.png";
import miscIcon from "../assets/images/misc-icon.png";
import { Link } from "react-router-dom";

function Iconbar() {
  return (
    <nav className="nav-icon">
      <div className="nav-container">
        <ul className="nav nav-icon">
          <li className="nav-item">
            <a>
              <Link to={`/camping`}>
                <img src={campIcon} className="icon" />
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <Link to={`/hiking`}>
                <img src={compassIcon} className="icon" />
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <Link to={`/water`}>
                <img src={waterIcon} className="icon" />
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <Link to={`/snow`}>
                <img src={snowIcon} className="icon" />
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <Link to={`/climbing`}>
                <img src={climbingIcon} className="icon" />
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <Link to={`/misc`}>
                <img src={miscIcon} className="icon" />
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Iconbar;
