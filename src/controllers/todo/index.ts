import { Request, Response } from 'express';

import TodoModel from '../../models/todo.model';

const getTodos = async (req: Request, res: Response) => {
  console.log('GET_TODOS START: ', req.body);
  try {
    const todos = await TodoModel.find({});
    return res.status(200).json({ status: 200, todos });
  } catch (error) {
    console.log('GET_TODOS ERROR: ', error);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};

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
    return res.status(500).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ status: 200, message: 'Todo created.' });
};

const updateTodo = async (req: Request, res: Response) => {
  console.log('UPDATE_TODO START: ', req.body);
  const { id, title, description } = req.body;

  if (!id) {
    return res.status(400).json({ status: 400, message: 'Invalid todo item!' });
  }

  try {
    await TodoModel.updateOne({ _id: id }, { title, description });
    console.log('Todo updated!');
  } catch (error) {
    console.log('UPDATE_TODO ERROR: ', error);
    return res.status(500).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ status: 200, message: 'Todo updated.' });
};

export default { getTodos, createTodo, updateTodo };
