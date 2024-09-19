import {config} from 'dotenv'; // Load environment variables from .env file
config(); // Execute the function
export const appconfig = {
  db: {
    localURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/charityDB',
    productionURI: process.env.MONGODB_URI_RENDER
  },
  port: process.env.PORT || 4000
};
