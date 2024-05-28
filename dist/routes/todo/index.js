"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
router.get('', controllers_1.todoController.getTodos);
router.post('/create', controllers_1.todoController.createTodo);
router.put('/update', controllers_1.todoController.updateTodo);
router.delete('/remove', controllers_1.todoController.removeTodo);
exports.default = router;
