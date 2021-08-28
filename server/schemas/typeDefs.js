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

  input ItemInput {
    genre: String
    name: String
    location: String
    condition: String
    description: String
    image_id: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    items(username: String): [Item]
    genreItems(genre: String!): [Item]
    item(itemId: ID!): Item
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(itemInput: ItemInput!): Item
    removeItem (itemId: ID!): Item
  }
`;

module.exports = typeDefs;
