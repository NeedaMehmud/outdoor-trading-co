import React from "react";
import {Redirect} from 'react-router-dom';
import HeroCardless from "../components/HeroCardless";
import { useQuery } from "@apollo/client";
import { QUERY_GENRE_ITEMS } from "../utils/queries";
import { Image } from "cloudinary-react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Auth from '../utils/auth';

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
    return <div>Loading...</div>;
  };

  if(!Auth.loggedIn()){
    return <Redirect to="/SignUp" />;
  };

  if (error) {
    console.log(error);
  };

  return (
    <div>
      <HeroCardless />
      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <Card style={{ width: "18rem", height: "40rem" }} key={item._id}>
            <Image
              variant="top"
              cloudName="outdoor-trading-co"
              publicId={item.image_id}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{item.location}</ListGroupItem>
              <ListGroupItem>{item.condition}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={item._id}>More Information</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ItemsInSingleGenre;
