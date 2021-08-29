const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    item: [Item]
  }

  type Item {
    _id: ID!
    genre: String!
    name: String!
    location: String!
    condition: String!
    description: String
    image_id: String!
    created_at: String
    user: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    items(username: String): [Item]
    genreItems(genre: String!): [Item]
    item(itemId: ID!): Item
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(name: String!, genre: String!, location: String!, condition: String!, description: String, image_id: String!): Item
    removeItem (itemId: ID!): Item
  }
`;

module.exports = typeDefs;
