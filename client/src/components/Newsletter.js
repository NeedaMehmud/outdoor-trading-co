import React from "react";
import "../style/Newsletter.css";

function Newsletter() {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col form-img"></div>
        <div className="col-lg-4 p-5 form">
          <h3 className="text-center">Sign up for our newsletter</h3>
          <p className="text-center">
            Get the latest updates from our team and the latest products from
            our partners.
          </p>
          <div className="m-1">
            <label for="exampleFormControlInput1" className="form-label">
              <b>Name</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Bear Grylls"
            />
          </div>
          <div className="m-1">
            <label for="exampleFormControlInput2" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div className="m-1">
            <button type="submit" className="news-btn">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
