import express from 'express';

import { todoController } from '../../controllers';

const router = express.Router();

router.get('', todoController.getTodos);
router.post('/create', todoController.createTodo);
router.put('/update', todoController.updateTodo);

export default router;
