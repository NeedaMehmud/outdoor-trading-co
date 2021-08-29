import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Image } from 'cloudinary-react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_ITEM } from '../utils/queries';

function SingleItem() {
    const { itemId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
        variables: { itemId: itemId}
    });

    const item = data?.item || {};

    return (
        <div>
         <Hero />
         <p>{item.name}</p>
         <p>{item.location}</p>
         <p>{item.condition}</p>
         <p>{item.description}</p>
         <p>{item.user}</p>
         <Image cloudName="outdoor-trading-co" publicId={item.image_id}></Image>
        </div>
    );
};

export default SingleItem;