const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    users: [User!]
    user: User
  }

  input signupInput {
    username: String!
    email: String!
    password: String!
  }

  extend type Mutation {
    signup(input: signupInput): User
    login(input: loginInput): User
  }

  input loginInput {
    email: String!
    password: String!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post!]
    token: String
    createdAt: String!
    updatedAt: String!
  }
`;
