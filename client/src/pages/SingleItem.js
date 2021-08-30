import React from "react";
import {Redirect} from 'react-router-dom';
import Hero from "../components/Hero";
import Iconbar from "../components/Iconbar";
import { Image } from "cloudinary-react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_ITEM } from "../utils/queries";
import Auth from '../utils/auth';
import "../style/Item.css";

function SingleItem() {
  // uses useParams to get the correct item_id and queries the single item based on that itemid
  const { itemId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
    variables: { itemId: itemId },
  });

  const item = data?.item || {}; 
  
  if (loading) {
    return <div>Loading...</div>;
  };

  // if user is not logged in redirect to signup page
  if(!Auth.loggedIn()){
    return <Redirect to="/SignUp" />;
  };

  

  return (
    <div>
      <Hero />
      <Iconbar />
      <main>
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
              {/* on btn click opens user email and fills to field with email of the user who posted the item */}
              <button type="submit" onClick={() => window.open(`mailto:${item.email}`)} className="request-btn">Request This Item</button>
              </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default SingleItem;