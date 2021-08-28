import React from 'react';
import Nav from "../components/Nav";
import HeroCardless from "../components/HeroCardless";
import SignUpForm from "../components/SignUpForm"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function SignUp() {
    return (
        <div>
         <Nav />
         <HeroCardless />
         <SignUpForm />
         <Newsletter />
         <Footer />
        </div>
    );
};

export default SignUp;