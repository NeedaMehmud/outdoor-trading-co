import React from "react";
import "../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container p-5">
        <div className="row p-3">
          <h3>Contact Us</h3>
          <div className="col-2 sm-2">
            <p>1-800-OUT-DOOR</p>
            <p>1234 Pine Rd</p>
            <p>Outdoor, GA</p>
          </div>
          <div className="col-2 sm-2">
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
          <div className="col-8 lg-1">
          <div className="footer-social-icons">
    <h4 className="_14">Follow us on</h4>
    <ul className="social-icons">
        <li><a href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
        <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
        <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
        <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
        <li><a href="https://www.linkedin.com/company/outdoor-trading-co/" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
        <li><a href="" className="social-icon"> <i className="fa fa-github"></i></a></li>
    </ul>
</div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 copyright">
        <p>Copyright 2021 Outdoor Trading Co.</p>
      </div>
    </footer>
  );
}

export default Footer;
