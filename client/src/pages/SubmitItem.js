import React from 'react';
import {Redirect} from 'react-router-dom';
import HeroCardless from "../components/HeroCardless";
import Iconbar from "../components/Iconbar";
import SubmitItemForm from "../components/SubmitItemForm"
import Auth from '../utils/auth';

function SubmitItem() {
    if(!Auth.loggedIn()){
        return <Redirect to="/SignUp" />;
    }
    return (
        <div>
         <HeroCardless />
<<<<<<< HEAD
            <main>
            <SubmitItemForm />
            </main>
=======
         <Iconbar />
         <SubmitItemForm />
>>>>>>> bab364ee874f473a5dbaa2236ab1a9438d884d99
        </div>
    );
};

export default SubmitItem;