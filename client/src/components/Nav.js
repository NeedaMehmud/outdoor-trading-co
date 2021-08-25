import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";

function Nav() {
  return (
    <Navbar class="navbar sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          {" "}
          <img src={logo} alt="Logo" />
        </a>
        <form class="d-flex">
          <input
            class="form-control me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-secondary" type="submit">
            Search
          </button>
        </form>
        <a href="#">Sign In</a>
        {/* Login box. 
 <div class="login">
            <div class="login-triangle"></div>
            <form class="login-container">
              <div class="m-1">
                <label for="exampleFormControlInput1" class="form-label"><b class="text-black">Username</b></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="m-1">
                <label for="exampleFormControlInput2" class="form-label"><b class="text-black">Password</b></label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Password"/>
              </div>
              <div class="m-1">
                <button type="submit" class="btn btn-primary">Sign In</button>
              </div>
            </form>
        </div> */}
      </div>
    </Navbar>
  );
}

export default Nav;
