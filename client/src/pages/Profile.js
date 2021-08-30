import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries'
import { Image } from 'cloudinary-react';
import HeroCardless from "../components/HeroCardless";
import Auth from '../utils/auth';

const Profile = () => {
    
    const { loading, data } = useQuery(QUERY_ME);
    
    const user = data?.me || {};

    console.log(user);
    
    if (loading) {
        return <div>Loading...</div>;
    };

    if(!Auth.loggedIn()){
        return <Redirect to="/SignUp" />;
    };

    return (
        <div>
<<<<<<< HEAD
         <Hero />
            <main>
                {user.item.map(item => (
                    <div>
                    <div>{item.name}</div>
                    <p>{item.image_id}</p>
                    <Image cloudName="outdoor-trading-co" publicId={item.image_id}></Image>
                    </div>
                ))}
            </main>
=======
         <HeroCardless />
         {user.item.map(item => (
             <div>
             <div>{item.name}</div>
             <p>{item.image_id}</p>
             <Image cloudName="outdoor-trading-co" publicId={item.image_id}></Image>
             </div>
         ))}
>>>>>>> 6f9722eb18b27333e8b9ab424b7bbc751afcd14e
        </div>
    );
};

export default Profile;