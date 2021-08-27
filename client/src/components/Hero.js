import React from "react";
import "../style/Hero.css";
import Jumbotron from "bootstrap";

function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container hero-text">
        <div className="card col-lg-4">
          <div className="card-body m-3">
            <h2>Outside. Together.</h2>
            <p>
              Grow your love of the outdoors by borrowing equipment for a
              variety of outdoor activities. No commitment. No lugging gear to
              your destination. Nothing collecting dirt in your garage.
            </p>
            <button type="button" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
