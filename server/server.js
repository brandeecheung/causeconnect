import process from 'process';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, })

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  await server.start();
  const middleware = expressMiddleware(server);
  app.use('/graphql', middleware);
  const httpServer = http.createServer(app);
 
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`Server listening on port 4000`);
};

startServer();

