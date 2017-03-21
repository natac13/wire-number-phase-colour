import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

async function connectToDB(env, mongoURI) {
  if (env === 'development' || env === 'test') {
    // connect to a development/test database
    try {
      const connection = await mongoose.connect(`${mongoURI}`);
      console.log('Connected to the development Database');
      return connection;
    } catch (error) {
      console.log(error);
      return Promise.reject('Failed to connect to development DB');
    }
  } else if (env === 'production') {
    try {
      const connection = await mongoose.connect(mongoURI);
      console.log('Connected on production Database');
      return connection;
    } catch (error) {
      // should record error in production
      return Promise.reject('Failed to connect to mongoDB');
    }
  }
}

export default connectToDB;
