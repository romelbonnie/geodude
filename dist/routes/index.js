"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./todo"));
exports.todoRouter = todo_1.default;
const homeRouter = express_1.default.Router();
exports.homeRouter = homeRouter;
homeRouter.get('', (req, res) => {
    console.log(req.params);
    return res.status(200).send('Geodude!');
});
