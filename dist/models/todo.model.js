"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: Number },
}, { timestamps: true });
const Todos = mongoose_1.default.model('Todos', schema);
exports.default = Todos;
