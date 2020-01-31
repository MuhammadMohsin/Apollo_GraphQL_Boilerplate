const { gql } = require("apollo-server");

const bookType = gql`
  type Book {
    id: String,
    title: String
    author: String
  }
`;

module.exports = {
  bookType,
};