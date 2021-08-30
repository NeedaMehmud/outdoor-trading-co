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
        <div>
         <HeroCardless />
         <SubmitItemForm />
        </div>
    );
};

export default SubmitItem;