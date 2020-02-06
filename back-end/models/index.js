const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/wayfarer';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected successfully...!'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  User: require('./User'),
  City: require('./City'),
  Post: require('./Post'),
};
