import React from "react";
import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

// toggle login component
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
  // remove auth for logout
  render() {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <Navbar className="navbar sticky-top">
        <div className="container">
          <a className="navbar-brand">
            <Link to={`/`}>
              {" "}
              <img src={logo} alt="Outdoor Trading Co. logo" />
            </Link>
          </a>
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="search-btn"
              type="submit"
              disabled="buttonDisabled"
            >
              Search
            </button>
          </form>
          <div>
            {/* if logged in, display profile info and logout button*/}
            {Auth.loggedIn() ? (
              <>
                <button className="profile-btn">
                  <Link to="/me" className="text-decoration-none text-white">
                    Welcome<div></div>
                    {Auth.getProfile().data.username}!
                  </Link>
                </button>
                <br></br>
                <br></br>
                <button className="login-btn" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
              {/* else display login */}
                <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
                  {this.state.clicked ? (
                    <Login />
                  ) : (
                    <button
                      onClick={this.handleClick}
                      type="submit"
                      className="login-btn"
                    >
                      Login
                    </button>
                  )}
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
