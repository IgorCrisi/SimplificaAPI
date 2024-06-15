"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var destino_routes_1 = __importDefault(require("../../../modules/destinos/routes/destino.routes"));
var forma_routes_1 = __importDefault(require("../../../modules/formaPagamento/routes/forma.routes"));
var fornecedor_routes_1 = __importDefault(require("../../../modules/fornecedor/routes/fornecedor.routes"));
var loja_routes_1 = __importDefault(require("../../../modules/lojas/routes/loja.routes"));
var nota_routes_1 = __importDefault(require("../../../modules/notas/routes/nota.routes"));
var tipo_routes_1 = __importDefault(require("../../../modules/tipoNota/routes/tipo.routes"));
var password_routes_1 = __importDefault(require("../../../modules/users/routes/password.routes"));
var profile_routes_1 = __importDefault(require("../../../modules/users/routes/profile.routes"));
var sessions_routes_1 = __importDefault(require("../../../modules/users/routes/sessions.routes"));
var users_routes_1 = __importDefault(require("../../../modules/users/routes/users.routes"));
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.use('/user', users_routes_1.default);
routes.use('/password', password_routes_1.default);
routes.use('/profile', profile_routes_1.default);
routes.use('/session', sessions_routes_1.default);
routes.use('/loja', loja_routes_1.default);
routes.use('/formaPagamento', forma_routes_1.default);
routes.use('/tipoNota', tipo_routes_1.default);
routes.use('/destino', destino_routes_1.default);
routes.use('/fornecedor', fornecedor_routes_1.default);
routes.use('/nota', nota_routes_1.default);
exports.default = routes;