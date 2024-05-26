import express from 'express';

import { todoController } from '../../controllers';

const router = express.Router();

router.post('/create', todoController.createTodo);
router.get('', todoController.getTodos);

export default router;
