import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./style/Reset.css";
import "./style/Index.css";
import Home from './pages/Home';
import Nav from './components/Nav'
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SingleItem from './pages/SingleItem';
import ItemsInSingleGenre from './pages/ItemsInSingleGenre';
import SubmitItem from './pages/SubmitItem';
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/me">
            <Profile />
          </Route>
          <Route exact path="/SubmitItem">
            <SubmitItem />
          </Route>
          <Route exact path="/Hiking">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/Climbing">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/Water">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/Misc">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/Snow">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/Camping">
            <ItemsInSingleGenre />
          </Route>
          <Route exact path="/:itemId">
            <SingleItem />
          </Route>
          </Switch>
        </Router>
      <Newsletter />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
