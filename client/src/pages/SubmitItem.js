import React from 'react';
import {Redirect} from 'react-router-dom';
import Hero from "../components/Hero";
import Iconbar from "../components/Iconbar";
import SubmitItemForm from "../components/SubmitItemForm"
import Auth from '../utils/auth';

{/* Form to submit a new item - for the profile page */}
function SubmitItem() {
    if(!Auth.loggedIn()){
        return <Redirect to="/SignUp" />;
    }
    return (
        <div>
         <Hero />
         <Iconbar />
         <main>
            <SubmitItemForm />
         </main>
        </div>
    );
};

export default SubmitItem;