import express from 'express';

import todoRouter from './todo';
import spreadsheetRouter from './spreadsheet';

const homeRouter = express.Router();

homeRouter.get('', (req, res) => {
  console.log(req.params);
  return res.status(200).send('Geodude!');
});

export { homeRouter, todoRouter, spreadsheetRouter };
