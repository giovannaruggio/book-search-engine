const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        saveBook(bookToSave: BookInput!): User
        removeBook(bookId: ID!): User
    }
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID!
        authors: [String]!
        description: String!
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    input BookInput {
        bookId: String!
        authors: [String]!
        description: String!
        title: String!
        image: String
        link: String
    }
`;

module.exports = typeDefs;