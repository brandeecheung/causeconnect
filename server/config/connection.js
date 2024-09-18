const mongoose = require('mongoose');
const config = require('./config'); // Adjust the path if necessary

// Choose the appropriate database URI based on the environment
const dbURI = process.env.NODE_ENV === 'production'
  ? config.db.productionURI
  : config.db.localURI;

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
