"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongodbUri = process.env.MONGODB_URI || null;
const dbconnect = () => {
    if (mongodbUri) {
        mongoose_1.default
            .connect(mongodbUri)
            .then(() => console.log('DB connection successfull!'))
            .catch((e) => console.log('DB connection error: ', e));
    }
    return null;
};
exports.dbconnect = dbconnect;
