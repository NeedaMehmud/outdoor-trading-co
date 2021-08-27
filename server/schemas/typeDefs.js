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

  type Query {
    users: [User]
    user(userId: ID!): User
    items(username: String): [Item]
    genreItems(genre: String!): [Item]
    item(itemId: ID!): Item
    me: User
  }
`;

module.exports = typeDefs;

// type Mutation {
//   submitItem (name: String!, genre: String!, location: String!, condition: String!, description: String): Item
//   removeItem (_id: ID!): Item
// addUser(username: String!, email: String!, password: String!): Auth
// login(email: String!, password: String!): Auth
// }

// type Auth {
//   token: ID!
//   user: User
// }