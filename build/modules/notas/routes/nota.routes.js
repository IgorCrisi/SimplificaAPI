"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var isAuthenticated_1 = __importDefault(require("../../../shared/http/middlewares/isAuthenticated"));
var NotaController_1 = __importDefault(require("../controllers/NotaController"));
var notaRouter = (0, express_1.Router)();
var notaController = new NotaController_1.default();
notaRouter.get('/', isAuthenticated_1.default, notaController.index);
notaRouter.get('/listByLoja/:id', isAuthenticated_1.default, notaController.listByLoja);
notaRouter.get('/listNotaByFornecedorAndByLoja/:fornecedor_id/:loja_id', isAuthenticated_1.default, notaController.listNotaByFornecedorAndByLoja);
notaRouter.get('/listNotaByFornecedor/:id', isAuthenticated_1.default, notaController.listNotaByFornecedor);
notaRouter.get('/:id', isAuthenticated_1.default, notaController.show);
notaRouter.post('/create', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        numero: celebrate_1.Joi.string().required(),
        valor: celebrate_1.Joi.string().required(),
        fornecedor: celebrate_1.Joi.string().uuid().allow(null, ''),
        tipoNota: celebrate_1.Joi.string().uuid().allow(null, ''),
        destino: celebrate_1.Joi.string().uuid().allow(null, ''),
        formaPagamento: celebrate_1.Joi.string().uuid().allow(null, ''),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        status: celebrate_1.Joi.boolean().required(),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required()
    },
    _a)), notaController.create);
notaRouter.patch('/update/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        numero: celebrate_1.Joi.string().required(),
        valor: celebrate_1.Joi.string().required(),
        fornecedor: celebrate_1.Joi.string().uuid().allow(null, ''),
        tipoNota: celebrate_1.Joi.string().uuid().allow(null, ''),
        destino: celebrate_1.Joi.string().uuid().allow(null, ''),
        formaPagamento: celebrate_1.Joi.string().uuid().allow(null, ''),
        observacao: celebrate_1.Joi.string().allow(null, ''),
        status: celebrate_1.Joi.boolean().required(),
        loja: celebrate_1.Joi.string().uuid().required(),
        usuario_update: celebrate_1.Joi.string().required()
    },
    _b)), notaController.update);
notaRouter.patch('/setStatus/:id', isAuthenticated_1.default, (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        status: celebrate_1.Joi.boolean().required(),
        usuario_update: celebrate_1.Joi.string().required()
    },
    _c)), notaController.setStatus);
notaRouter.delete('/delete/:id', isAuthenticated_1.default, notaController.delete);
exports.default = notaRouter;
