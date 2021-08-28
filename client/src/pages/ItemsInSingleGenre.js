import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ItemsInSingleGenre() {
    return (
        <div>
         <Nav />
         <Hero />
         <Main />
         <Newsletter />
         <Footer />
        </div>
    );
};

export default ItemsInSingleGenre;