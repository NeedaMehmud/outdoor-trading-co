import React from "react";
import "../style/Footer.css";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <h1> About Us</h1>
          <p>With Outdoor Trading Co. you can enjoy the outdoors and help others do the same! Our platform gives users a space to rent and borrow gear so you can go on that camping trip without buying a brand new tent, or you can put those dusty water skis in the garage to good use without having to say goodbye.
          Keep the cobwebs away from your rarely used outdoor items.
          Keep your outdoor activity list growing without the expensive investments.
          It's possible with Outdoor Trading Co!</p>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342"><i className="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/outdoor-trading-co/"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com/NeedaMehmud2017/outdoor-trading-co"><i className="fa fa-github"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <p>710 Outdoor Trading Street <br></br>Atlanta, Georgia</p>
        </div>
        <div>
          <p> (123)456-7890</p>
        </div>
        <div>
          <p>outdoortrading@company.com</p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <div className="navbar-brand">
          <img src={logo} alt="Outdoor Trading Co. logo" />
        </div>
        <p className="menu">
          <p> Home |  About |  Services |  News |  Contact </p>
        </p>
        <p className="name"> Outdoor Trading Co. &copy; 2021</p>
      </div>
    </footer >
  );
}

export default Footer;
