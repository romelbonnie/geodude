import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongodbUri = process.env.MONGODB_URI || null;

const dbconnect = () => {
  if (mongodbUri) {
    mongoose
      .connect(mongodbUri, { dbName: 'ballyboy-staging' })
      .then(() => console.log('DB connection successfull!'))
      .catch((e) => console.log('DB connection error: ', e));
  }

  return null;
};

export { dbconnect };
