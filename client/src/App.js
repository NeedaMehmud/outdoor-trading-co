import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dashboard from '../src/components/Dashboard/Dashboard';
import Login from '../src/components/Login/Login';
// import Preferences from '../src/components/Prefrences/Prefrences';
import '../src/';
import Home from './pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./style/Reset.css";
import "./style/Index.css";
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
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (

    <ApolloProvider client={client}>
      <div>
        <Home />
      </div>
      {/* <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter> */}
        <Nav />
        <Hero />
        <Iconbar />
        <Main />
        <Newsletter />
        <Footer />
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;