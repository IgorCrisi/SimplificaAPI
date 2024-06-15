"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var celebrate_1 = require("celebrate");
var routes_1 = __importDefault(require("./routes"));
var AppError_1 = __importDefault(require("../errors/AppError"));
require("../typeorm");
var upload_1 = __importDefault(require("../../config/upload"));
require("../container");
var app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//app.use(rateLimiter);
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});
