"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var FornecedorController_1 = __importDefault(require("../controllers/FornecedorController"));
var fornecedorRouter = (0, express_1.Router)();
var fornecedorController = new FornecedorController_1.default();
fornecedorRouter.get('/', isAuthenticated_1.default, fornecedorController.index);
fornecedorRouter.get('/:id', isAuthenticated_1.default, fornecedorController.show);
fornecedorRouter.get('/listByLoja/:id', isAuthenticated_1.default, fornecedorController.listFornecedorByLoja);
fornecedorRouter.post('/create', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        cnpj: celebrate_1.Joi.string().required(),
        razao: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().allow(null, ''),
        contato: celebrate_1.Joi.string().allow(null, ''),
        tipoNota: celebrate_1.Joi.string().uuid().allow(null, ''),
        destino: celebrate_1.Joi.string().uuid().allow(null, ''),
        formaPagamento: celebrate_1.Joi.string().uuid().allow(null, ''),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required()
    },
    _a)), fornecedorController.create);
fornecedorRouter.patch('/update/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        cnpj: celebrate_1.Joi.string().required(),
        razao: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().allow(null, ''),
        contato: celebrate_1.Joi.string().allow(null, ''),
        tipoNota: celebrate_1.Joi.string().uuid().allow(null, ''),
        destino: celebrate_1.Joi.string().uuid().allow(null, ''),
        formaPagamento: celebrate_1.Joi.string().uuid().allow(null, ''),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required()
    },
    _b)), fornecedorController.update);
fornecedorRouter.delete('/delete/:id', isAuthenticated_1.default, fornecedorController.delete);
exports.default = fornecedorRouter;
