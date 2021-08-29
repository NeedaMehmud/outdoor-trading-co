import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
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

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
            <ItemsInSingleGenre genre={"Hiking"}/>
          </Route>
          <Route exact path="/Climbing">
            <ItemsInSingleGenre genre={"Climbing"}/>
          </Route>
          <Route exact path="/Water">
            <ItemsInSingleGenre genre={"Water"}/>
          </Route>
          <Route exact path="/Misc">
            <ItemsInSingleGenre genre={"Misc"}/>
          </Route>
          <Route exact path="/Snow">
            <ItemsInSingleGenre genre={"Snow"}/>
          </Route>
          <Route exact path="/Camping">
            <ItemsInSingleGenre genre={"Camping"}/>
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
