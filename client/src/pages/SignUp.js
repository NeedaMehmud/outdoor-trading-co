import React from 'react';
import HeroCardless from "../components/HeroCardless";
import SignUpForm from "../components/SignUpForm";
import "../style/Signup.css";


function SignUp() {
    return (
        <div>
            <HeroCardless />
            <div className="container p-3">
                <div className="row">
                    <div className="col p-3">
                <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;