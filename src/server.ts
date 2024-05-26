import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { dbconnect } from './config/database';
import { homeRouter, todoRouter } from './routes';

dotenv.config();
const server = express();

server.use(morgan('dev'));
dbconnect();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', homeRouter);
server.use('/todo', todoRouter);

server.use((req, res) => {
  console.log(req.params);
  return res.status(404).send('<h3>Page not found!</h3>');
});

server.listen(PORT, () => {
  console.log(`Geodude API Running at PORT --> ${PORT}`);
});
