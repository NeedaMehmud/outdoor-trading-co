import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./style/Reset.css";
import "./style/Index.css";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Nav />
        <Hero />
        <Main />
        <Newsletter />
        <Footer />
        <Login />
        <Signup />
      </div>
    </ApolloProvider>
  );
}

export default App;
