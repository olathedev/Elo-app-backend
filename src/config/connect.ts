import mongoose, { MongooseError } from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.MONGO_URI || '';

const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Database connected 🚀');
  } catch (error) {
    // console.log('Error connecting to MongoDB:', error);
    if (error instanceof MongooseError) {
      console.log('Mongoose connect error: ', error.message);
      setTimeout(() => {
        console.log('Retrying connection...');
        connectDatabase();
      }, 3000);
    } else {
      console.log('Error', error);
    }
  }
};

export default connectDatabase
