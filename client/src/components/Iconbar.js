import "../style/Iconbar.css";
import Nav from "react-bootstrap/Nav";
import campIcon from "../assets/images/camp-icon.png";
import compassIcon from "../assets/images/compass-icon.png";
import waterIcon from "../assets/images/water-icon.png";
import snowIcon from "../assets/images/snow-icon.png";
import climbingIcon from "../assets/images/climbing-icon.png";
import miscIcon from "../assets/images/misc-icon.png";

function Iconbar() {
  return (
    <nav class="nav-icon">
      <div class="container">
        <ul class="nav nav-icon">
          <li class="nav-item">
            <a href="#">
              <img src={campIcon} class="icon" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <img src={compassIcon} class="icon" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <img src={waterIcon} class="icon" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <img src={snowIcon} class="icon" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <img src={climbingIcon} class="icon" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <img src={miscIcon} class="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Iconbar;
