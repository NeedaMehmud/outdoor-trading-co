import React from 'react';
import HeroCardless from "../components/HeroCardless";
import SignUpForm from "../components/SignUpForm";
import "../style/Signup.css";


function SignUp() {
    return (
            <div>
                <HeroCardless />
                <main>
                    <SignUpForm />
                </main>
            </div>
    );
};

export default SignUp;