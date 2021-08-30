import React, { useEffect } from "react";
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

import { QUERY_SINGLE_ITEM, QUERY_USER } from "../utils/queries";
import categoryImg from "../assets/images/category.png";
import "../style/Item.css";

function SingleItem() {
  const { itemId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
    variables: { itemId: itemId },
  });

  const item = data?.item || {}; 

  console.log(item.user);
  console.log(typeof item.user)
  

  
  const { isIdle, data2 } = useQuery(QUERY_USER, {
    variables: {username: item.user}, enabled: !!item.user
  })

  const user = data2?.user || {};

  console.log(user.email);
  console.log(user);

  

  return (
    <main>
      <div>
        <Hero />
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-5 p-3" key={item._id}>
              <Image variant="top" cloudName="outdoor-trading-co" className="img-fluid" alt="Product image." publicId={item.image_id}/>
            </div>   
              <div className="col-lg-7 p-3">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">{item.name}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              <ul className="list-group list-group-flush p-3">
                  <li className="list-group-item"><h4>Condition:</h4> {item.condition}</li>
                  <li className="list-group-item"><h4>Location: </h4> {item.location}</li>
              </ul>
              <button type="submit" className="request-btn">{user.email}</button>
              </div>
          </div>
        </div>
      </div>
    </main>
    );
};

export default SingleItem;