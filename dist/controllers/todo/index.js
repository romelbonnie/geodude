"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../../models/todo.model"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('GET_TODOS START: ', req.body);
    try {
        const todos = yield todo_model_1.default.find({});
        return res.status(200).json({ status: 200, todos });
    }
    catch (error) {
        console.log('GET_TODOS ERROR: ', error);
        return res.status(500).json({ message: 'Something went wrong!' });
    }
});
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('CREATE_TODO START: ', req.body);
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ status: 400, message: 'Title is required' });
    }
    try {
        const newTodo = new todo_model_1.default({ title, description, status: 0 });
        yield newTodo.save();
    }
    catch (error) {
        console.log('CREATE_TODO ERROR: ', error);
        return res.status(500).json({ message: 'Something went wrong!' });
    }
    return res.status(200).json({ status: 200, message: 'Todo created.' });
});
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('UPDATE_TODO START: ', req.body);
    const { id, title, description } = req.body;
    if (!id) {
        return res.status(400).json({ status: 400, message: 'Invalid todo item!' });
    }
    try {
        yield todo_model_1.default.updateOne({ _id: id }, { title, description });
        console.log('Todo updated!');
    }
    catch (error) {
        console.log('UPDATE_TODO ERROR: ', error);
        return res.status(500).json({ message: 'Something went wrong!' });
    }
    return res.status(200).json({ status: 200, message: 'Todo updated.' });
});
const removeTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('REMOVE_TODO START: ', req.body);
    const { id } = req.body;
    try {
        yield todo_model_1.default.deleteOne({ _id: id });
        console.log('Todo deleted.');
    }
    catch (error) {
        console.log('REMOVE_TODO ERROR: ', error);
        return res.status(500).json({ message: 'Something went wrong!' });
    }
    return res.status(200).json({ status: 200, message: 'Todo removed.' });
});
exports.default = { getTodos, createTodo, updateTodo, removeTodo };
