"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var LojaController_1 = __importDefault(require("../controllers/LojaController"));
var lojaRouter = (0, express_1.Router)();
var lojaController = new LojaController_1.default();
lojaRouter.get('/', isAuthenticated_1.default, lojaController.index);
lojaRouter.get('/:id', isAuthenticated_1.default, lojaController.show);
lojaRouter.post('/create', 
//isAuthenticated,
(0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _a)), lojaController.create);
lojaRouter.patch('/update/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _b)), lojaController.update);
lojaRouter.delete('/delete/:id', isAuthenticated_1.default, lojaController.delete);
exports.default = lojaRouter;
