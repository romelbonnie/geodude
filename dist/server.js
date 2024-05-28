"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const routes_1 = require("./routes");
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use((0, morgan_1.default)('dev'));
(0, database_1.dbconnect)();
const PORT = process.env.PORT || 5000;
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/', routes_1.homeRouter);
server.use('/todo', routes_1.todoRouter);
server.use((req, res) => {
    console.log(req.params);
    return res.status(404).send('<h3>Page not found!</h3>');
});
server.listen(PORT, () => {
    console.log(`Geodude API Running at PORT --> ${PORT}`);
});
