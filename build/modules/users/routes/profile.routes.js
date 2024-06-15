"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var profileRouter = (0, express_1.Router)();
var profileController = new ProfileController_1.default();
profileRouter.use(isAuthenticated_1.default);
profileRouter.get('/', profileController.show);
profileRouter.patch('/update', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        usuario: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().allow(null, ''),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _a)), profileController.update);
exports.default = profileRouter;
