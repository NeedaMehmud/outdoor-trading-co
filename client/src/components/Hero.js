import "../style/Hero.css";
import Jumbotron from "bootstrap";
import SignUp from "../components/Signup";


function Hero() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container hero-text">
        <div class="card col-lg-4">
          <div class="card-body m-3">
            <h2>Outside. Together.</h2>
            <p>
              Grow your love of the outdoors by borrowing equipment for a variety of outdoor activities. No commitment. No lugging gear to your destination. Nothing collecting dirt in your garage.
            </p>
            <br></br>
            <button type="button" class="btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
