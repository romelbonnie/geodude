import express from 'express';

import { spreadsheetController } from '../../controllers';

const router = express.Router();

router.get('', spreadsheetController.getSpreadSheet);

export default router;
