import React from "react";
import "../style/Footer.css";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer class="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p class="about">
          <h1> About Outdoor Trading Co.</h1>
          <p>Use our platform to rent/borrow outdoor gear and enjoy the outdoors.
          You can list your outdoor equipment up for rent/loan during the times you are unable to use it.
          Keep your equipment from gaining dust in the garage.
            Keep your outdoor activity list growing without the investments in outdoor equipment. </p>
        </p>
        <div class="icons">
          <a href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342"><i class="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/outdoor-trading-co/"><i class="fa fa-linkedin"></i></a>
          <a href="https://github.com/NeedaMehmud2017/outdoor-trading-co"><i class="fa fa-github"></i></a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span> Street name and number</span> City, Country</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#"> office@company.com</a></p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <div className="navbar-brand">
          <img src={logo} alt="Outdoor Trading Co. logo" />
        </div>
        <p class="menu">
          <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
        </p>
        <p class="name"> Outdoor Trading Co. &copy; 2021</p>
      </div>
      {/* <div className="text-center p-3 copyright">
        <p>Copyright 2021 Outdoor Trading Co.</p>
      </div> */}
    </footer >
  );
}

export default Footer;
