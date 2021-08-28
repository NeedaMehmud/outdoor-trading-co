import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($name: String!, $genre: String!, $location: String!, $condition: String!, $description: String, $image_id: String!) {
    addItem(name: $name, genre: $genre, location: $location, condition: $condition, description: $description, image_id: $image_id) {
      _id
      name
      genre
      location
      condition
      description
      image_id
      created_at
      user
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
    removeBook(itemId: $itemId) {
      _id
      name
      genre
      location
      condition
      description
      image_id
      created_at
      user
      }
    }
`;
