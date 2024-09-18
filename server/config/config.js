import 'dotenv/config'; // Load environment variables from .env file

export const config = {
  db: {
    localURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/charityDB',
    productionURI: process.env.MONGODB_URI_RENDER
  },
  port: process.env.PORT || 4000
};
