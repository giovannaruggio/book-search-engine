const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }
    type Book {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!
    }
    type Auth {
        token: ID!
        user: User
    }
    input BookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        link: String
        image: String
    }
    type Query {
        users: [User]
        user(id: ID!): User
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        saveBook (
            bookToSave: BookInput!): User
            removeBook(bookId: String): User
        )
    }
`;

module.exports = typeDefs;