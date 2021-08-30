import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Image } from "cloudinary-react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_ITEM } from "../utils/queries";

function SingleItem() {
  const { itemId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
    variables: { itemId: itemId },
  });

  const item = data?.item || {};

  return (
    <div>
      <Hero />
      <Card style={{ width: "18rem", height: "40rem" }} key={item._id}>
        <Image
          variant="top"
          cloudName="outdoor-trading-co"
          publicId={item.image_id}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{item.location}</ListGroupItem>
          <ListGroupItem>{item.condition}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Contact Seller</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleItem;
