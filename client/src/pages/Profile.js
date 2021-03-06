import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Image } from "cloudinary-react";
import Hero from "../components/Hero";
import Iconbar from "../components/Iconbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../style/Profile.css";
import Auth from "../utils/auth";

const Profile = () => {
  // query the current user logged in and return their user info
  const { loading, data } = useQuery(QUERY_ME);

  // if no data return an empty object
  const user = data?.me || {};

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  // redirect to sign up page if user is not logged in
  if (!Auth.loggedIn()) {
    return <Redirect to="/SignUp" />;
  }

  return (
    <div>
      <Hero />
      <Iconbar />
      <main>
        <div className="btnContainer">
          <h1 className="itemTitle">MY ITEMS</h1>
          <Link to="/SubmitItem">
            <button className="submit-btn"> + Add Item</button>
          </Link>
        </div>
        <div class="container">
          <div className="container">
            {/* dynamic function allowing the items that the user has posted to render on their profile */}
            {user.item.map((item) => (
              <Card
                className="card"
                style={{ width: "25rem", height: "30rem" }}
                key={item._id}
              >
                <Image
                  style={{ width: "25rem", height: "25rem" }}
                  variant="top"
                  className="img-fluid"
                  alt="Product image."
                  cloudName="outdoor-trading-co"
                  publicId={item.image_id}
                />
                <Card.Body class="title-body">
                  <Card.Title class="card-title text-center title">
                    {item.name}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Location: {item.location}</ListGroupItem>
                  <ListGroupItem>Condition: {item.condition}</ListGroupItem>
                </ListGroup>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
