import React from "react";
import "../style/Hero.css";
import Jumbotron from "bootstrap";
import SignUp from "../components/Signup";


class Hero extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container hero-text">
          <div className="card col-lg-4">
            <div className="card-body m-3">
              <h2>Outside. Together.</h2>
              <br></br>
              <p>
                Grow your love of the outdoors by borrowing equipment for a variety of outdoor activities. No commitment. No lugging gear to your destination. Nothing collecting dirt in your garage.
            </p>
            <br></br>
              {this.state.clicked ? <SignUp /> : <button onClick={this.handleClick} type="submit" className="btn btn-primary btn-block" data-toggle="modal">Sign Up</button>}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Hero;
