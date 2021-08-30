import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SubmitItemForm from "../components/SubmitItemForm"
import Main from "../components/Main"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


function SubmitItem() {
    return (
        <main>
            <div>
            <Hero />
            <SubmitItemForm />
            </div>
        </main>
    );
};

export default SubmitItem;