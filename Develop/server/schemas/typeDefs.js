// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id:ID
    bookCount: Int
    email: String
    username: String
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String] 
    description: String
    title: String
    image: String 
    link: String
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: ID!): User
  }
  
type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
  }

`;

// export the typeDefs
module.exports = typeDefs;