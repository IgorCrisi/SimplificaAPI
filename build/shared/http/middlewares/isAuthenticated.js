"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("../../errors/AppError"));
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../../../config/auth"));
function isAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token não informado');
    }
    var _a = authHeader.split(' '), type = _a[0], token = _a[1];
    try {
        var decodedToken = (0, jsonwebtoken_1.verify)(token, auth_1.default.jwt.secret);
        var sub = decodedToken.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (_b) {
        throw new AppError_1.default('Token inválido');
    }
}
exports.default = isAuthenticated;
