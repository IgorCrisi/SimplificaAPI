"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var TipoNotaController_1 = __importDefault(require("../controllers/TipoNotaController"));
var tipoRouter = (0, express_1.Router)();
var tipoController = new TipoNotaController_1.default();
tipoRouter.get('/', isAuthenticated_1.default, tipoController.index);
tipoRouter.get('/listByLoja/:id', isAuthenticated_1.default, tipoController.listByLoja);
tipoRouter.get('/:id', isAuthenticated_1.default, tipoController.show);
tipoRouter.post('/create', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _a)), tipoController.create);
tipoRouter.patch('/update/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _b)), tipoController.update);
tipoRouter.delete('/delete/:id', isAuthenticated_1.default, tipoController.delete);
exports.default = tipoRouter;
