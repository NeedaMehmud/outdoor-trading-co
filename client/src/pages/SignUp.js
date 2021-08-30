import React from 'react';
import HeroCardless from "../components/HeroCardless";
import SignUpForm from "../components/SignUpForm";
import "../style/Signup.css";


function SignUp() {
    return (
        <main>
            <div>
                <HeroCardless />
                <SignUpForm />
            </div>
        </main>
    );
};

export default SignUp;