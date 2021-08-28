import React from "react";
import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Login from "../components/Login";
import DropdownMenu from "../components/DropdownMenu"

class Nav extends React.Component {
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
      <Navbar class="navbar sticky-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            {" "}
            <img src={logo} alt="Logo" />
          </a>
          <form class="d-flex">
            {<DropdownMenu />}

          </form>
          <div class="d-grid gap-2 d-md-flex justify-content-sm-end">
            {this.state.clicked ? <Login /> : <button onClick={this.handleClick} type="submit" className="btn btn-secondary" data-toggle="modal">Sign In</button>}
          </div>
        </div>
      </Navbar>
    );
  }
};

export default Nav;
