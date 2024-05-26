import express from 'express';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('CREATE_TODO START: ', req.body);

  try {
    //
  } catch (error) {
    console.log('CREATE_TODO ERROR: ', error);
    return res.status(500).json({ message: 'Something wenth wrong!' });
  }

  return res.status(200).json({ message: 'Success' });
});

export default router;
