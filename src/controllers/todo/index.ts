import { Request, Response } from 'express';

import TodoModel from '../../models/todo.model';

const createTodo = async (req: Request, res: Response) => {
  console.log('CREATE_TODO START: ', req.body);
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ status: 400, message: 'Title is required' });
  }

  try {
    const newTodo = new TodoModel({ title, description, status: 0 });
    await newTodo.save();
  } catch (error) {
    console.log('CREATE_TODO ERROR: ', error);
    return res.status(500).json({ message: 'Something wenth wrong!' });
  }

  return res.status(200).json({ message: 'Success' });
};

export default { createTodo };
