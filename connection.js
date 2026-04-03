// connection.js

const mongoose = require('mongoose');

// Replace 'mydb' with your database name
const DB_URL = 'mongodb://127.0.0.1:27017/mydb';

// Connect to MongoDB
mongoose.connect(DB_URL)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// Optional: listen to connection events
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('🔗 MongoDB connection is open');
});

module.exports = mongoose;