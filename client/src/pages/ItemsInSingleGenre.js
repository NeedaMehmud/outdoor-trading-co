import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GENRE_ITEMS, QUERY_ITEMS } from '../utils/queries'
import { Image } from 'cloudinary-react';


function ItemsInSingleGenre(props) {
    console.log(props.genre);

    const {loading, error, data} = useQuery(QUERY_GENRE_ITEMS, {
        variables: {
            genre: props.genre
        }
    });
    const items = data?.genreItems || [];

    console.log(items);

    if(loading){
        console.log("LOADING")
    }
    if(error){
        console.log(error)
    }
    return (
        <div>
         <Hero />
         {items.map(item => (
             <div>
             <div>{item.name}</div>
             <p>{item.image_id}</p>
             <Image cloudName="outdoor-trading-co" publicId={item.image_id}></Image>
             </div>
         ))}
        </div>
    );
};

export default ItemsInSingleGenre;