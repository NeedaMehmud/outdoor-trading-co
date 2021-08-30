import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container p-5">
        <div className="row">
          <p class="about">
            <h1> About Outdoor Trading Co.</h1>
            <p>Use our platform to rent/borrow outdoor gear and enjoy the outdoors.
            You can list your outdoor equipment up for rent/loan during the times you are unable to use it.
            Keep your equipment from gaining dust in the garage.
            Keep your outdoor activity list growing without the investments in outdoor equipment. </p>
          </p>
          <div class="icons">
            <a href="https://www.facebook.com/Outdoor-Trading-Co-100466249039342"><i class="fa fa-facebook"></i></a>
            <a href="https:twitter.com/"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/outdoor-trading-co/"><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/NeedaMehmud2017/outdoor-trading-co"><i class="fa fa-github"></i></a>
            <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
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
