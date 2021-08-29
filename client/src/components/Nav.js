import React from "react";
import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Login from "../components/Login";
import DropdownMenu from "../components/DropdownMenu"
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

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
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
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
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2 d-grid gap-2 d-md-flex justify-content-sm-end" to="/me">
                  {Auth.getProfile().data.username}'s profile
              </Link>
                <button className="login-btn" onClick={logout}>
                  Logout
              </button>
              </>
            ) : (
              <>
                <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
                  {this.state.clicked ? <Login /> : <button onClick={this.handleClick} type="submit" className="login-btn">Login</button>}
                </div>
              </>
            )}
          </div>
        </div>
      </Navbar>
    );
  }
};

export default Nav;

