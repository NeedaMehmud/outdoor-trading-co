import React from "react";
import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Login from "../components/Login";
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <Navbar className="navbar sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            {" "}
            <img src={logo} alt="Logo" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Search
          </button>
          </form>
          <div>
            {Auth.loggedIn() ? ( 
              <>
              <Link className="btn btn-lg btn-info m-2 d-grid gap-2 d-md-flex justify-content-sm-end" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
            ) : (
              <>
          <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
            {this.state.clicked ? <Login /> : <button onClick={this.handleClick} type="submit" className="btn btn-secondary">Login</button>}
          </div>
            </>
          )}
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Nav;

