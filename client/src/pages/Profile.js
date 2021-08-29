import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries'
import { Image } from 'cloudinary-react';
import Hero from "../components/Hero";
import Auth from '../utils/auth';

const Profile = () => {
    
    const { loading, data } = useQuery(QUERY_ME);
    
    const user = data?.me || {};

    console.log(user);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
         <Hero />
         {user.item.map(item => (
             <div>
             <div>{item.name}</div>
             <p>{item.image_id}</p>
             <Image cloudName="outdoor-trading-co" publicId={item.image_id}></Image>
             </div>
         ))}
        </div>
    );
};

export default Profile;