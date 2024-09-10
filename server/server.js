// server.js
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './schema/typeDefs.js'; // Note the .js extension is required in ESM
import resolvers from './schema/resolvers.js';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/charityDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware to Express app
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
