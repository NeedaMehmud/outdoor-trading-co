import React from 'react';
import {Redirect} from 'react-router-dom';
import HeroCardless from "../components/HeroCardless";
import SubmitItemForm from "../components/SubmitItemForm"
import Auth from '../utils/auth';

function SubmitItem() {
    if(!Auth.loggedIn()){
        return <Redirect to="/SignUp" />;
    }
    return (
<<<<<<< HEAD
            <div>
                <Hero />
                <main>
                    <SubmitItemForm />
                </main>
            </div>
=======
        <div>
         <HeroCardless />
         <SubmitItemForm />
        </div>
>>>>>>> 6f9722eb18b27333e8b9ab424b7bbc751afcd14e
    );
};

export default SubmitItem;