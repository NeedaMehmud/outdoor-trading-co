import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Iconbar from "../components/Iconbar";
import { useQuery } from "@apollo/client";
import { QUERY_GENRE_ITEMS } from "../utils/queries";
import { Image } from "cloudinary-react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../style/SingleGenre.css";
import Auth from "../utils/auth";

function ItemsInSingleGenre(props) {
  console.log(props.genre);

  // query items based on the genre that the user clicked to view (passed down as prop)
  const { loading, error, data } = useQuery(QUERY_GENRE_ITEMS, {
    variables: {
      genre: props.genre,
    },
  });

  // if no data then return an empty array
  const items = data?.genreItems || [];

  console.log(items);

  if (loading) {
    return <div>Loading...</div>;
  }

// if the user is not logged in then redirect to sign up page
  if (!Auth.loggedIn()) {
    return <Redirect to="/SignUp" />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <Hero />
      <Iconbar />
      <main>
      <div className="container">
        {/* dynamic function allowing cards to be rendered for each item */}
        {items.map((item) => (
          <Card
            className="card"
            style={{ width: "25rem", height: "40rem" }}
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
            <Card.Body>
              <Card.Title class="card-title text-center title">
                {item.name}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Location: {item.location}</ListGroupItem>
              <ListGroupItem>Condition: {item.condition}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to={`/${item._id}`}>
                <button type="submit" className="request-btn">
                  More Information
                </button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <br></br>
      </main>
    </div>
  );
}

export default ItemsInSingleGenre;
