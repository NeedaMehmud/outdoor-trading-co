import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container p-5">
        <div class="row p-3">
          <h3>Contact Us</h3>
          <div class="col-3 sm-2">
            <p>Phone Number</p>
            <p>Street Name</p>
            <p>Rest of Address</p>
          </div>
          <div class="col-3 sm-2">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
          <div class="col-6 lg-1">
            {" "}
            <p>Insert SM Icons Here</p>
          </div>
        </div>
      </div>
      <div class="text-center p-3 copyright">
        <p>Copyright 2021 Outdoor Trading Co.</p>
      </div>
    </footer>
  );
}

export default Footer;
