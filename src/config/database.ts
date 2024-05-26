import mongoose from 'mongoose';

const MONGODBURI_DEFAULT =
  'mongodb+srv://romelbonnie:lOgecwpahWMEaqmg@cluster0.5zezkci.mongodb.net/geodude?retryWrites=true&w=majority&appName=Cluster0';
const mongodbUri = process.env.MONGODB_URI || MONGODBURI_DEFAULT;

const dbconnect = () => {
  mongoose
    .connect(mongodbUri)
    .then(() => console.log('DB connection successfull!'))
    .catch((e) => console.log('DB connection error: ', e));
};

export { dbconnect };
