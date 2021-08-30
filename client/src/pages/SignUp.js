import React from 'react';
import Hero from "../components/Hero";
import SignUpForm from "../components/SignUpForm";
import "../style/Signup.css";


function SignUp() {
    return (
        <div>
            <Hero />
            <main>
                <SignUpForm />
            </main>
        </div>
    );
};

export default SignUp;