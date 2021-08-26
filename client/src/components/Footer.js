import React from "react";
import "../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div class="container p-5">
        <div class="row p-3">
          <h3>Contact Us</h3>
          <div class="col-3 sm-2">
            <p>1-800-OUT-DOOR</p>
            <p>1234 Pine Rd</p>
            <p>Outdoor, GA</p>
          </div>
          <div class="col-3 sm-2">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
          <div class="col-6 lg-1">
            {" "}
            <a
              href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342"
              target="_blank"
              alt="Facebook Logo"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/company/79902606/admin/"
              target="blank"
              alt="LinkedIn Logo"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div class="text-center p-3 copyright">
        <p>Copyright 2021 Outdoor Trading Co.</p>
      </div>
    </footer>
  );
}

export default Footer;
