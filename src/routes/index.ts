import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
  console.log(req.params);
  return res.status(200).send('Hello World!');
});

export default router;
