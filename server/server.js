import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import { appconfig } from './config/config.js'; // Named import
import path from 'path';

const config = appconfig; // Destructure the config object
// Load environment variables
dotenv.config();
console.log('MONGODB_URI:', config.db);  // Debug: Check if URI is being loaded

const PORT = config.port || 4000;
const app = express();

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('MONGODB_URI_RENDER:', process.env.MONGODB_URI_RENDER);

// Connect to MongoDB using the config file
mongoose.connect(process.env.MONGODB_URI_RENDER || config.db.localURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV.includes('production')) {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  await server.start();
  const middleware = expressMiddleware(server);
  app.use('/graphql', middleware);
  const httpServer = http.createServer(app);
 
  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`Server listening on port ${PORT}`);
};

startServer();
