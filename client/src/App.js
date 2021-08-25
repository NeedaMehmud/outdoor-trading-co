import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./style/Reset.css";
import "./style/Index.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Iconbar from "./components/Iconbar";
import Main from "./components/Main";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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
        <Iconbar />
        <Main />
        <Newsletter />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
