import "../style/Hero.css";
import Jumbotron from "bootstrap";

function Hero() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container hero-text">
        <div class="card col-lg-4">
          <div class="card-body m-3">
            <h2>Outside. Together.</h2>
            <p>
              Here is some placeholder text. I didn't know what to write. I've
              been living off energy drinks.
            </p>
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
