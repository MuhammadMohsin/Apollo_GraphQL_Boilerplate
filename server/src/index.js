const express = require('express');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require("cors");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const {
  graphqlExpress,
  graphiqlExpress
} = require('apollo-server-express');

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();
const PORT = 5000;

app.use(cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(PORT, () => {
  console.log('Server is running at PORT: ', PORT);
});