import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      item {
        _id
        genre
        name
        location
        description
        image_id
        created_at
      }
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      genre
      name
      location
      description
      image_id
      created_at
      user
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem($itemId: ID!) {
    item(itemId: $itemID) {
      _id
      genre
      name
      location
      description
      image_id
      created_at
      user
    }
  }
`;

export const QUERY_GENRE_ITEMS = gql`
  query getGenreItems($genre: String!) {
    genreItems(genre: $genre) {
      _id
      genre
      name
      location
      description
      image_id
      created_at
      user
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      item {
        _id
        genre
        name
        location
        description
        image_id
        created_at
      }
    }
  }
`;