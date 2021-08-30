import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_GENRE_ITEMS, QUERY_ITEMS } from "../utils/queries";
import { Image } from "cloudinary-react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../style/SingleGenre.css";

function ItemsInSingleGenre(props) {
  console.log(props.genre);

  const { loading, error, data } = useQuery(QUERY_GENRE_ITEMS, {
    variables: {
      genre: props.genre,
    },
  });
  const items = data?.genreItems || [];

  console.log(items);

  if (loading) {
    console.log("LOADING");
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <Hero />
      <br></br>
      <div className="container">
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
              <button type="submit" className="request-btn">
                More Information
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <br></br>
    </div>
  );
}

export default ItemsInSingleGenre;
