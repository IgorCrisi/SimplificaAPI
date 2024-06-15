"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ResetPasswordController_1 = __importDefault(require("../controllers/ResetPasswordController"));
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var passwordRouter = (0, express_1.Router)();
var resetPassworController = new ResetPasswordController_1.default();
passwordRouter.use(isAuthenticated_1.default);
passwordRouter.post('/reset', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        id: celebrate_1.Joi.string().uuid().required(),
        password: celebrate_1.Joi.string().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _a)), resetPassworController.create);
exports.default = passwordRouter;
