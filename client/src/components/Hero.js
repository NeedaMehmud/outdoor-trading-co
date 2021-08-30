import React from "react";
import "../style/Hero.css";
import SignUp from "../components/Signup";
import Auth from "../utils/auth";
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
    if (Auth.loggedIn()) {
      return (
        <div className="jumbotron jumbotron-fluid">
        </div>
      );
    }
    
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container hero-text">
          <div className="card col-lg-5">
            <div className="card-body m-3">
              <h2>Outside. Together.</h2>
              <p>
                Grow your love of the outdoors by borrowing equipment for a variety of outdoor activities. No commitment. No lugging gear to your destination. Nothing collecting dirt in your garage.
            </p>
              {this.state.clicked ? <SignUp /> : <button onClick={this.handleClick} type="submit" className="signup">Sign Up</button>}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Hero;
