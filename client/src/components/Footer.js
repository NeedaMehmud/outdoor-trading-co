import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container p-5">
        <div className="row">
          <h3>Contact Us</h3>
          <div className="col-lg-4 col-sm-1 my-2">
            <p>1-800-OUT-DOOR</p>
            <p>1234 Pine Rd</p>
            <p>Outdoor, GA</p>
          </div>
          <div className="col-lg-4 col-sm-1 my-2">
            <p><a href="#">About</a></p>
            <p><a href="#">Team</a></p>
            <p><a href="#">Link</a></p>
          </div>
          <div className="col text-center">
            <ul className="social-icons">
              <li className="m-2"><a href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342" className="social-icon"> <i className="fa fa-facebook fa-lg"></i></a></li>
              <li className="m-2"><a href="https://www.linkedin.com/company/outdoor-trading-co/" className="social-icon"> <i className="fa fa-linkedin fa-lg"></i></a></li>
              <li className="m-2"><a href="https://github.com/NeedaMehmud2017/outdoor-trading-co" className="social-icon"> <i className="fa fa-github fa-lg"></i></a></li>
            </ul>
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
