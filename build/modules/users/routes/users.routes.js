"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var usersRouter = (0, express_1.Router)();
var usersController = new UsersController_1.default();
usersRouter.get('/', isAuthenticated_1.default, usersController.index);
usersRouter.get('/show/:id', isAuthenticated_1.default, usersController.show);
usersRouter.post('/create', 
//isAuthenticated,
(0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        user: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        ativo: celebrate_1.Joi.boolean().required(),
        notas: celebrate_1.Joi.boolean().required(),
        fornecedores: celebrate_1.Joi.boolean().required(),
        destinos: celebrate_1.Joi.boolean().required(),
        tiponota: celebrate_1.Joi.boolean().required(),
        formapagamento: celebrate_1.Joi.boolean().required(),
        usuarios: celebrate_1.Joi.boolean().required(),
        lojas: celebrate_1.Joi.boolean().required(),
        podeEditar: celebrate_1.Joi.boolean().required(),
        admin: celebrate_1.Joi.boolean().required(),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _a)), usersController.create);
usersRouter.patch('/update/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        user: celebrate_1.Joi.string().required(),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        ativo: celebrate_1.Joi.boolean().required(),
        notas: celebrate_1.Joi.boolean().required(),
        fornecedores: celebrate_1.Joi.boolean().required(),
        destinos: celebrate_1.Joi.boolean().required(),
        tiponota: celebrate_1.Joi.boolean().required(),
        formapagamento: celebrate_1.Joi.boolean().required(),
        usuarios: celebrate_1.Joi.boolean().required(),
        lojas: celebrate_1.Joi.boolean().required(),
        podeEditar: celebrate_1.Joi.boolean().required(),
        admin: celebrate_1.Joi.boolean().required(),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _b)), usersController.update);
usersRouter.patch('/inativarAtivarUser', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        id: celebrate_1.Joi.string().uuid().required(),
        ativo: celebrate_1.Joi.boolean().required(),
        usuario_update: celebrate_1.Joi.string().required(),
    },
    _c)), usersController.inativarAtivarUser);
usersRouter.delete('/delete/:id', isAuthenticated_1.default, usersController.delete);
exports.default = usersRouter;
